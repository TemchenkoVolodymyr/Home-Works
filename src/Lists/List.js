import React from "react";
import {Component} from "react";
import ChangeColor from "./changeColor";

class CreateList extends Component{
  render() {
    return(
      <>
        <ul style={{color:this.props.color}}>
          {this.props.listItem.map(item => <li id={item.id}>{item.item}</li>)}
        </ul>
        <ChangeColor changeColor={() => this.props.changeColor()}/>
      </>
    )
  }
}
export default CreateList;