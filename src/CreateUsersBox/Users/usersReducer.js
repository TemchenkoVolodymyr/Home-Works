import {initialState} from "../../redux/initialState";
import {SET_USERS} from "./UsersAction";


export const usersReducer = (users = initialState.usersData,action) => {
  switch (action.type) {
    case SET_USERS :
      return {
        ...users,
        users: action.users
      }
    default:return users
  }

}