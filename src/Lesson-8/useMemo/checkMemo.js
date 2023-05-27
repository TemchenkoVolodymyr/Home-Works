import React, {useMemo, useState} from 'react';


const sum = (num) => {
  let x = "";
  console.log('If num doesnt change this component will not be rerender')
  for (let i = 0; i < 999999; i++) {
    x = num * i
  }
  return x
}
const MemoComponent = () => {
  let [number, setNumber] = useState(2)


  // let result = useMemo(() => sum(number),[number])
  return (
    <>
      <button>first num</button>
      <button>second num</button>
    </>
  )
};

export default MemoComponent;
