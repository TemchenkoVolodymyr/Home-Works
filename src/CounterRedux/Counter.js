import React, {Component} from 'react';
import {connect} from "react-redux";
import {addCurrentCounter, decrementCurrentCounter, randomCounterValue, resetCounter} from "./counterAction";


export const createRandomValue = () => {
  return Math.floor(Math.random() * 100)
}
class Counter extends Component {
  render() {
    return (
     <>

       <p>{this.props.count}</p>
       <button onClick={() => this.props.dispatch(addCurrentCounter())}>add</button>
       <button onClick={() => this.props.dispatch(decrementCurrentCounter())}>decrement</button>
       <button onClick={() => this.props.dispatch(randomCounterValue())}>random</button>
       <button onClick={() => this.props.dispatch(resetCounter())}>reset</button>
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
