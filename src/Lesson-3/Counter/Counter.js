import React, {useState} from 'react';
import "./Counter.css"

const Counter = () => {

  let [value, setValue] = useState("")
  let [secondValue, setSecondValue] = useState("");

  let [result, setResult] = useState(0)

  const changeFirstValue = (e) => {
    setValue(e.target.value)
  }
  const changeSecondValue = (e) => {
    setSecondValue(e.target.value)
  }

  const incCurrentValue = () => {
    setResult((+value) + (+secondValue))
    removeCurrentValue()
  }
  const decCurrentValue = () => {
    setResult(value - secondValue)
    removeCurrentValue()
  }
  const multiCurrentValue = () => {
    setResult(value * secondValue)
    removeCurrentValue()
  }
  const divCurrentValue = () => {
    if (secondValue === 0) return
    setResult(value / secondValue)
    removeCurrentValue()
  }

  const removeCurrentValue = () => {
    setValue("")
    setSecondValue("")
  }


  return (
    <div className="calc">
      <div className="calc__inputs">
        <input value={value} type="number" onChange={changeFirstValue} placeholder={0}/>
        <input value={secondValue} type="number" onChange={changeSecondValue} placeholder={0}/>
      </div>
      <div className="calc__btns">
        <button onClick={incCurrentValue}>+</button>
        <button onClick={decCurrentValue}>-</button>
        <button onClick={multiCurrentValue}>*</button>
        <button onClick={divCurrentValue}>/</button>
      </div>
      <p>Result : {result}</p>
    </div>
  );
};

export default Counter;