import React, {useState} from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import "./ReduxForms.css"
import {useNavigate} from "react-router";
import {useLocation} from "react-router-dom";
import {useAuth} from "../router/requireAuth/useAuth";


export const FormHomeLesson = (props) => {

console.log(useLocation())


  let {handleSubmit} = props

  return (
    <>

      <form onSubmit={handleSubmit} className="formMain">
        <div className="formMain__header">
          <h1 className="header">Login</h1>
        </div>

        <div className={"formMain__input"}>
          <Field className="input" name="email" component="input" type="text" placeholder="username"/>
          <Field className="input" name="password" component="input" type="password" placeholder={"password"}/>
        </div>
        <div className="formMain__btnWrapper">
          <div>
            <Field name="rememberMe" component="input" type={"checkbox"}/> remember me
          </div>
          <button className="button">Send</button>
        </div>
        <div>

        </div>
      </form>
    </>
  )
}

const LoginFormRedux = reduxForm({
  form: 'homeForm'
})(FormHomeLesson)


const HomeForm = () => {
  const location = useLocation()
  const fromPage = location.state.from.pathname || "/"
  const navigate = useNavigate()

  const {login} = useAuth()


  const onSubmit = (formData) => { // в formData попадуют данные с инпутов
    login(() => navigate(fromPage,{replace:true}))
  }
  return (
    <>
      <LoginFormRedux onSubmit={onSubmit}/>
    </>

  )
}


export default HomeForm;