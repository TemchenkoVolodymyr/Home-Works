import React, {Component} from 'react';
import {conversionAC, didConverseAC} from "../inputForConversionValue/conversionAC";
import style from "./Input.module.css"

class Input extends Component {


  render() {
    return (
     <>
       <input className={style.input} value={this.props.value} onChange={ (e) => this.props.dispatch(this.props.actionCreator(e)) } placeholder={this.props.placeholder} type="text"/>
     </>
    );
  }
}
export default Input;