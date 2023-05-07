import React, {Component} from 'react';
import {conversionAC, didConverseAC} from "../inputForConversionValue/conversionAC";

class Input extends Component {


  render() {
    return (
     <>
       <input value={this.props.value} onChange={ (e) => this.props.dispatch(this.props.actionCreator(e)) } type="text"/>
     </>
    );
  }
}
export default Input;