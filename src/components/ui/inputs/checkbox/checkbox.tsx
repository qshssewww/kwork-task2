import clsx from "clsx";
import styles from "./checkbox.module.scss";
import { useAppDispatch } from "@/redux/redux-hooks";

interface Props {
  title: string;
  caption: string;
  dispatchType: string;
  checked: boolean;
}

function Checkbox({ title, caption, dispatchType, checked }: Props) {

  const dispatch = useAppDispatch();

  const isInputActive = clsx(styles.input, {
    [styles?.active]: checked,
  });


  return (
    <label className={styles.label} htmlFor="">
      <div className={styles.inputContainer}>
        <input
          className={isInputActive}
          type="checkbox"
          name={title}
          checked={checked}
          onChange={() => dispatch({ type: dispatchType })}
        />
        <span className={styles.checkMark}></span>
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.caption}>{caption}</p>
      </div>
    </label>
  );
}

export default Checkbox;
