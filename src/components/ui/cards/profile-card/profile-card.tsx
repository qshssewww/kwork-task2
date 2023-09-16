'use client'
import React,{useState} from 'react';
import styles from "./profile-card.module.scss";
import InputProfile from '@/components/ui/input-profile/input-profile';
import Button from "@/components/ui/buttons/button/button";
import FormInput from "@/components/ui/formInput/formInput";
import stylesInput from "../../input-profile/input-profile.module.scss";
import { updateProfileData } from '@/utils/fetches';
import { getCookie } from '@/utils/cookie';
import { error } from 'console';
import { notification } from 'antd';


type NotificationType = 'success' | 'info' | 'warning' | 'error';
function ProfileCard({data}:any) {
  const token = getCookie("token");
  const [formValue, setFormValue] = useState<any>({Name:data?.Profile.InputPeople[0]?.description, Surname:data?.Profile.InputPeople[1]?.description, Birthday: data?.Profile.InputPeople[2]?.description, Email: data?.Profile.InputPeople[3]?.description, Phone: data?.Profile.InputPeople[4]?.description });
  const onInputChangeUpdateProfile = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Successfully',
      // description:'Required phone number',
    });
  };
  const updateProfile = (formData:any) =>{
   const form = {
      "name": formData.Name,
      "email": formData.Email, 
      "surname": formData.Surname,
      "telephone": formData.Phone,
      "date_of_birth": formData.Birthday 
  }
    updateProfileData(form, token)
    .then((res) => {
      console.log(res)
      openNotificationWithIcon('success')

    })
    .catch(() => console.log("error"));
  }
  return (  
    <li>
        {contextHolder} 

      <div className={styles.ProfileContainer}>
        <img className={styles.avatar} src={data?.Profile.Photo.url} alt="img" />
        <div className={styles.uploadContainer}>
          <h3 className={styles.editText}>{data.Profile.Photo.buttonUpload}</h3>
          <label className={styles.inputFile}>
            <input type="file" name="file"/>
            <span className={styles.inputFileBtn}>Upload</span>           
          </label>
        </div>
      </div>
      <div className={styles.infoContainer}>
      {data?.Profile.InputPeople.map((el: any, index: number) =>
          <div className={stylesInput.container} key={index}>
          <p className={stylesInput.content}>{el.name || el.People}</p>
          <input
          name={el.name || el.People}
          type="text" 
          value={formValue[el.name || el.People]} 
          onChange={onInputChangeUpdateProfile}
          className={stylesInput.input}
          />
        </div>
          )}
          <Button onClick={()=>{
            updateProfile(formValue)
          }} extraClass={styles.button} content={data?.Profile.ButtonSave} />
      </div>
    </li>
  );
}

export default ProfileCard;