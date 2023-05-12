import {initialState} from "../redux/initialState";
import {TODO_LOADING_END, TODO_LOADING_START} from "./ToDoListAction";


export const toDoListReducer = (toDo = initialState.toDo,action) => {
switch (action.type) {
  case TODO_LOADING_START:
    return {
      ...toDo,
      loading:true
    }
  case TODO_LOADING_END :
    return  {
      ...toDo,
      loading: false,
      toDo:action.payload,
    }
  default:return toDo
}
}