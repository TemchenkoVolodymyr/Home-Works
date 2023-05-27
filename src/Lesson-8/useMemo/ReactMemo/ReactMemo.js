import React, {useState} from 'react';
import {connect} from "react-redux";
import Memo from "./Memo";

const ReactMemo = () => {
  let [title, setTitle] = useState("You will be rerender only when changes date");

  let [sum,setSum] = useState(2)


  const changeTitle = () => {
    setTitle("I changed you")
  }
  return (
    <div>
      <Memo title={title} />
      <button onClick={changeTitle}>change title</button>
      <p>{sum}</p>
      <button onClick={() => setSum(sum + 1)}>change num</button>
    </div>
  );
};


export default ReactMemo;