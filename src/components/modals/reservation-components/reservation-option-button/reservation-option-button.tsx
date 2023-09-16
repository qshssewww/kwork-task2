import { ReactNode, SyntheticEvent, useMemo } from "react";
import styles from "./reservation-option-button.module.scss";

interface Props {
  title: string;
  additionalData?: string;
  active?: boolean;
  Icon?: ReactNode;
  onButtonClick: (() => void) | ((e: SyntheticEvent) => void);
  buttonValue?: string;
  activeButtonState: string;
}

function ReservationOptionButton({
  title,
  additionalData,
  Icon,
  onButtonClick,
  buttonValue,
  activeButtonState,
}: Props) {

  const buttonValueState = useMemo(() => {
    return buttonValue ? buttonValue : additionalData;
  }, [buttonValue, additionalData]);

  return (
    <button
      onClick={onButtonClick}
      type="button"
      value={buttonValueState && buttonValueState}
      className={`${styles.container} ${
        buttonValueState === activeButtonState && styles.container_status_active
      }`}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.additionalData}> {additionalData}</div>
      {Icon}
    </button>
  );
}

export default ReservationOptionButton;
