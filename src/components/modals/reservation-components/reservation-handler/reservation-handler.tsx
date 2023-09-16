'use client'

import {
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import styles from "./reservation-handler.module.scss";
import ReservationOverlay from "../reservation-overlay/reservation-overlay";
import {
  ReservationPeopleContent,
  ReservationReceiptContent,
  ReservationReturnDateContent,
  ReservationTimeContent,
} from "../reservation-content/index";
import DatePicker from "@/components/ui/date-picker/date-picker";
import { getReservationModalData } from "@/redux/actions/api-data";
import { useTDispatch } from "@/types/types";
import { useAppSelector } from "@/redux/redux-hooks";
import {
  SET_CURRENT_MODAL_DATA,
  SET_CURRENT_OPENED_MODAL,
  SET_RESERVATION_FORM_STATE_RETURN_DATE,
  SET_RESERVATION_FORM_STATE_RETURN_TIME,
} from "@/redux/constants/reservation-modal";
import { getReservationUpdatedData } from "@/utils/fetches";
import { getOptionsList } from "@/utils/functions";
import { IReservationModalDataReceipt } from "@/redux/types";

interface Props {
  data: any;
}

function ReservationHandler({ data }: Props) {
  const dispatch = useTDispatch();
  const reservationModalData = useAppSelector(
    (state) => state.reservationModalData.allData
  );

  const { currentOpenedModal, reservationFormState } = useAppSelector(
    (state) => state.reservationModalData
  );
  // console.log(reservationFormState);

  // get initial data for popups
  useEffect(() => {
    dispatch(getReservationModalData("132559"));
  }, []);

  const choseReturnDate = (e: SyntheticEvent) => {
    const target = e.currentTarget as HTMLButtonElement;
    dispatch({
      type: SET_RESERVATION_FORM_STATE_RETURN_DATE,
      payload: target.value,
    });
  };

  const choseReturnTime = (e: SyntheticEvent) => {
    const target = e.currentTarget as HTMLButtonElement;
    dispatch({
      type: SET_RESERVATION_FORM_STATE_RETURN_TIME,
      payload: target.value,
    });
  };

  const [receiptData, setReceiptData] =
    useState<IReservationModalDataReceipt | null>(null);
  // the route of popups opening
  const onSubmitClick = () => {
    // switch (isPopupOpen.returnDatePopup) {
    switch (currentOpenedModal.returnDatePopup) {
      case true: {
        switch (
          // check if user choses another date
          reservationFormState.returnDate ===
          reservationModalData?.ReserveOne?.calendarButton
        ) {
          case true:
            dispatch({
              type: SET_CURRENT_OPENED_MODAL,
              payload: "calendarPopup",
            });
            dispatch({
              type: SET_CURRENT_MODAL_DATA,
              payload: reservationModalData.ReserveTwo,
            });

            break;
          case false:
            {
              dispatch({
                type: SET_CURRENT_OPENED_MODAL,
                payload: "timePopup",
              });
            }
            dispatch({
              type: SET_CURRENT_MODAL_DATA,
              payload: reservationModalData.ReserveThree,
            });
            break;
        }
      }
    }
    switch (currentOpenedModal.calendarPopup) {
      case true:
        {
          dispatch({
            type: SET_CURRENT_OPENED_MODAL,
            payload: "timePopup",
          });
          dispatch({
            type: SET_CURRENT_MODAL_DATA,
            payload: reservationModalData.ReserveThree,
          });
        }
        break;
    }
    switch (currentOpenedModal.timePopup) {
      case true:
        {
          dispatch({
            type: SET_CURRENT_OPENED_MODAL,
            payload: "peoplePopup",
          });
          dispatch({
            type: SET_CURRENT_MODAL_DATA,
            payload: reservationModalData.ReserveFour,
          });
        }
        break;
    }
    switch (currentOpenedModal.peoplePopup) {
      case true:
        {
          const replaceSpace = (string: string) => {
            return string.split(" ").join("");
          };

          const formData = {
            calc: "true",
            type: "tour",
            id: "1",
            date: {
              returnDate: replaceSpace(reservationFormState.returnDate),
              arrivalDate: replaceSpace(reservationFormState.arrivalDate),
            },
            time: replaceSpace(reservationFormState.returnTime),
            adults: reservationFormState.people.adults,
            children: reservationFormState.people.kids,
            options: getOptionsList(reservationFormState.options),
          };

          getReservationUpdatedData(formData)
            .then((res) => {
              setReceiptData(res.Reserve.ReserveFive);
            })
            .then((res) => {
              dispatch({
                type: SET_CURRENT_OPENED_MODAL,
                payload: "receiptPopup",
              });
              dispatch({
                type: SET_CURRENT_MODAL_DATA,
                payload: reservationModalData.ReserveFive,
              });
            })
            .catch((err) => console.log(err));
        }
        break;
    }
  };

  const onReturnClick = () => {
    switch (currentOpenedModal.calendarPopup) {
      case true:
        {
          dispatch({
            type: SET_CURRENT_OPENED_MODAL,
            payload: "returnDatePopup",
          });
          dispatch({
            type: SET_CURRENT_MODAL_DATA,
            payload: reservationModalData.ReserveOne,
          });
        }
        break;
    }
    switch (currentOpenedModal.timePopup) {
      case true:
        {
          dispatch({
            type: SET_CURRENT_OPENED_MODAL,
            payload: "returnDatePopup",
          });
          dispatch({
            type: SET_CURRENT_MODAL_DATA,
            payload: reservationModalData.ReserveOne,
          });
        }
        break;
    }
    switch (currentOpenedModal.peoplePopup) {
      case true:
        {
          dispatch({
            type: SET_CURRENT_OPENED_MODAL,
            payload: "timePopup",
          });
          dispatch({
            type: SET_CURRENT_MODAL_DATA,
            payload: reservationModalData.ReserveThree,
          });
        }
        break;
    }
    switch (currentOpenedModal.receiptPopup) {
      case true:
        {
          dispatch({
            type: SET_CURRENT_OPENED_MODAL,
            payload: "peoplePopup",
          });
          dispatch({
            type: SET_CURRENT_MODAL_DATA,
            payload: reservationModalData.ReserveFour,
          });
        }
        break;
    }
  };
  // console.log(data,"--idddd")
  return (
    <>
      <ReservationOverlay
        extraClass={styles.overlay}
        tourId={data?.Tour?.Detal?.HeadDetal?.id}
        onSubmitClick={onSubmitClick}
        onReturnButtonClick={onReturnClick}
      >
        <div className={styles.contentContainer}>
          {currentOpenedModal.returnDatePopup && (
            <ReservationReturnDateContent
              tourId={data?.Tour?.Detal?.HeadDetal?.id}
              extraClass={styles.returnDateContent}
              onButtonClick={(e) => choseReturnDate(e)}
              activeButtonState={reservationFormState.returnDate}
            />
          )}
          {currentOpenedModal.calendarPopup && (
            <DatePicker extraClass={styles.calendarContent} />
          )}
          {currentOpenedModal.timePopup && (
            <ReservationTimeContent
              tourId={data?.Tour?.Detal?.HeadDetal?.id}
              extraClass={styles.timeContent}
              onButtonClick={(e) => choseReturnTime(e)}
              activeButtonState={reservationFormState.returnTime}
            />
          )}
          {currentOpenedModal.peoplePopup && (
            <ReservationPeopleContent extraClass={styles.peopleContent} />
          )}
          {currentOpenedModal.receiptPopup && receiptData && (
            <ReservationReceiptContent
              receiptData={receiptData}
              extraClass={styles.receiptContent}
            />
          )}
        </div>
      </ReservationOverlay>
    </>
  );
}
export default ReservationHandler;
