import React, {useEffect, useState} from 'react';

const Tick = (props) => {


  let [time,setTime] = useState("")

  useEffect(() => {
   setTime( props.date.toLocaleString())
  },[props.date])
console.log(props)
  return (
    <div>
      <p>Сейчас {time}</p>
    </div>
  );
};

export default Tick;