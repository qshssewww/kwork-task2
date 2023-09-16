import {
  GET_MAIN_DATA_REQUEST,
  GET_MAIN_DATA_SUCCESS,
  GET_MAIN_DATA_FAILED,
  SET_MODAL_STATE
} from "../constants/main-data";

export interface ISetModalState {
  readonly type: typeof SET_MODAL_STATE;
}
export interface IGetMainDataActionRequest {
  readonly type: typeof GET_MAIN_DATA_REQUEST;
}

export interface IGetMainDataActionSuccess {
  readonly type: typeof GET_MAIN_DATA_SUCCESS;
  payload: any;
}

export interface IGetMainDataActionFailed {
  readonly type: typeof GET_MAIN_DATA_FAILED;
  payload: any;
}

export type TApiMainDataActions =
  | IGetMainDataActionRequest
  | IGetMainDataActionSuccess
  | IGetMainDataActionFailed
  | ISetModalState 
