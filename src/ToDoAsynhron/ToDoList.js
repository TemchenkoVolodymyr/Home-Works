import React, {Component} from 'react';
import {loadingListAction} from "./actionAsynhron";
import {connect} from "react-redux";
import "./toDoItems.css";
import {addItemToDo, changeInputValueToDo, removeInputTask} from "../ToDo/Actions";

class ToDoList extends Component {

  componentDidMount() {
    this.props.dispatch(loadingListAction())
  }

  addItemToToDoList = () => {
    this.props.dispatch(addItemToDo(this.props.fromToDoInputValue))
    this.props.dispatch(removeInputTask())
  }
  render() {
    return (
      <>
        <ul>
          {this.props.items.map(item => <li className="toDoItems">{item.title ? item.title : item}</li>)}
        </ul>
        <input type="text" value={this.props.fromToDoInputValue}
               onChange={(e) => this.props.dispatch(changeInputValueToDo(e))}/>
        <button onClick={() => this.addItemToToDoList()}>add ToDo</button>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    items: store.toDoItems.items,
    loading: store.toDoItems.loading,
    fromToDoInputValue: store.toDoItems.fromToDoInputValue,
  }

}
export default connect(mapStateToProps,)(ToDoList);