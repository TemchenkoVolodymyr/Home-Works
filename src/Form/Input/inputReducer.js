import {initialState} from "../../redux/initialState";
import {ADD_JSON_DATA, CHANGE_INPUT, CHANGE_INPUT_SECOND, CHANGE_INPUT_THIRD} from "./inputAction";

export const inputReducer = (input = initialState.elementForForm, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...input,
        valueForInputForm: action.newValue
      }
    case CHANGE_INPUT_SECOND:
      return {
        ...input,
        valueForInputFormSecond: action.newValue
      }
    case CHANGE_INPUT_THIRD:
      return {
        ...input,
        valueForInputFormThird: action.newValue
      }
    case ADD_JSON_DATA:
      return {
        ...input,
        jsonFormData: [...input.jsonFormData, JSON.stringify(action.itemData)],
        valueForInputForm: "",
        valueForInputFormSecond:"",
        valueForInputFormThird:"",
      }
    default:
      return input
  }
}