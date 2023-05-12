import React from 'react';
import useInput from "./useInput";


const ControlInput = () => {
//                                     input
  const username = useInput("")
  const password = useInput("")
  // <input {...username} type="text" placeholder="surname" /> в инпуте разворачиваем то что мы возвращаем с useInput функции и автоматически оно попадает в нужные места, функция на место функции а value на место value
  // почему надо надо имеено так {...username}, потому что в useInput мы возвращаем обьект
  // и если развернуть это так {...username} каждое поле интуп будет независимое друг от друга
  /////////////////////////////////////


  return (
    <>
      <input {...username} type="text" placeholder="surname" />
      <input {...password} type="text" placeholder="password" />
    </>
  );
};

export default ControlInput;