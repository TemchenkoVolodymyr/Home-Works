import {initialState} from "../redux/initialState";
import {CHANGE_TITLE_ACTION} from "./titleAction";



const TitleReducer = (title = initialState.title,action ) => {

  switch(action.type){
    case CHANGE_TITLE_ACTION :
      return action.newTitle
    default:
      return title
  }
}


export default TitleReducer;