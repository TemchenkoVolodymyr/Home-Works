import {initialState} from "../../redux/initialState";

export const GET_VALUE = "GET_VALUE"

export const reducerComponentA = (value = initialState.valueComponentA,action) => {
  console.log(value)
  switch (action.type) {
    case GET_VALUE:
      return value = action.newValue

    default:return value
  }
}