import React from 'react';

const Memo = (props) => {
  console.log('Memo component')
  return (
    <div>
     <h1>{props.title}</h1>

    </div>
  );
};

export default React.memo(Memo);