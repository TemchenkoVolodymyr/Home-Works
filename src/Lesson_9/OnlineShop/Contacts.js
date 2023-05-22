import React, {useState} from 'react';
import Button from "@mui/material/Button";

const Contacts = () => {

  let [issue,setIssue] = useState("")

  const onChange = (e) => {
    setIssue(e.target.value)
  }

  const sendIssue = () => {
    alert(`We get your issue, please wait. Your issue is ${issue}`)
    setIssue("")
  }
  return (
    <div>
      <h1>How can we help you?</h1>
      <input value={issue} placeholder="write your issue" onChange={onChange}/>
      <div>
        <Button onClick={sendIssue} variant="contained">send issue</Button>
      </div>

    </div>
  );
};

export default Contacts;