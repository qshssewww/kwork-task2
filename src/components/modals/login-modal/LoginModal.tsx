"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import CloseModal from "@/images/logos/icons/closeModalForm.svg";
import Modal from "react-modal";
import styles from "./LoginModal.module.scss";
import { Dispatch, SetStateAction, useState } from "react";
import FormInput from "@/components/ui/formInput/formInput";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { loginRequest } from "../../../utils/fetches";
import { registernRequest } from "../../../utils/fetches";
import { useAppSelector, useAppDispatch } from "../../../redux/redux-hooks";
import { setCookie, getCookie } from "@/utils/cookie";
import { SET_USER, USER_LOGIN } from "../../../redux/actions/profile";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: 'none',
    borderRadius: '5px'
  },

  overlay: {
    background: "rgba(0,0,0,.5)"
  }
};

export default function LoginModal() {
  const cookieLiveTime = 60*60*24*7;
  const [modalType, setModalType] = useState("Entrance");
  const [curLang, setLang] = useState('en');
  const [formLogin, setValueLogin] = useState({ email: "", password: "" });
  const [formRegister, setValueRegister] = useState({
    email: "",
    name: "",
    password: "",
  });
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const token = getCookie("token");
  const isAuth = useAppSelector((state) => state.profile.isAuth);

  const onInputChangeLogin = (e: any) => {
    setValueLogin({ ...formLogin, [e.target.name]: e.target.value });
  };
  const onInputChangeRegister = (e: any) => {
    setValueRegister({ ...formRegister, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (token) {
      router.push("/"+curLang+"/personal");
    }
    var url = pathname.split('/');
    if (url[1]) setLang(url[1]);
    if(url.length > 2) {
      if (url[2] == "login") {
        setModalType("Entrance");
      } else if (url[2] == "register") {
        setModalType("Registration");
      }
    }
  }, [token]);

  const replaseLogin = useCallback(() => {
    router.replace("/"+curLang+"/register");
    setModalType("Entrance");
    setValueLogin({ email: "", password: "" });
  }, [router]);

  const replaseRegister = useCallback(() => {
    router.replace("/"+curLang+"/login");
    setModalType("Registration");
    setValueRegister({ email: "", name: "", password: "" });
  }, [router]);
  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  function setLogin(form: any) {
    return function (dispatch: any) {
      loginRequest(form)
        .then((res: any) => {
          const authToken = res.api_token;
          if (res) {
            dispatch({ type: USER_LOGIN });
            const authToken = res.api_token;
            setCookie("token", authToken, { "max-age": cookieLiveTime });
          } else {
            null;
          }
        })
        .catch(() => console.log("error"));
    };
  }

  function setRegister(form: any) {
    return function (dispatch: any) {
      registernRequest(form)
        .then((res: any) => {
          const authToken = res.api_token;
          if (res) {
            dispatch({ type: USER_LOGIN });
            const authToken = res.api_token;
            setCookie("token", authToken, { "max-age": cookieLiveTime });
          } else {
            null;
          }
        })
        .catch(() => console.log("error"));
    };
  }
  return (
    <Modal
      isOpen={token ? false : true}
      onRequestClose={() => onDismiss()}
      style={customStyles}
      className={styles.modal}
      ariaHideApp={false}
    >
      <div
        className={
          modalType == "Registration"
            ? styles.containerRegister
            : styles.container
        }
      >
        <button className={styles.closeButton} onClick={() => onDismiss()}>
          <CloseModal width={40} height={40} />
        </button>
        <div className={styles.contentContainer}>
          <div className={styles.buttonsContainer}>
            <button
              onClick={() => replaseLogin()}
              className={
                modalType == "Registration"
                  ? styles.Button
                  : styles.ButtonDisable
              }
            >
              <Link href={"/register"}>
                <p
                  className={
                    modalType == "Registration"
                      ? styles.submitButtonText
                      : styles.submitButtonTextDisable
                  }
                >
                  Registration
                </p>
              </Link>
            </button>

            <button
              onClick={() => replaseRegister()}
              className={
                modalType == "Entrance" ? styles.Button : styles.ButtonDisable
              }
            >
              <Link className={styles.link} href={"/login"}>
                <p
                  className={
                    modalType == "Entrance"
                      ? styles.submitButtonText
                      : styles.submitButtonTextDisable
                  }
                >
                  Entrance
                </p>
              </Link>
            </button>
          </div>
          {modalType == "Entrance" ? (
            <>
              <div className={styles.inputContainer}>
                <FormInput
                type=""
                  name={"email"}
                  onChange={onInputChangeLogin}
                  description="Email"
                />
                <FormInput
                  name={"password"}
                  type={"password"}
                  onChange={onInputChangeLogin}
                  description="Password"

                />
              </div>
              <button
                onClick={() => dispatch(setLogin(formLogin))}
                className={styles.Button}
              >
                <p className={styles.submitButtonText}>Entrance</p>
              </button>
            </>
          ) : (
            <>
              <div className={styles.inputContainer}>
                <FormInput
                type=""
                  name={"name"}
                  onChange={onInputChangeRegister}
                  description="You name"

                />
                <FormInput
                type=""
                  name={"email"}
                  onChange={onInputChangeRegister}
                  description="Email"

                />
                <FormInput
                  name={"password"}
                  type={"password"}
                  onChange={onInputChangeRegister}
                  description="Password"

                />
              </div>
              <button
                onClick={() => dispatch(setRegister(formRegister))}
                className={styles.Button}
              >
                <p className={styles.submitButtonText}>Entrance</p>
              </button>
            </>
          )}
          <button className={styles.restoreButton}>
            <p className={styles.restoreText}>Restore password</p>
          </button>
        </div>
      </div>
    </Modal>
  );
}
