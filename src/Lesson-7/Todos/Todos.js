import React, {useState} from 'react';
import Delete from "../assets/delete.png"
import Done from "../assets/done.png"
import IsntDone from "../assets/isntDone.png"
import "./Todos.css"


const Todos = () => {
  let [todos, setTodos] = useState([
      {
        text: "some text",
        id: 0,
        isDone:false,
      },
      {
        text: "Great pleasure",
        id:1,
        isDone:false,
      },
      {
        text: "Keep your mind",
        id: 2,
        isDone:false,
      }

    ]
  )
  let [value, setValue] = useState("")
  let [status, setStatus] = useState(true)

  const addTodo = () => {
    let todo = {text:value,id: todos.length,isDone:false}
    setTodos([...todos, todo])
    setValue("")
  }

  const changeValue = (e) => {
    setValue(e.target.value)
  }
  const isDoneStatus = () => {
    setStatus(!status)
  }

  const onDelete = (id) => {
    let deleteTodo = todos.filter(todo => todo.id !== id)
    setTodos(deleteTodo)
  }

  const isDone = (id) => {

    setTodos(todos.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          isDone:!todo.isDone
        }
      }
      return  todo
    }))
  }
console.log(todos.isDone)
  // const done =  todos.isDone ? <img onClick={() => isDone(todo.id)} src={Done} className="icon-item" alt="done image"/> : <img onClick={() => isDone(todo.id)} src={Delete} className="icon-item" alt="done image"/>
console.log(todos)
  return (
    <>
      <div>
        <input value={value} onChange={changeValue}/>
      </div>
      <button onClick={addTodo}>add task</button>
      <div>
        {todos ? todos.map(todo => <div className="todo-items">
          {/*<img onClick={() => isDone(todo.id)} src={Done} className="icon-item" alt="done image"/>*/}
          {todo.isDone ? <img onClick={() => isDone(todo.id)} src={Done} className="icon-item" alt="done image"/> : <img onClick={() => isDone(todo.id)} src={IsntDone} className="icon-item" alt="done image"/>}
          {/*{done}*/}
          <p>{todo.text}</p>
          <img onClick={() => onDelete(todo.id)} src={Delete} className="icon-item" alt="delete image"/>
        </div>) : null}
      </div>
    </>
  );
};

export default Todos;