import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, Button, Result, notification } from 'antd';
import styles from "./combo-packages-section.module.scss";
import ButtonFooter from "@/components/ui/buttons/button/button";
import { useMediaQuery } from "@mui/material";
import TourStepOne from './tour-step-one';
import FormInput from '@/components/ui/formInput/formInput';
import { useAppDispatch } from '@/redux/redux-hooks';
import { createTourOrder } from '@/utils/fetches';

type NotificationType = 'success' | 'info' | 'warning' | 'error';



function TourStepModal(modalOpen: any, setModalOpen:any ){
  const isMobile = useMediaQuery("(max-width:768px)");
  const dispatch = useAppDispatch();
  const [step, setStep] = useState(1);
  const [contactType, setContactType] = useState(0);
  const [formContact, setValueContact] = useState({ phone: "", type_sosial_media: "" });
  const [products, setProducts] = useState<any>();
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Was unsuccessfully',
      description:
        'Required phone number',
    });
  };
  const onInputChangeContact = (e: any) => {
    setValueContact({ ...formContact, [e.target.name]: e.target.value });
  };
  const postOrder = () =>{
    if (formContact?.phone?.length){
      // console.log(products);
      // console.log(formContact);
      const productsArray = [];
      for (let i = 0; i < products?.length; i++) {
      productsArray.push({
        type: "tour",
        id: products[i],
      });
      }
      const postData = {
        user_id : 1,
        contact:"program",
        phone: formContact.phone,
        product : productsArray,
        status: "new",
        type:"program"
      };
      createTourOrder(postData).then((res: any) => {
        if (res) {
          // console.log(res,"----res");
          setStep(3);
        } else {
          null;
        }
      })
      .catch(() => console.log("error"));

    } else {
      openNotificationWithIcon('error')
    }
  }
  // function setLogin(form: any) {
  //   return function (dispatch: any) {
  //       TourStep2Request(value)
  //       .then((res: any) => {
  //         const authToken = res.api_token;
  //         if (res) {
  //           console.log(res)
  //           dispatch({ type: USER_LOGIN });
  //           const authToken = res.api_token;
  //           setCookie("token", authToken, { "max-age": cookieLiveTime });
  //         } else {
  //           null;
  //         }
  //       })
  //       .catch(() => console.log("error"));
  //   };
  // }

  useEffect(()=>{
    if (products){
      setStep(2);
    }
  },[products]);
  // post
// $user_id = $request->input('user_id');
// $contact = $request->input('contact');
// $phone = $request->input('phone');
// $product = $request->input('product');
// $status = $request->input('status');
    return(
        <Modal
        centered
        open={modalOpen.modalOpen}
        footer={null}
        onCancel={() => modalOpen.setModalOpen(false)}
        width={ isMobile ? `100%` : `550px`}
        bodyStyle={ isMobile ? { height:"91vh"} : {}}
      >
        {contextHolder} 
        <div className={styles.tourModal}>
            {
                step == 1
                ?
                <TourStepOne products={products} setProducts={setProducts} />
                :
                step == 2
                ?
                <div className={styles.modalBody}>
                  <div>

                <p className={styles.titleModal}>Enter phone number</p>
                <div className={styles.desc}>
                  <span>
                    We will contact you and send you a <br/> unique price especially for you
                  </span>
                </div>
                  </div>
                <div className={styles.part2}>
                  <div>
                    <FormInput
                      type=""
                      name={"phone"}
                      onChange={onInputChangeContact}
                      description="Your phone"
                      extraClass={styles.inputModal}
                    />
                    <span className={styles.descSosial}>How to contact you</span>
                    <div className={styles.contacts}>
                        <div onClick={()=>{ setContactType(1) }} className={`${styles.contactItem} ${contactType == 1 ? styles.active : ``} `}>
                            <span>All</span>
                        </div>
                        <div onClick={()=>{ setContactType(2) }} className={`${styles.contactItem} ${contactType == 2 ? styles.active : ``} `}>
                            <span>Phone</span>
                        </div>
                        <div onClick={()=>{ setContactType(3) }} className={`${styles.contactItem} ${contactType == 3 ? styles.active : ``} `}>
                            <span>Whatsapp</span>
                        </div>
                        <div onClick={()=>{ setContactType(4) }} className={`${styles.contactItem} ${contactType == 4 ? styles.active : ``} `}>
                            <span>Telegram</span>
                        </div>
                    </div>
                  </div>
                <ButtonFooter onClick={() =>{
                  postOrder()
                }} extraClass={styles.buttonModal} content={`Send`} />
                </div>
                </div>
                :
                <div className={styles.part2}>
                  <Result
                  status="success"
                  title="Your application is accepted"
                  subTitle="We will contact you during bussiness hours 10.00-20.00 London time"
                  className={styles.result}
                  extra={[
                      <ButtonFooter onClick={() => modalOpen.setModalOpen(false)} extraClass={styles.buttonModal} content={`Close a window`} />
                  ]}
                  />
                </div>
            }
        </div>
      </Modal>
    )
}

export default TourStepModal;