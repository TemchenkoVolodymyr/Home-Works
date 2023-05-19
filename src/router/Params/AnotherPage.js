import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";

const AnotherPage = () => {
  let [todos, setTodos] = useState([])
  let {id} = useParams() // название переменно(id) должно совпадать с тем названием которые мы указали в to={"/post/:id"}
  // в переменной Posts при отрисовке данных с помощю map нам надо обернуть наши элементы и указать путь to={`/post/${post.id}
  /*
   <Link key={post.id} to={`/post/${post.id}`}>
        <li className="lists">
        {post.id}. {post.title}
        </li>
   </Link>
  */


  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        setTodos(
          response.data
        )
      })
  },[id])
  return (
    <>
      { todos &&(
      <div>
        <h1>{todos.title}</h1>
        <p>{todos.body}</p>
      </div>
      )}
    </>
  );
};
export default AnotherPage;

