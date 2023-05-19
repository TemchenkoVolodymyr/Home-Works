import React, {Component} from 'react';
import {connect} from "react-redux";
import {addCurrentCounter, decrementCurrentCounter, randomCounterValue, resetCounter} from "./counterAction";
import {Link} from "react-router-dom";
import CustomLink from "../router/Header/CustomLink/CustomLink";


export const createRandomValue = () => {
  return Math.floor(Math.random() * 100)
}
class Counter extends Component {
  render() {
    return (
     <>
<h1>COUNTER</h1>
       <p>{this.props.count}</p>
       <button onClick={() => this.props.dispatch(addCurrentCounter())}>add</button>
       <button onClick={() => this.props.dispatch(decrementCurrentCounter())}>decrement</button>
       <button onClick={() => this.props.dispatch(randomCounterValue())}>random</button>
       <button onClick={() => this.props.dispatch(resetCounter())}>reset</button>
       <div>
         <h1>SECOND COUNTER</h1>
       </div>
       <CustomLink className="link" to='/loader'>Loader</CustomLink>
     </>
    );
  }
}

let mapStateToProps = (store) => {
  return {
    count: store.currentCount
  }
}
export default connect(mapStateToProps)(Counter);

// Добавить декремент и рандомное увеличение на каунтере
// ( так же можно дописать reset)
