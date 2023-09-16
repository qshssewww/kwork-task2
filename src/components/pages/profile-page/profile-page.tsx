"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import styles from "./profile-page.module.scss";
import Header from "@/components/header/header";
import ProfileCard from "@/components/ui/cards/profile-card/profile-card";
import Footer from "@/components/footer/footer";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import ProfilePlaceCard from "@/components/ui/cards/profile-placeCard/profilePlaceCard";
import { useAppSelector, useAppDispatch } from "../../../redux/redux-hooks";
import { getCookie } from "@/utils/cookie";
import { getProfile, getUserData } from "@/utils/fetches";
import { SET_USER, USER_LOGIN } from "@/redux/actions/profile";

function ProfilePage() {
  const [modalType, setModalType] = useState("History of orders");
  const [token, setToken] = useState(null);
  const [curLang, setLang] = useState('en');
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.profile.userData);
  var user_id = null;
// console.log(userData,"---userda")
  function setProfile(pay: string) {
    getUserData(pay)
    .then((res) => {
      if (res.Success.id){
        user_id = res?.Success?.id;
      getProfile(user_id)
        .then((res) => {
          if (res) {
            dispatch({
              type: SET_USER,
              payload: res,
            });
            dispatch({ type: USER_LOGIN });
          } else {
            null;
          }
        })
        .catch(() => console.log("error---"));
    // };
      } else {
        null
      }
    })
    .catch(() => console.log("error"))
    
  }

  useEffect(() => {
    var url = window.location.pathname.split('/');
    if (url[1]) setLang(url[1]);
    var tempToken = getCookie("token");
    // console.log(tempToken);
    setToken(getCookie("token"));
    if (tempToken) {
      // dispatch(setProfile(tempToken));
      setProfile(tempToken);
    } else {
      window.location.href = "/"+curLang+'/login';
      //router.push("/"+curLang+'/login') // Белый экран. Хз, почему
    }
  }, [modalType]);


  return userData ? (
    <>
    <Header data={userData} />
      <main className={styles.container}>
        <h2 className={styles.title}>Personal Area</h2>
        <div className={styles.buttonsContainer}>
          <button
            onClick={() => setModalType("History of orders")}
            className={
              modalType == "History of orders"
                ? styles.Button
                : styles.ButtonDisable
            }
          >
            <p
              className={
                modalType == "History of orders"
                  ? styles.submitButtonText
                  : styles.submitButtonTextDisable
              }
            >
              {userData.Button[0].name}
            </p>
          </button>
          <button
            onClick={() => setModalType("Profile")}
            className={
              modalType == "Profile" ? styles.Button : styles.ButtonDisable
            }
          >
            <p
              className={
                modalType == "Profile"
                  ? styles.submitButtonText
                  : styles.submitButtonTextDisable
              }
            >
              {userData.Button[1].name}
            </p>
          </button>
        </div>
        <div className={styles.contentTable}>
          <ul className={styles.table}>
            {modalType == "History of orders" ? (
              <>
                {userData?.HistoryOrder.map((el: any, index:any) => (
                  <ProfilePlaceCard
                  key={index}
                    title={el.nameOrder}
                    status={el?.Status.StatusOrder}
                    date={el.SelectOrder[1]?.description}
                    peoples={el.SelectOrder[2]?.description}
                    lastPrice={el.Price.priceOld}
                    mainPrice={el.Price.priceNew}
                  />
                ))}
              </>
            ) : (
              <ProfileCard data={userData} />
            )}
          </ul>
        </div>
      </main>
      {/* <Footer data={userData} /> */}
    </>
  ) : null;
}

export default ProfilePage;
