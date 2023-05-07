import {initialState} from "../redux/initialState";
import {decrementCurrentCounter} from "./counterAction";
export const SET_COUNTER_VALUE = "SET-COUNTER-VALUE";
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const RANDOM_VALUE = "RANDOM_VALUE"

export const RESET_COUNTER = "RESET_COUNTER"

 const counterReducer = (counter = initialState.counter,action) => {
switch (action.type) {
  case SET_COUNTER_VALUE:
    return counter +1

  case DECREMENT_COUNTER:
    return counter -1

  case RANDOM_VALUE :
    return action.randomValue

  case RESET_COUNTER:
    return action.resetValue
  default:return counter
}
}
export default counterReducer