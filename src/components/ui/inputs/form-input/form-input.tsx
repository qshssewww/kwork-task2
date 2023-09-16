import Image from "next/image";
import styles from "./form-input.module.scss";
import calendarIcon from "../../../../images/logos/icons/calendar.png";

interface Props {
  name: string;
  title: string;
  value: string;
  calendar?: boolean;
  disabled?: boolean;
}

function FormInput({ name, title, value, calendar = false, disabled }: Props) {
  return (
    <label className={styles.label} htmlFor="">
      <div className={styles.contentContainer}>
        <p className={styles.title}>{title}</p>
        <input
          className={styles.input}
          disabled={disabled}
          type="text"
          name={name}
          defaultValue={value}
        />
      </div>
      {calendar && (
        <Image
          className={styles.icon}
          src={calendarIcon}
          alt={"input icon"}
          width={16}
          height={16}
        />
      )}
    </label>
  );
}
export default FormInput;
