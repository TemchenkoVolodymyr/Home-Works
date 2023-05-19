import React from 'react';
import "./ControlInput.css"

const ControlInput = (props) => {
  return (
      <input value={props.value} onChange={props.changeInput} type={props.type} placeholder={props.placeholder}/>
  );
};

export default ControlInput;