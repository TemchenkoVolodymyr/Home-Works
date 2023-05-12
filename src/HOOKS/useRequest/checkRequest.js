import React, {useState} from 'react';
import axios from "axios";
import {useRequest} from "./useRequest";
import Loader from "../../Loader/Loader";

const CheckRequest = () => {

  const [todos, loading, error] = useRequest(request)

  function request() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
  }

if(loading) {
  return <Loader />
}
if(error) {
  return <h1>"SOME ERROR"</h1>
}

  return (
    <div>
      {todos ? todos.map(todo => <p>{todo.title}</p>) : null}
    </div>
  );
};

export default CheckRequest;