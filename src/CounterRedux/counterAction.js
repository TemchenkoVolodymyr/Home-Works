import {DECREMENT_COUNTER, RANDOM_VALUE, RESET_COUNTER, SET_COUNTER_VALUE} from "./counterReducer";
import {createRandomValue} from "./Counter";


export const addCurrentCounter = () => {
  return {
    type:SET_COUNTER_VALUE,
  }
}
export const decrementCurrentCounter = () => {
  return {
    type:DECREMENT_COUNTER,
  }
}
export const  randomCounterValue = () => {
  return{
    type:RANDOM_VALUE,
    randomValue:createRandomValue()
  }
}

export const resetCounter = () => {
  return {
    type:RESET_COUNTER,
    resetValue:0
  }
}