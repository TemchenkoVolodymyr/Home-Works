/*
1. Создать простое приложение ToDo, которое использует Redux для управления состоянием. Приложение должно позволять пользователю добавлять задания,
                                удалять задания и отмечать задания как выполненные.
*/
import React, {Component} from 'react';
import {connect} from "react-redux";
import Input from "./Input";
import Lists from "./Lists";
import {resetInputValue} from "../redux/inputValueAction";
import {deleteTaskList} from "./Actions";


class ToDo extends Component {
  addToTaskList = (e) => {
    e.preventDefault()
    let currentInputValue = this.props.input
    this.props.dispatch(resetInputValue())
    return currentInputValue
  }
deleteTaskLists = (e) => {
    e.preventDefault()
  this.props.dispatch(deleteTaskList())
}
  render() {
    return (
      <>
        <Input value={this.props.input} dispatch={this.props.dispatch} addToTaskList={(e) => this.addToTaskList(e)} deleteTaskLists={(e) => this.deleteTaskLists(e)}/>
        <Lists lists={this.props.lists}/>
      </>
    );
  }
}

let mapStateToProps = (store) => {
  return {
    input: store.toDoInputValue,     //toDoInputValue ,переменная с файла rootReducers
    lists: store.toDoListItems,
  }
}
export default connect(mapStateToProps)(ToDo);