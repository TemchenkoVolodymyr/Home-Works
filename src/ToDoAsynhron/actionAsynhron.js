
import {toDoApi} from "../API/api";
export const LOADING_DATA_START = "LOADING-DATA_START";
export const LOADING_DATA_END = "LOADING-DATA-END";
export const LOADING_ERROR = "LOADING-ERROR"


export const loadingListAction = () =>{
  return (dispatch) => {
    dispatch({
      type:LOADING_DATA_START
    })
    toDoApi.getToDoItems()
      .then(response => {
        dispatch({
          type:LOADING_DATA_END,
          lists:response.data
        })
      })
      .catch(error => {
        dispatch({
          type:LOADING_ERROR,error
        })
      })

  }
}
