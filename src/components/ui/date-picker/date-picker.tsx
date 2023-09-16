"use client";

import "./date-picker.scss";
import "moment/locale/ru";
import React, { useEffect, useMemo, useState } from "react";
import Calendar from "react-calendar";
import RoundArrowButton from "../buttons/round-arrow-button/round-arrow-button";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "@/redux/redux-hooks";
import {
  SET_RESERVATION_FORM_STATE_RETURN_DATE,
  SET_RESERVATION_LABELS_STATE_RETURN_DATE,
} from "@/redux/constants/reservation-modal";
import { useMediaQuery } from "@mui/material";

type TValuePiece = Date | null;

export type TValue = TValuePiece | [TValuePiece, TValuePiece];

interface Props {
  extraClass?: string;
}

function DatePicker({ extraClass }: Props) {
  const [value, onChange] = useState<TValue>(new Date());
  const dispatch = useAppDispatch();
  const calendarData = useAppSelector(
    (state) => state.reservationModalData?.allData?.ReserveTwo
  );

  const isMobile = useMediaQuery("(max-width:800px)");

  const { reservationFormState } = useAppSelector(
    (state) => state.reservationModalData
  );

  useEffect(() => {
    dispatch({ type: SET_RESERVATION_LABELS_STATE_RETURN_DATE });
  }, [reservationFormState.returnDate]);

  const monthFormat = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const chosenDate = useMemo(() => {
    return (
      value instanceof Date &&
      `${value.getDate()} ${monthFormat[value.getMonth()]}`
    );
  }, [value]);

  useEffect(() => {
    dispatch({
      type: SET_RESERVATION_FORM_STATE_RETURN_DATE,
      payload: chosenDate,
    });
  }, [chosenDate, value]);

  const disabledDate = (current: any) => {
    const weekday = moment(current).locale("en").format("dd");

    const isOff = calendarData?.calendar.find(
      (el) => el.nameDate === weekday && el.status === "off"
    );

    if (isOff) {
      return current;
    }
  };

  return (
    <div className={`container ${extraClass}`}>
      <Calendar
        onChange={onChange}
        tileDisabled={({ date }) => disabledDate(date)}
        maxDetail="month"
        value={value}
        locale="en-GB"
        formatMonth={(locale, date) =>
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ][date.getMonth()]
        }
        formatShortWeekday={(locale, date) =>
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"][date.getDay()]
        }
        nextLabel={
          <RoundArrowButton
            direction="right"
            size={!isMobile ? "medium" : "small"}
          />
        }
        prevLabel={
          <RoundArrowButton
            direction="left"
            size={!isMobile ? "medium" : "small"}
          />
        }
      />
    </div>
  );
}

export default DatePicker;
