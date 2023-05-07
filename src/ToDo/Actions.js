import {DELETE_TASK_LIST} from "../redux/inputValueAction";


export const CHANGE_VALUE_ACTION = "CHANGE-ACTION-VALUE";
export const ADD_TASK_TO_DO_LIST = "ADD_TASK_TO_LIST";
export const ADD_TASK_TO_LIST = "ADD_TASK_TO_LIST"

export const REMOVE_INPUT_TASK = "REMOVE-INPUT-TASK"

export const changeInputValueToDo = (e) => {
  return {
    type: CHANGE_VALUE_ACTION,
    value:e.target.value,
  }
}

export const addTaskToList = (task) => {
  return{
    type:ADD_TASK_TO_LIST,
    tasks:task,
  }
}
export const deleteTaskList = () => {
  return {
    type:DELETE_TASK_LIST
  }
}

export const addItemToDo = (item) => {
  console.log(item)
  return{
    type:ADD_TASK_TO_DO_LIST,
    items:item,
  }
}
export const removeInputTask = () => {
  return{
    type:REMOVE_INPUT_TASK
  }
}