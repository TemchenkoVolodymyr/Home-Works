import React from 'react';
import "./ShowDifferentString.css"
const ShowDifferentString = (props) => {
  return (
    <>
      <p className="main__string">{props.string}</p>
      </>
  );
};

export default ShowDifferentString;