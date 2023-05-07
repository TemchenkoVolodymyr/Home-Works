import {CONVERSE_VALUE, DID_CONVERSE_VALUE} from "./conversionReducer";

export const conversionAC = (value) => {

  return{
    type:CONVERSE_VALUE,
    conValue:value.target.value
  }
}

export const didConverseAC = (e) => {
  return{
    type:DID_CONVERSE_VALUE,
    value:e.target.value
  }
}