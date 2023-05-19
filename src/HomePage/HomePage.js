import React from 'react';
import {useAuth} from "../router/requireAuth/useAuth";
import {useNavigate} from "react-router";
import {useLocation} from "react-router-dom";

const HomePage = () => {

  let {isAuth,logout} = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const fromPage = location.pathname
  return (
    <div>
      <h1>Home PAGE</h1>
      <div>
        {isAuth && <button onClick={() => logout(undefined)}>Logout</button>}
      </div>
    </div>
  );
};

export default HomePage;

// const onSubmit = (formData) => { // в formData попадуют данные с инпутов
//   login(() => navigate(fromPage,{replace:true}))
// }