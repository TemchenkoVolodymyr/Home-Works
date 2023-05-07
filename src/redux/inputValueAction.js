export const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE"
export const RESET_INPUT_VALUE = "RESET_INPUT_VALUE"

export const DELETE_TASK_LIST = "DELETE_TASK_LIST";

export const changeInputValue = (e) => {
  return {
    type: CHANGE_INPUT_VALUE,
    newValue: e.target.value,
  }
}
export const resetInputValue = () => {
  return {
    type:RESET_INPUT_VALUE,
    newValue : ""
  }
}
