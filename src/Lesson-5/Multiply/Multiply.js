import React, {useEffect, useState} from 'react';
import ControlInput from "../ControlForm/ControlInput/ControlInput";
import "./Multiply.css"

const Multiply = () => {

  let [firstValue, setFirstValue] = useState("");
  let [secondValue, setSecondValue] = useState("");
  let [result, setResult] = useState("");
  let [secResult, setSecResult] = useState("")

  const changeFirstValue = (e) => {
    setFirstValue(e.target.value)
  }
  const changeSecondValue = (e) => {
    setSecondValue(e.target.value)
  }

  useEffect(() => {
    setResult(firstValue * 0.5)
    setSecResult(secondValue * 0.005)
  }, [firstValue, secondValue])

  return (
    <div className="multiply-block">
      <div>
        <h3>Multiply 0.5</h3>
        <ControlInput type="number" placeholder="number" value={firstValue} changeInput={changeFirstValue}/>
        <p>{result}</p>
      </div>
      <div>
        <h3>Multiply 0.05</h3>
        <ControlInput type="number" placeholder="number" value={secondValue} changeInput={changeSecondValue}/>
        <p>{secResult}</p>
      </div>
      <div>


      </div>
    </div>
  );
};

export default Multiply;