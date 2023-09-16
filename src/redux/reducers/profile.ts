import { TProfileAuth, SET_USER, USER_LOGIN, USER_LOGOUT} from "../actions/profile";
  
  type TMainDataState = {
    userData: any,
    isAuth: boolean
  };
  
  export interface ISetMainData {
    readonly type: any;
    payload: any;
  }

  const initialState = {
    isAuth: false,
    userData: null,
  };

export const profile = (
    state = initialState,
    action: TProfileAuth
  ): TMainDataState => {
    switch (action.type) {
        case SET_USER:
          return {
            ...state,
            userData: action.payload,
          };
        case USER_LOGIN:
          return {
            ...state,
            isAuth: true,
          };
        case USER_LOGOUT:
          return {
            ...state,
            userData: null, 
          };
        default:
          return state;
      }
  };
  