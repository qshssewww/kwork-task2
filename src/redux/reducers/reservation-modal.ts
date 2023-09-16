import {
  IReservationFormState,
  IReservationModalData,
  ReservationModalDateAlias,
} from "../types";
import { TApiReservationDataActions } from "../actions/reservation-modal";
import {
  GET_RESERVATION_DATA_FAILED,
  GET_RESERVATION_DATA_REQUEST,
  GET_RESERVATION_DATA_SUCCESS,
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
} from "../constants/reservation-modal";
import { ICurrentOpenedModalData } from "../types";

type TReservationModalState = {
  allData: IReservationModalData;
  allDataRequest: boolean;
  allDataFailed: boolean;
  currentReservationModalData: ReservationModalDateAlias | null;
  isReservationPopupOpen: boolean;
  reservationFormState: IReservationFormState;
  reservationLabelsState: IReservationFormState;
  currentOpenedModal: ICurrentOpenedModalData;
};

export interface ISetReservationModalData {
  readonly type: any;
  payload: any;
}

const initialState: TReservationModalState = {
  allData: {
    ReserveOne: null,
    ReserveTwo: null,
    ReserveThree: null,
    ReserveFour: null,
    ReserveFive: null,
  },
  allDataRequest: false,
  allDataFailed: false,
  currentReservationModalData: null,
  isReservationPopupOpen: false,
  reservationFormState: {
    arrivalDate: "",
    returnDate: "",
    returnTime: "",
    people: {
      adults: "0",
      kids: "0",
    },
    options: {
      Food: false,
      Transfer: false,
    },
  },
  reservationLabelsState: {
    arrivalDate: "",
    returnDate: "",
    returnTime: "",
    people: {
      adults: "",
      kids: "",
    },
    options: {
      Food: false,
      Transfer: false,
    },
  },
  currentOpenedModal: {
    returnDatePopup: true,
    calendarPopup: false,
    timePopup: false,
    peoplePopup: false,
    receiptPopup: false,
  },
};

export const reservationModalData = (
  state = initialState,
  action: TApiReservationDataActions
): TReservationModalState => {
  switch (action.type) {
    case GET_RESERVATION_DATA_REQUEST:
      return { ...state, allDataRequest: true };

    case GET_RESERVATION_DATA_SUCCESS:
      return {
        ...state,
        allData: {
          ReserveOne: action.payload.ReserveOne,
          ReserveTwo: action.payload.ReserveTwo,
          ReserveThree: action.payload.ReserveThree,
          ReserveFour: action.payload.ReserveFour,
          ReserveFive: action.payload.ReserveFive,
        },
        allDataRequest: false,
        allDataFailed: false,
        currentReservationModalData: action.payload.ReserveOne,
        reservationFormState: {
          ...state.reservationFormState,
          arrivalDate: action.payload.ReserveOne?.freeDate[0]?.DataDay!,
          returnDate: action.payload.ReserveOne?.freeDate[0]?.DataDay!,
          returnTime: action.payload.ReserveThree?.time[0].timeFree!,
          // arrivalDate: "",
          // returnDate: "",
          // returnTime: "",modalstep
        },
      };

    case GET_RESERVATION_DATA_FAILED:
      return { ...state, allDataFailed: true };

    case SET_RESERVATION_MODAL_OPENED:
      return { ...state, isReservationPopupOpen: true };

    case SET_RESERVATION_MODAL_CLOSED:
      return { ...state, isReservationPopupOpen: false };

    case SET_CURRENT_OPENED_MODAL:
      const payloadModal = action.payload;
      const currentOpenedModal = Object.keys(state.currentOpenedModal).filter(
        (k) => state.currentOpenedModal[k]
      )[0];
      return {
        ...state,
        currentOpenedModal: {
          ...state.currentOpenedModal,
          [payloadModal]: true,
          [currentOpenedModal]: false,
        },
      };

    case SET_CURRENT_MODAL_DATA:
      return { ...state, currentReservationModalData: action.payload };

    case SET_RESERVATION_FORM_STATE_RETURN_DATE:
      return {
        ...state,
        reservationFormState: {
          ...state.reservationFormState,
          returnDate: action.payload,
        },
      };

    case SET_RESERVATION_FORM_STATE_RETURN_TIME:
      return {
        ...state,
        reservationFormState: {
          ...state.reservationFormState,
          returnTime: action.payload,
        },
      };

    case SET_RESERVATION_FORM_STATE_ADULTS:
      return {
        ...state,
        reservationFormState: {
          ...state.reservationFormState,
          people: {
            ...state.reservationFormState.people,
            adults: action.payload,
          },
        },
      };

    case SET_RESERVATION_FORM_STATE_KIDS:
      return {
        ...state,
        reservationFormState: {
          ...state.reservationFormState,
          people: {
            ...state.reservationFormState.people,
            kids: action.payload,
          },
        },
      };

    case SET_RESERVATION_FORM_STATE_FOOD:
      const { Food } = state.reservationFormState.options;

      return {
        ...state,
        reservationFormState: {
          ...state.reservationFormState,
          options: {
            ...state.reservationFormState.options,
            Food: !Food,
          },
        },
      };

    case SET_RESERVATION_FORM_STATE_TRANSFER:
      const { Transfer } = state.reservationFormState.options;
      return {
        ...state,
        reservationFormState: {
          ...state.reservationFormState,
          options: {
            ...state.reservationFormState.options,
            Transfer: !Transfer,
          },
        },
      };

    case SET_RESERVATION_LABELS_STATE_RETURN_DATE:
      return {
        ...state,
        reservationLabelsState: {
          ...state.reservationLabelsState,
          returnDate:
            state.reservationFormState.returnDate ===
            state.allData.ReserveOne?.calendarButton
              ? ""
              : state.reservationFormState.returnDate,
        },
      };

    case SET_RESERVATION_LABELS_STATE_RETURN_TIME:
      return {
        ...state,
        reservationLabelsState: {
          ...state.reservationLabelsState,
          returnTime: state.reservationFormState.returnTime,
        },
      };

    case SET_RESERVATION_LABELS_STATE_ADULTS:
      return {
        ...state,
        reservationLabelsState: {
          ...state.reservationLabelsState,
          people: {
            ...state.reservationLabelsState.people,
            adults: state.reservationFormState.people.adults,
          },
        },
      };

    case SET_RESERVATION_LABELS_STATE_KIDS:
      return {
        ...state,
        reservationLabelsState: {
          ...state.reservationLabelsState,
          people: {
            ...state.reservationLabelsState.people,
            kids: state.reservationFormState.people.kids,
          },
        },
      };

    case SET_RESERVATION_LABELS_STATE_FOOD:
      return {
        ...state,
        reservationLabelsState: {
          ...state.reservationLabelsState,
          options: {
            ...state.reservationLabelsState.options,
            Food: state.reservationFormState.options.Food,
          },
        },
      };

    case SET_RESERVATION_LABELS_STATE_TRANSFER:
      return {
        ...state,
        reservationLabelsState: {
          ...state.reservationLabelsState,
          options: {
            ...state.reservationLabelsState.options,
            Transfer: !state.reservationFormState.options.Transfer,
          },
        },
      };

    default:
      return state;
  }
};
