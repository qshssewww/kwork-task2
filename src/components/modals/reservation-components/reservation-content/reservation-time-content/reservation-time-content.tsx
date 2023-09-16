import styles from "./reservation-time-content.module.scss";
import ReservationOptionButton from "@/components/modals/reservation-components/reservation-option-button/reservation-option-button";
import { SET_RESERVATION_LABELS_STATE_RETURN_TIME } from "@/redux/constants/reservation-modal";
import { useAppDispatch, useAppSelector } from "@/redux/redux-hooks";
import { getBookingModalData } from "@/utils/fetches";
import { SyntheticEvent, useEffect, useState } from "react";

interface Props {
  onButtonClick: (() => void) | ((e: SyntheticEvent) => void);
  activeButtonState: string;
  extraClass?: string;
  tourId: any
}

function ReservationTimeContent({
  onButtonClick,
  activeButtonState,
  extraClass,
  tourId
}: Props) {
  const [times, setTimes] = useState<any>()
  const getModalData = (id:any) =>{
    getBookingModalData(id)
    .then((res) => {
      if (res?.id){
        var selectData = [];
        for (let i=0; i<res.time.length; i++){
          if (res.time[i].length > 5){

            selectData.push({timeFree : res.time[i]})
          } else {
            selectData.push({timeFree : res.time[i]+":00"})

          }
         
        }
        setTimes(selectData);
        // console.log(selectData,"---res")
      } else {
        null
      }
    })
    .catch(()=> console.log("error"))
  }
  useEffect(()=>{
    if (tourId?.substring(4,tourId?.length)){
      getModalData(tourId?.substring(4,tourId?.length))
    }
  },[tourId?.substring(4,tourId?.length)])
  const dispatch = useAppDispatch();
  const timeData = useAppSelector(
    (state) => state.reservationModalData.allData.ReserveThree
  );

  const { reservationFormState } = useAppSelector(
    (state) => state.reservationModalData
  );

  useEffect(() => {
    dispatch({ type: SET_RESERVATION_LABELS_STATE_RETURN_TIME });
  }, [reservationFormState.returnTime]);
  // console.log(timeData,"--time");
  return timeData ? (
    <div className={`${styles.container} ${extraClass}`}>
      {times?.map((el:any, index: number) => {
        return (
          <ReservationOptionButton
            key={index}
            title={el.timeFree}
            onButtonClick={onButtonClick}
            activeButtonState={activeButtonState}
            buttonValue={el.timeFree}
          />
        );
      })}
    </div>
  ) : null;
}

export default ReservationTimeContent;
