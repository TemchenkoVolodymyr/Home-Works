import React, {useState} from 'react';
// rsc - создать функцию
// hook позволяет использовать state без написание классов
// Если имя функции начинается с ”use” и она вызывает другие хуки, мы расцениваем это как пользовательский хук.

const LearnHook = () => {
  const [count, setCount] = useState(0)
  // count переменная которая имеет значение записанное в useState, setCount метод с помощю которого можно изменять  count

  const incCount = () => {
    setCount(
      count + 1
    )
  }
  const decCount = () => {
    if (count === 0) {
      return
    }
    setCount(
      count - 1
    )
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={() => incCount()}>inc</button>
      <button onClick={() => decCount()}>dec</button>
    </>
  );
};

export default LearnHook;