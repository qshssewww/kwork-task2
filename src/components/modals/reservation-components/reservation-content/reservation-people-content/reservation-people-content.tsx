import Counter from "@/components/ui/inputs/counter/counter";
import styles from "./reservation-people-content.module.scss";
import Checkbox from "@/components/ui/inputs/checkbox/checkbox";
import { useAppDispatch, useAppSelector } from "@/redux/redux-hooks";
import {
  SET_RESERVATION_FORM_STATE_ADULTS,
  SET_RESERVATION_FORM_STATE_KIDS,
  SET_RESERVATION_LABELS_STATE_ADULTS,
  SET_RESERVATION_LABELS_STATE_KIDS,
} from "@/redux/constants/reservation-modal";
import { useEffect } from "react";

interface Props {
  extraClass?: string;
}

function ReservationPeopleContent({ extraClass }: Props) {
  const dispatch = useAppDispatch();
  const timeData = useAppSelector(
    (state) => state.reservationModalData.allData.ReserveFour
  );
  const reservationFormStatePeople = useAppSelector(
    (state) => state.reservationModalData.reservationFormState.people
  );

  const reservationFormStateOptions = useAppSelector(
    (state) => state.reservationModalData.reservationFormState.options
  );

  useEffect(() => {
    dispatch({ type: SET_RESERVATION_LABELS_STATE_ADULTS });
    dispatch({ type: SET_RESERVATION_LABELS_STATE_KIDS });
  }, [reservationFormStatePeople.adults, reservationFormStatePeople.kids]);

  return timeData ? (
    <div className={`${styles.peopleContainer} ${extraClass}`}>
      <div className={styles.countersContainer}>
        <Counter
          title={timeData.peopleBig}
          dispatchType={SET_RESERVATION_FORM_STATE_ADULTS}
          minValue={1}
        />
        <Counter
          title={timeData.peopleSmall}
          dispatchType={SET_RESERVATION_FORM_STATE_KIDS}
        />
      </div>
      <div className={styles.inputsContainer}>
        {timeData?.more.map((el, index: number) => {
          const { title, desc } = el;
          const dispatchType = `SET_RESERVATION_FORM_STATE_${title.toUpperCase()}`;
          const checked =
            title.toLocaleLowerCase() === "food"
              ? reservationFormStateOptions.Food
              : title.toLocaleLowerCase() === "transfer"
              ? reservationFormStateOptions.Transfer
              : false;

          return (
            <Checkbox
              key={index}
              title={title}
              caption={desc}
              checked={checked}
              dispatchType={dispatchType}
            />
          );
        })}
      </div>
    </div>
  ) : null;
}

export default ReservationPeopleContent;
