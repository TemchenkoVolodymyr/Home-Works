import React, {useEffect, useState} from 'react';
import ShowDream from "./ShowDream";

const Hiding = () => {
  let [isAuth, setIsAuth] = useState(false)

  useEffect(() => {

    if (isAuth)
      console.log('Welcome in my dream')
    if (!isAuth)
      console.log('Bye')

  }, [isAuth])

  const auth = () => {
    setIsAuth(!isAuth)
  }
  return (
    <div>
      <h1>Info about my dream </h1>
      <button onClick={auth}>{isAuth ? "Logout" : "Login"}</button>
      {isAuth ? <ShowDream/> : null}
    </div>
  );
};

export default Hiding;