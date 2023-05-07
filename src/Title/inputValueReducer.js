import {initialState} from "../redux/initialState";
import {CHANGE_INPUT_VALUE} from "../redux/inputValueAction";


const TitleReducer = (inputValue = initialState.inputValue,action ) => {
  switch(action.type){
    case CHANGE_INPUT_VALUE :
      return action.newValue
    default:
      return inputValue
  }
}
export default TitleReducer;