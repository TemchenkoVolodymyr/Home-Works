import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {connect} from "react-redux";
import {useAuth} from "./useAuth";

const RequireAuth = ({children}) => {
  console.log(useAuth)
  let location = useLocation()
  console.log(location)

  let {isAuth} = useAuth()



   if(!isAuth) {
     return <Navigate to={"/login"} state={{from: location}}></Navigate>
   }else{
     return children
   }
};

export default RequireAuth;

