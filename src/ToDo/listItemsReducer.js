import {initialState} from "../redux/initialState";
import {ADD_TASK_TO_LIST} from "./Actions";
import {DELETE_TASK_LIST} from "../redux/inputValueAction";

export const listItemsReducer = (items=initialState.taskLists,action) =>{

switch (action.type){
  case ADD_TASK_TO_LIST:
    return [...items,action.tasks]

  case DELETE_TASK_LIST:
    return items.filter((item) => !item)
  default:return items
}
}