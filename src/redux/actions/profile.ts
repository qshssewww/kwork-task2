export const SET_USER = "SET_USER";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

export interface ISetUser {
    payload: any;
    readonly type: typeof SET_USER;
  }
  export interface ILoginUser {
    readonly type: typeof USER_LOGIN;
  }
  
  export interface ILogoutUser{
    readonly type: typeof USER_LOGOUT;
    payload: any;
  }
  

  
  export type TProfileAuth = | ISetUser  | ILoginUser  | ILogoutUser 