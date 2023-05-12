import {CHANGE_INPUT, CHANGE_INPUT_EMAIL, CHANGE_INPUT_PASSWORD, REMOVE_INPUTS} from "./FormikReducer";

export const formikAction = (event) => {
  return{
    type:CHANGE_INPUT,
    newValue:event.target.value
  }
}

export const changeEmailAC = (event) => {
  return{
    type: CHANGE_INPUT_EMAIL,
    newValue:event.target.value
  }
}
export const changePasswordAC = (event) => {
  return{
    type: CHANGE_INPUT_PASSWORD,
    newValue:event.target.value
  }
}
export const removeInputsAC = () => {
  return {
    type:REMOVE_INPUTS,
  }
}