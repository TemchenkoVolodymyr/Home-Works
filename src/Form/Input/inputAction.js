
export const CHANGE_INPUT = "CHANGE_INPUT";
export const ADD_JSON_DATA = "ADD_JSON_DATA";
export const CHANGE_INPUT_SECOND = "CHANGE_INPUT_SECOND";
export const CHANGE_INPUT_THIRD="CHANGE_INPUT_THIRD";
export const inputActionCreator = (value) => {
  return {
    type:CHANGE_INPUT,
    newValue:value.target.value,
  }
}
export const inputActionCreatorSecond = (value) => {
  return {
    type:CHANGE_INPUT_SECOND,
    newValue:value.target.value,
  }
}
export const inputActionCreatorThird = (value) => {
  return {
    type:CHANGE_INPUT_THIRD,
    newValue:value.target.value,
  }
}
export const addJsonData = (item) => {
  console.log(item)
  return{
    type:ADD_JSON_DATA,
    itemData:item
  }
}