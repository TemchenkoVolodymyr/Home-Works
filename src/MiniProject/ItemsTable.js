import React from "react";
import {Component} from "react";
import ProductCategoryRow from "./ProductCategoryRow";

class ItemsTable extends Component{
  render() {
    console.log(this.props.items)
    return(
      <>
        {this.props.items.map(item => <div>{item.title}</div>)}
      </>
    )
  }
}
export default ItemsTable