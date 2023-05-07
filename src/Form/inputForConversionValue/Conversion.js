import React, {Component} from 'react';
import {didConverseAC} from "./conversionAC";

class ConvInputFirst extends Component {
  makeSomeWork = (e) => {
    this.props.dispatch(this.props.actionCreator(e))
    this.props.dispatch(didConverseAC(e))
  }
  render() {

    return (
     <>
       <input  value={this.props.value} type="number" placeholder="write some numbers" onChange={(e) => this.makeSomeWork(e)}/>
     </>
    );
  }
}

export default ConvInputFirst;