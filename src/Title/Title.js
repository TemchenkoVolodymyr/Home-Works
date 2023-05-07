import React, {Component} from 'react';
import {connect} from "react-redux";
import {changeTitleAction} from "./titleAction";
import {changeInputValue} from "../redux/inputValueAction";

class Title extends Component {
  render() {
    return (
     <>
       <h3>{this.props.titleFromStore}</h3>
       <input value={this.props.inputValue} onChange={(e) => {this.props.dispatch(changeInputValue(e))}}/>
       <button onClick={()=>{this.props.dispatch(changeTitleAction(this.props.inputValue))}}>changeTitle</button>
     </>
    );
  }
}

let mapStateToProps = (store) => {
return {
  titleFromStore:store.title,
  inputValue:store.inputValue,
}
}
export default  connect(mapStateToProps)(Title);