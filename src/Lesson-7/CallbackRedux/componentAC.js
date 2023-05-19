import {GET_VALUE} from "./reducerComponentA";


export const componentAC = (value) => {
  return{
    type:GET_VALUE,
    newValue:value
  }
}