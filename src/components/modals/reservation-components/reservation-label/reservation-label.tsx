import { SyntheticEvent } from "react";
import styles from "./reservation-label.module.scss";
import CloseButton from "@/images/logos/icons/close-label-button.svg";

interface Props {
  content: string;
  hasCloseButton?: boolean;
  // onClick?: (() => void) | ((e: SyntheticEvent) => void);
  // id?: string;
}

function ReservationLabel({
  content,
  hasCloseButton = false,
}: // onClick,
// id,
Props) {
  return (
    <div className={styles.container}>
      <p className={styles.content}>{content}</p>
      {hasCloseButton ? (
        <button className={styles.closeButton}>
          <CloseButton width={8} height={8} />
        </button>
      ) : null}
    </div>
  );
}

export default ReservationLabel;
