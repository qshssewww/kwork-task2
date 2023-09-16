'use client'

// import {cookies} from "next/headers";
import Header from "@/components/header/header";
import styles from "./checkout-section.module.scss";

import Button from "@/components/ui/buttons/button/button";
import CheckoutCard from "@/components/ui/cards/checkout-card/checkout-card";
import ContactsForm from "@/components/ui/forms/contacts-form/contacts-form";
import SectionTitle from "@/components/ui/section-title/section-title";
import Footer from "@/components/footer/footer";
// import { getCookie } from "@/utils/cookie";
import Cookies from 'js-cookie';
// import { getCookie } from "@/utils/cookie";
import { useEffect, useState } from "react";
import { getCheckoutAllOrder, getUserData, tourPay } from "@/utils/fetches";
import { Result } from "antd";
import { useRouter, usePathname } from "next/navigation";

function CheckoutSection({data}:any) {
  // console.log(data,"--")
  const router = useRouter();
  const token =  Cookies.get('token');
  const [order, setOrder] = useState<any>();
  const [contact, setContact] = useState<any>();
  const [user, setUser] = useState<any>();
  const [pay, setPay] = useState<any>("error");
  // console.log(token,"----")
  const getUser = (token:any) =>{
    getUserData(token)
    .then((res) => {
      // console.log(res)
      if (res.Success.id){
        setUser(res.Success)
      } else {
        null
      }
    })
    .catch(()=> console.log("error"))
  }
  const getOrder = (token:any) => {
    // console.log(token)
    getCheckoutAllOrder(token)
          .then((res: any) => {
            if (res) {
              // console.log(res,"----res");
              setOrder(res.types.tours);
              setContact(res.contacts);
            } else {
              null;
            }
          })
          .catch(() => console.log("error"));
  }
  
  useEffect(()=>{
      getUser(token);
      getOrder(token);
  },[])

  const payTour = (order:any, contact:any) =>{
    var products : any = [];
    var len = order.length;
    for (let i=0; i < len; i++){
      products.push({
        type:"tour",
        id: order[i]?.id,
        adults: order[i].adults,
        kids: order[i].kids,
        transfer: order[i].transfer ? true : false,
        food: order[i].food ? true : false,
        transfer_price: order[i]?.transfer_price,
        food_price: order[i]?.food_price,
        price: order[i]?.price,
        old_price: order[i]?.old_price
      })
    }
    var form = {
      type: "program",
      user_id: user.id, 
      contact: "program", 
      status: "new", 
      pay: "yes", 
      product: products,  
      name: contact.name,
      surname: contact.surname,
      phone: contact.phone, 
      email: contact.email
  }
  tourPay(form)
  .then((res)=>{
    // console.log(res);
    if (res?.message){
      setPay("success")
    }
  })
  .catch(()=> {
    console.log("error")
    setPay("error")
  })
  }

  return (
    <>
    <Header data={data} />
    {
      pay == ""
      ?
      <div className={styles.container}>
      <SectionTitle
        extraClass={styles.title}
        content="Checkout"
        position="left"
        />
        {
          order?.length >= 0
          ?
          <>
      <div className={styles.cardsContainer}>
        {
          order?.map((item:any)=>(
            <CheckoutCard data={item} />
          ))
        }
      </div>

      <ContactsForm contact={contact} />

      <div className={styles.payButtonContainer}>
        <div className={styles.priceContainer}>
          <div className={styles.priceContainer}>
            <p className={`${styles.price} ${styles.lastPrice}`}>$350</p>
            <p className={`${styles.price} ${styles.newPrice}`}>$250 price</p>
          </div>
        </div>
        <Button onClick={()=>{
          payTour(order,contact);
        }} content="Pay" extraClass={styles.button}></Button>
      </div>
        </>
          :
          <div className={styles.noData}>
            <p>No data</p>
          </div>
        }
        
    </div>
      :
      pay == "success"
      ?
  <Result
  className={styles.status}
    status="success"
    title="Order has been piad"
    subTitle="Your payment has been accepted, you can check your order in your personal account"
    extra={[
      <Button onClick={()=>{
      router.push("/catalogue/personal")
      }} content="Personal account"></Button>,
    ]}
  />
  :
  <Result
  className={styles.status}
    status="error"
    title="Sorry, payment failed"
    subTitle="Try to pay again, you may have entered incorrect data to there is a problem with a card"
    extra={[
      <Button onClick={()=>{
        setPay("")
      }} content="Checkout"></Button>,
    ]}
  />
  }
    <Footer data={data} />
  </>
  );
}

export default CheckoutSection;
