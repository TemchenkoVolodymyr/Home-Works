import React from 'react';
import Icon from "./Icon";
import "./Button.css"

const Button = (props) => {
  return (
    <>
      <div className="button__wrapper">
        <Icon icon={props.icon}/>
        <button>{props.nameBtn}</button>
      </div>
    </>
  );
};

export default Button;