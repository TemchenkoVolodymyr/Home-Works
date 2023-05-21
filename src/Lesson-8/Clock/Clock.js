import React, {useEffect, useState} from 'react';
import Tick from "./Tick";

const Clock = () => {

  let [time,setTime] = useState(new Date())

  useEffect(() => {
    let timeId = setInterval(() => {
      setTime(new Date());
    })

    return () =>{
      clearInterval(timeId)
    }
  })
  return (
    <>
      <Tick date={time}/>
    </>
  )
};

export default Clock;