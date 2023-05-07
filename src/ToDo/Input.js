import React, {Component} from 'react';
import {addTaskToList, changeInputValueToDo, deleteTaskList,} from "./Actions";

class Input extends Component {

  render() {
    return (
      <form>
      <input type="text" value={this.props.value} onChange={(e) => this.props.dispatch(changeInputValueToDo(e))}/>
        <input type="submit" value="add" onClick={(e) => this.props.dispatch(addTaskToList(this.props.addToTaskList(e)))}/>
        <input type="submit" value="delete" onClick={(e) => this.props.deleteTaskLists(e)}/>
      </form>
    );
  }
}

export default Input;