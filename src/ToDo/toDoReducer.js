import {initialState} from "../redux/initialState";
import { CHANGE_VALUE_ACTION} from "./Actions";
import {RESET_INPUT_VALUE} from "../redux/inputValueAction";



export const toDoReducer = (value= initialState.inputToList,action) =>{
  switch (action.type) {

    case CHANGE_VALUE_ACTION:
      return action.value

    case RESET_INPUT_VALUE :
      return action.newValue
    default: return value
  }

}
