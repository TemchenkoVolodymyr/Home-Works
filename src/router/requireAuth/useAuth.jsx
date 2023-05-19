import {useContext} from "react";
import {AuthContext} from "./Authorization";


export  const  useAuth = () => {
  return useContext(AuthContext)
}