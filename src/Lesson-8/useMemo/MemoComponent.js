import React, {useMemo, useState} from 'react';


const sum = ( num) => {

  console.log('If num doesnt change this component will not be rerender')

  return num + num
}
const MemoComponent = () => {
  let [number,setNumber] = useState(2)
  const [isGreen, setIsGreen] = useState(true);


  let result = useMemo(() => sum(number),[number])
  return (
    <div>
      <h1 onClick={() => setIsGreen(!isGreen)}
          style={{ color: isGreen ? "green" : "red" }}
      >
        Example
      </h1>
      <h2>
        Sum {result}
      </h2>
      <button onClick={() => setNumber(number + 1)}>➕</button>
    </div>
  );
};

export default MemoComponent;
