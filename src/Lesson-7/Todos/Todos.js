import React, {useState} from 'react';
import Delete from "../../assets/delete.png"
import Done from "../../assets/done.png"
import IsntDone from "../../assets/isntDone.png"
import "./Todos.css"

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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


  return (
    <>
      <div>
      </div>
          <Button variant="contained" onClick={handleOpen}>Write a  Task</Button>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <input value={value} onChange={changeValue}/>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Button variant="contained" onClick={addTodo}>Add Task</Button>
            </Typography>
          </Box>
        </Modal>
      </div>
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