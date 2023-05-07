import React from "react";
import {Component} from "react";

class Dialog extends Component{
  render() {
    console.log(this.props.children)
    return(
      <>
        <div>
          {this.props.children}
        </div>
        <div>
          {this.props.left}
        </div>
        <div>
          {this.props.right}
        </div>
      </>
    )
  }
}
export default Dialog;