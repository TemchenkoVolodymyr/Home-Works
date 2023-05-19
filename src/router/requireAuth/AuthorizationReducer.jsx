import {initialState} from "../../redux/initialState";
export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"

export const authorizationReducer = (isAuth = initialState.isAuth,action) => {
  switch (action.type) {
    case LOG_IN:
      return isAuth = true
    case LOG_OUT:
      return isAuth = false

    default:return isAuth
  }

}