import React, {useState} from 'react';
import ControlInput from "./ControlInput/ControlInput";
import "./ControlForm.css"

const ControlForm = () => {

  let [firstInput, setFirstInput] = useState("")
  let [secondInput, setSecondInput] = useState("")
  let [thirdInput, setThirdInput] = useState("")
  let [jsonData,setJsonData] = useState([])


  const changeInputFirst = (e) => {
    setFirstInput(e.target.value)
  }

  const changeInputSecond = (e) => {
    setSecondInput(e.target.value)
  }
  const changeInputThird = (e) => {
    setThirdInput(e.target.value)
  }

  const sendJsonData = (e) => {
    e.preventDefault()

    let json = {
      name:firstInput,
      surname:secondInput,
      password:thirdInput,
    }
    setJsonData([...jsonData,JSON.stringify(json)])
  }
  return (
    <>
      <form>
        <div className="wrapper__inputs">
        <ControlInput value={firstInput} type="text" changeInput={changeInputFirst} placeholder="name"/>
        <ControlInput value={secondInput} type="text" changeInput={changeInputSecond} placeholder="surname"/>
        <ControlInput value={thirdInput} type="password" changeInput={changeInputThird} placeholder="password" />
        </div>
        <button className="submit-btn" onClick={sendJsonData}>submit</button>
        {jsonData.map(json => <p>{json}</p>)}
      </form>
      <div>
        <p></p>
      </div>
    </>
  );
};

export default ControlForm;