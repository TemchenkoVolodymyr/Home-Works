import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {useScroll} from "./useScroll";

const ListForHook = () => {

  const [todos, setTodos] = useState([]);



  const [page, setPage] = useState(1)
  const limit = 10
  // эти две переменные page,limit нужны для того что бы указать нашему url адресу количество и страницу
  // это надо для дальнейшей пагинации

  // Устанавливаем ref на родительский элемент div
  const refParent = useRef()
  // Устанавливаем ref на дочерний  элемент div , для того что бы когда страничка при прокрутке доходит до дочернего элемента  то срабатывала функция и добавлялись еще 10 todos
  const refChild = useRef()

    //
  let intersected = useScroll(refParent, refChild, () => fetchTodos(page, limit))


  const fetchTodos = (page, limit) => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
      .then(response => {
        setTodos(prev => [...prev,...response.data])  // берем новый массив prev и разворачиваем в него старый массив prev(todos) и дописываем в него массив который получили от сервера
        setPage(prev => prev +1) // это переменная page которая содержит количество страниц , после каждого запроса увеличиваем на 1 что бы не дублировались листы
      })
  }
  // overflow : "auto " что бы получить ползунок
  return (
    <>
      <h1>PAGINATION</h1>
    <div ref={refParent} style={{overflow:"auto",height:"80vh"}}>
      {todos.map(item => <p key={item.id} style={{border: "2px solid black", padding: 10}}>{item.id}.{item.title}</p>)}
      <div ref={refChild} style={{height: 30, background: "red"}}></div>
    </div>
    </>
  );
};

export default ListForHook;