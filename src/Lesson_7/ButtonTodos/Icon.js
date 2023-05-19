import React from 'react';
import "./Icon.css"

const Icon = (props) => {
  return (
    <>
        <div>
          <img className="icon" src={props.icon} />
        </div>
    </>
  );
};

export default Icon;

