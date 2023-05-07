import {initialState} from "../redux/initialState";
import {LOADING_DATA_END, LOADING_DATA_START, LOADING_ERROR} from "./actionAsynhron";
import {ADD_TASK_TO_DO_LIST, ADD_TASK_TO_LIST, CHANGE_VALUE_ACTION, REMOVE_INPUT_TASK} from "../ToDo/Actions";



export const toDoReducers = (toDoItems = initialState.toDoItems, action) => {
  switch (action.type) {
    case LOADING_DATA_START :
      return {
        ...toDoItems,
        loading: true,
      }
    case LOADING_DATA_END:
      return {
        ...toDoItems,
        items: action.lists,
        loading: false,
      }
    case LOADING_ERROR :
      return {
        ...toDoItems,
        loading: false,
        error: action.error
      }
    case CHANGE_VALUE_ACTION :
      return {
        ...toDoItems,
        fromToDoInputValue: action.value
      }
    case ADD_TASK_TO_DO_LIST:
      return {
        ...toDoItems,
        items: [...toDoItems.items,action.items]
      }
    case REMOVE_INPUT_TASK:
      return {
        ...toDoItems,
        fromToDoInputValue:"",
      }

    default:
      return toDoItems
  }
}
