import React, {Component} from 'react';
import {connect} from "react-redux";
import {getDoListItemAC} from "./ToDoListAction";
import {compose} from "redux";

class ToDoListAsynchron extends Component {

  componentDidMount() {
    this.props.dispatch(getDoListItemAC())
  }


  render() {
    const itemsMap = this.props.toDo.toDo.map(item => <p>{item.title}</p>)

    return (
      <div>
        {itemsMap}
      </div>
    );
  }
}
let mapStateToProps = (store) => {
  return {
    toDo:store.toDo
  }
}
export default compose(
  connect(mapStateToProps),
)(ToDoListAsynchron);