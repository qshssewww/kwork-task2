import styles from "./reservation-return-date-content.module.scss";
import ReservationOptionButton from "@/components/modals/reservation-components/reservation-option-button/reservation-option-button";
import Calendar from "@/images/logos/icons/calendar.svg";
import { SET_RESERVATION_LABELS_STATE_RETURN_DATE } from "@/redux/constants/reservation-modal";
import { useAppDispatch, useAppSelector } from "@/redux/redux-hooks";
import { getBookingModalData } from "@/utils/fetches";
import { SyntheticEvent, useEffect, useState } from "react";

interface Props {
  onButtonClick: (() => void) | ((e: SyntheticEvent) => void);
  activeButtonState: string;
  extraClass?: string;
  tourId:any
}

function ReservationReturnDateContent({
  onButtonClick,
  activeButtonState,
  extraClass,
  tourId
}: Props) {
  const [weeks, setWeeks] = useState<any>()
  const getModalData = (id:any) =>{
    getBookingModalData(id)
    .then((res) => {
      if (res?.id){
        var selectData = [];
        const daysOfWeek = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
        let today= new Date();
        var week_day = today.getDay();
        for (let i=0; i<res.week.length; i++){
          if (res.week[i] == week_day){
            selectData.push({nameDay : "Today", DataDay : today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate()})
          } else {
            if (res.week[i] - week_day > 0){
              const date = new Date();
              date.setDate(date.getDate() + (res.week[i] - week_day));
              selectData.push({nameDay : daysOfWeek[date.getDay()], DataDay : date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()})
            } else {
              const date = new Date();
              date.setDate(date.getDate() + (res.week[i] - week_day)+7);
              selectData.push({nameDay : daysOfWeek[date.getDay()], DataDay : date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()})
            }
          }
        }
        setWeeks(selectData);
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
  let today= new Date()
  var week_day = today.getDay();

  const returnData = useAppSelector(
    (state) => state.reservationModalData.allData.ReserveOne
  );
  const dispatch = useAppDispatch();

  const { reservationFormState } = useAppSelector(
    (state) => state.reservationModalData
  );

  useEffect(() => {
    dispatch({ type: SET_RESERVATION_LABELS_STATE_RETURN_DATE });
  }, []);

  useEffect(() => {
    !!reservationFormState.returnDate &&
      dispatch({ type: SET_RESERVATION_LABELS_STATE_RETURN_DATE });
  }, [reservationFormState.returnDate]);
  // console.log(weeks,"---weeks")
  // console.log(returnData,"---ret")
  // onButtonClick(weeks?.[0]?.DataDay)
  // returnData?.freeDate?
  return returnData ? (
    <div className={`${styles.container} ${extraClass}`}>
      {weeks?.map((el:any, index: number) => {
        return (
          <ReservationOptionButton
            key={index}
            title={el.nameDay}
            additionalData={el.DataDay}
            onButtonClick={onButtonClick}
            activeButtonState={activeButtonState}
          />
        );
      })}
      <ReservationOptionButton
        title={returnData?.calendarButton}
        Icon={<Calendar width={16} height={16} />}
        onButtonClick={onButtonClick}
        buttonValue={returnData.calendarButton}
        activeButtonState={activeButtonState}
      />
    </div>
  ) : null;
}

export default ReservationReturnDateContent;
