import React, {useState} from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import "./ReduxForms.css"


export const FormHomeLesson = (props) => {
  const {handleSubmit} = props

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


const HomeForm = (props) => {
  console.log(props)
  const onSubmit = (formData) => { // в formData попадуют данные с инпутов
  }
  return (
    <>
      <LoginFormRedux onSubmit={onSubmit}/>
    </>

  )
}


export default connect()(HomeForm);