import React from "react";
import {Component} from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ItemsTable from "./ItemsTable";

class ProductRow extends Component {
  render() {

    return (
      <>
        <ProductCategoryRow items={this.props.items}/>
        <ItemsTable items={this.props.items}/>
      </>
    )
  }
}

export default ProductRow