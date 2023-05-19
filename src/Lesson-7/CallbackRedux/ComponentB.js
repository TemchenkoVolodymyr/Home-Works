import React, {useEffect, useState} from 'react';
import {componentAC} from "./componentAC";

const ComponentB = (props) => {


  let [value, setValue] = useState("");

  const onChangeValue = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    props.dispatch(componentAC(value))
  })

  return (
    <div>
      <h1>child</h1>
      <input value={value} onChange={onChangeValue}/>
    </div>
  );
};

export default ComponentB;