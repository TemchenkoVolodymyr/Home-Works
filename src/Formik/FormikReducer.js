import {initialState} from "../redux/initialState";

export const CHANGE_INPUT = "CHANGE_INPUT";
export const CHANGE_INPUT_EMAIL = "CHANGE_INPUT_EMAIL";
export const CHANGE_INPUT_PASSWORD = "CHANGE_INPUT_PASSWORD";

export const REMOVE_INPUTS = "REMOVE_INPUTS"
export const formikReducer = (formData = initialState.dataForm, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...formData,
        inputName: action.newValue
      }
    case CHANGE_INPUT_EMAIL:
      return {
        ...formData,
        inputEmail: action.newValue
      }
    case CHANGE_INPUT_PASSWORD:
      return {
        ...formData,
        inputPassword: action.newValue
      }
    case REMOVE_INPUTS:
      return {
        ...formData,
        inputPassword: "",
        inputEmail: "",
        inputName: "",
      }
    default:
      return formData
  }
}