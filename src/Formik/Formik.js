import React, {Component} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
class MyFormik extends Component {

  validateData = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }
  onSubmitData = (values, {setSubmitting}) => {
    setSubmitting(false);
    console.log(JSON.stringify(values));
    console.log(values.email)
  }

  render() {

    const {inputName, inputEmail, inputPassword} = this.props.dataFormik
    return (
      <>
        <Formik
          initialValues={{email: inputEmail, password: inputPassword, name: inputName}}
          validate={this.validateData}
          onSubmit={this.onSubmitData}

        >
          {({isSubmitting}) => (
            <Form>
              <Field type="email" name="email"/>
              <ErrorMessage name="email" component="div"/>
              <Field type="password" name="password"/>
              <Field type="text" name="name"/>
              <ErrorMessage name="password" component="div"/>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
        {/*<button onClick={() =>  this.props.dispatch(removeInputsAC())}>addt</button>*/}
      </>
    );
  }
}

export default MyFormik;
