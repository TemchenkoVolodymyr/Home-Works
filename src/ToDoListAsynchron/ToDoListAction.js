
import {toDoApi} from "../API/api";


export const TODO_LOADING_START = "TODO_LOADING_START";

export const TODO_LOADING_END = "TODO_LOADING_END"




export const getDoListItemAC = () => {
  return (dispatch) => {
   dispatch({
     type:TODO_LOADING_START
   })
    toDoApi.getToDoItems()
      .then(response => {
        dispatch({type:TODO_LOADING_END,payload:response.data})
      })
  }
}



