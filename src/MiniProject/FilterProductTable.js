import React from "react";
import {Component} from "react";
import SearchBar from "./SearchBar";
import ProductCategoryRow from "./ProductCategoryRow";
import axios from "axios";
import ProductRow from "./ProductRow";

class FilterProductTable extends Component {
  state={
    values : [],
  }
  componentDidMount() {
   axios.get("https://jsonplaceholder.typicode.com/posts")
     .then(response  => {
       this.setState(() => ({
         values:[...response.data]
       }))
     } )
  }
  render() {

    return (
      <>
        <ProductRow items={this.state.values}/>
        {/*{this.state.values.map(item => <div>{item.title}</div>)}*/}
        <SearchBar/>


      </>
    )
  }
}

export default FilterProductTable;