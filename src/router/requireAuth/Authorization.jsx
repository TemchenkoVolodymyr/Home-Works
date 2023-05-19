import React, {createContext, useReducer, useState} from 'react';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

  const [isAuth,setIsAuth] = useState(false)


  const login = (callback) => {
   setIsAuth(true)
    callback()

  }
  const logout = (callback) => {
    setIsAuth(false)
    if(callback) {
      callback()
    }

  }

  let value = {isAuth,login,logout}
  return (
    <>
    <AuthContext.Provider value={value} >
  {children}
</AuthContext.Provider>
    </>
  );
};
export default AuthProvider;