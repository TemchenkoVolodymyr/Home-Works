import {initialState} from "../../redux/initialState";

export const CONVERSE_VALUE = "CONVERSE_VALUE"
export const DID_CONVERSE_VALUE = "DID_CONVERSE_VALUE";
export const conversionReducer = (inputValue = initialState.conversion, action) => {

  let conversedFirst = action.value * 0.05
  let resultFirstConversed = conversedFirst.toFixed(2)

  let converseSecond = action.value * 0.5
  let resultSecondConversed = converseSecond.toFixed(2)
  switch (action.type) {
    case CONVERSE_VALUE :
      return {
        ...inputValue,
        conversionInputValue: action.conValue
      }
    case DID_CONVERSE_VALUE:
      return {
        ...inputValue,
        didConverseValue: `converse 0.05 = ${resultFirstConversed} AND converse 0.5 = ${resultSecondConversed}`
      }
    default:
      return inputValue
  }

}