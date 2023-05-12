import {toDoApi} from "../../API/api";

export const SET_USERS = "SET_USERS"


export const getUsersAC = () => {
  return (dispatch) => {

    toDoApi.getUsers()
      .then(response => {
        dispatch({
          type: SET_USERS,
          users: response.data
        })
      })
  }
}