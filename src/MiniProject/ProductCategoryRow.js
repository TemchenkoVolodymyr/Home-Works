import React from "react";
import {Component} from "react";

class ProductCategoryRow extends Component{
  render() {
    return(
      <>
        {this.props.items.map(item => <div style={{color:"red"}}>{item.body}</div>)}
      </>
    )
  }
}
export default ProductCategoryRow