import {
  GET_RESERVATION_DATA_REQUEST,
  GET_RESERVATION_DATA_SUCCESS,
  GET_RESERVATION_DATA_FAILED,
  SET_RESERVATION_MODAL_OPENED,
  SET_RESERVATION_MODAL_CLOSED,
  SET_CURRENT_OPENED_MODAL,
  SET_CURRENT_MODAL_DATA,
  SET_RESERVATION_FORM_STATE_RETURN_DATE,
  SET_RESERVATION_FORM_STATE_RETURN_TIME,
  SET_RESERVATION_FORM_STATE_ADULTS,
  SET_RESERVATION_FORM_STATE_KIDS,
  SET_RESERVATION_FORM_STATE_FOOD,
  SET_RESERVATION_FORM_STATE_TRANSFER,
  SET_RESERVATION_LABELS_STATE_RETURN_DATE,
  SET_RESERVATION_LABELS_STATE_RETURN_TIME,
  SET_RESERVATION_LABELS_STATE_ADULTS,
  SET_RESERVATION_LABELS_STATE_KIDS,
  SET_RESERVATION_LABELS_STATE_FOOD,
  SET_RESERVATION_LABELS_STATE_TRANSFER,
  SET_TOTAL_FORM_DATA,
} from "../constants/reservation-modal";
import { IReservationModalData, ReservationModalDateAlias } from "../types";

export interface IGetReservationDataActionRequest {
  readonly type: typeof GET_RESERVATION_DATA_REQUEST;
}

export interface IGetReservationDataActionSuccess {
  readonly type: typeof GET_RESERVATION_DATA_SUCCESS;
  payload: IReservationModalData;
}

export interface IGetReservationDataActionFailed {
  readonly type: typeof GET_RESERVATION_DATA_FAILED;
}

export interface ISetReservationModalOpen {
  readonly type: typeof SET_RESERVATION_MODAL_OPENED;
}

export interface ISetReservationModalClosed {
  readonly type: typeof SET_RESERVATION_MODAL_CLOSED;
}

export interface ISetCurrentOpenedModal {
  readonly type: typeof SET_CURRENT_OPENED_MODAL;
  payload:
    | "returnDatePopup"
    | "calendarPopup"
    | "timePopup"
    | "peoplePopup"
    | "receiptPopup";
}

export interface ISetCurrentModalData {
  readonly type: typeof SET_CURRENT_MODAL_DATA;
  payload: ReservationModalDateAlias;
}

export interface ISetReservationFormStateReturnDate {
  readonly type: typeof SET_RESERVATION_FORM_STATE_RETURN_DATE;
  payload: string;
}

export interface ISetReservationFormStateReturnTime {
  readonly type: typeof SET_RESERVATION_FORM_STATE_RETURN_TIME;
  payload: string;
}

export interface ISetReservationFormStateReturnAdults {
  readonly type: typeof SET_RESERVATION_FORM_STATE_ADULTS;
  payload: string;
}

export interface ISetReservationFormStateReturnKids {
  readonly type: typeof SET_RESERVATION_FORM_STATE_KIDS;
  payload: string;
}
export interface ISetReservationFormStateReturnFood {
  readonly type: typeof SET_RESERVATION_FORM_STATE_FOOD;
}

export interface ISetReservationFormStateReturnTransfer {
  readonly type: typeof SET_RESERVATION_FORM_STATE_TRANSFER;
}

export interface ISetReservationLabelsStateReturnDate {
  readonly type: typeof SET_RESERVATION_LABELS_STATE_RETURN_DATE;
}

export interface ISetReservationLabelsStateReturnTime {
  readonly type: typeof SET_RESERVATION_LABELS_STATE_RETURN_TIME;
}

export interface ISetReservationLabelsStateReturnAdults {
  readonly type: typeof SET_RESERVATION_LABELS_STATE_ADULTS;
}

export interface ISetReservationLabelsStateReturnKids {
  readonly type: typeof SET_RESERVATION_LABELS_STATE_KIDS;
}
export interface ISetReservationLabelsStateReturnFood {
  readonly type: typeof SET_RESERVATION_LABELS_STATE_FOOD;
}

export interface ISetReservationLabelsStateReturnTransfer {
  readonly type: typeof SET_RESERVATION_LABELS_STATE_TRANSFER;
}

export interface ISetTotalFormData {
  readonly type: typeof SET_TOTAL_FORM_DATA;
}

export type TApiReservationDataActions =
  | IGetReservationDataActionRequest
  | IGetReservationDataActionSuccess
  | IGetReservationDataActionFailed
  | ISetReservationModalOpen
  | ISetReservationModalClosed
  | ISetCurrentOpenedModal
  | ISetCurrentModalData
  | ISetReservationFormStateReturnDate
  | ISetReservationFormStateReturnTime
  | ISetReservationFormStateReturnAdults
  | ISetReservationFormStateReturnKids
  | ISetReservationFormStateReturnFood
  | ISetReservationFormStateReturnTransfer
  | ISetReservationLabelsStateReturnDate
  | ISetReservationLabelsStateReturnTime
  | ISetReservationLabelsStateReturnAdults
  | ISetReservationLabelsStateReturnKids
  | ISetReservationLabelsStateReturnFood
  | ISetReservationLabelsStateReturnTransfer
  | ISetTotalFormData;

