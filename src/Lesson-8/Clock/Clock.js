import React from 'react';
import Tick from "./Tick";

const Clock = () => {

  const tick = () => (
        <Tick value="asd" date={new Date()}/>

  )
  return (

    <>
      {tick}
    </>
    // <div>
    //   {tick}
    // </div>
  )
};

export default Clock;