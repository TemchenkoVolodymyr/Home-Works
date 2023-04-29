import React from "react";
import {Component} from "react";

class ChangeColor extends Component{
  render() {
    return(
      <>
       <button onClick={() => this.props.changeColor()}>change color</button>
        <button>reverse  colors form array</button>
      </>
    )
  }
}
export default ChangeColor;