'use client'
import React,{useState} from 'react';
import styles from "./input-profile.module.scss";

function InputProfile({name, placeholder, formValue, setFormValue}: any) {
    // const [formValue, setFormValue] = useState<any>(placeholder);
    // setFormValue((prev:any) => [...prev, {"name": name, "value": placeholder }]);
    const onInputChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
      // setFormValue(prevstate => (... { name: e.target.value});
      // setFormValue((prev:any) => [...prev, {"name": name, "value": e.target.value}]);
    };
  
  return (
    <div className={styles.container}>
      <p className={styles.content}>{name}</p>
      <input
       type="text" 
      //  value={formValue[]} 
      //  onChange={onInputChange} 
       className={styles.input}
       />
    </div>
  );
}

export default InputProfile;
