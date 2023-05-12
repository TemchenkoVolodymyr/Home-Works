import React, {Component} from "react";
import './App.css';
import {connect} from "react-redux";
import {
  RouterProvider,
} from "react-router-dom";
import {router} from "./router/router";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>

  );
};

let mapStateToProps = (store) => {
  return {
    formikData: store.formikData
  }
}
export default connect(mapStateToProps)(App);

