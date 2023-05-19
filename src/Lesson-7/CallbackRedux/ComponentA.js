import React from 'react';
import ComponentB from "./ComponentB";
import {connect} from "react-redux";

const ComponentA = (props) => {

  let {value} = props

  let text = value ? <p>{value}</p> : null
  return (
    <>
      <ComponentB dispatch={props.dispatch}/>
      <div>
        <h1>parent</h1>
        {text}
      </div>
    </>
  );
};


let mapStateToProps = (state) => {
  return {
    value: state.componentValue
  }
}
export default connect(mapStateToProps)(ComponentA);