"use client";

import { useAppDispatch } from "@/redux/redux-hooks";
import styles from "./counter.module.scss";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  dispatchType?: string;
  minValue?: number;
  extraClass?: string;
  titleExtraClass?: string;
}

function Counter({
  title,
  dispatchType,
  minValue = 0,
  extraClass,
  titleExtraClass,
}: Props) {
  const [counterState, setCounterState] = useState<number>(minValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatchType && dispatch({ type: dispatchType, payload: counterState });
  }, [counterState]);

  const decreaseCounterState = () => {
    if (counterState <= minValue) return;
    setCounterState(counterState - 1);
  };

  return (
    <div className={`${styles.container} ${extraClass}`}>
      <p className={`${styles.title} ${titleExtraClass}`}>{title}</p>
      <div className={styles.counterContainer}>
        <button
          className={styles.button}
          onClick={() => decreaseCounterState()}
          type="button"
          name="increaseButton"
        >
          -
        </button>
        <p className={styles.counterState}>{counterState}</p>
        <button
          className={styles.button}
          onClick={() => setCounterState(counterState + 1)}
          type="button"
          name="decreaseButton"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
