import React from 'react';
import styles from "./formInput.module.scss";

export interface InputProps {
    description: string | undefined;
    extraClass?: string;
    refProp?: any;
    name: string;
    type: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
  }
  const FormInput: React.FC<InputProps> = ({
    description,
    extraClass,
    refProp,
    name,
    onChange,
    type,
  }) => {
    return (
    <div className={`${styles.inputContainer} ${extraClass}`}>
      <input
        required
        ref={refProp}
        placeholder={description}
        name={name}
        type={type}
        className={styles.input}
        onChange={onChange}
      />
    </div>
    );
}

export default FormInput;