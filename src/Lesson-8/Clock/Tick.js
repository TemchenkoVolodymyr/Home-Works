import React, {useEffect, useState} from 'react';
import "./Tick.css"

const Tick = (props) => {

  let [date, setDate] = useState(props.date)

  useEffect(() => {
    setDate(props.date)

  },[props.date])


  return (
    <div className="bookacket">

      <div className="uncomenkad">
        <div className="vemekunys">{date.toLocaleTimeString()}</div>
      </div>
      <span></span>
    </div>
  );
};

export default Tick;