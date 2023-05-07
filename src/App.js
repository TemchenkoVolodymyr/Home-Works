import React, {Component} from "react";
import './App.css';
import SearchBar from "./MiniProject/SearchBar";
import Counter from "./CounterRedux/Counter";
import ToDo from "./ToDo/ToDo";
import Posts from "./Posts/Posts";
import ToDoList from "./ToDoAsynhron/ToDoList";
import Form from "./Form/Form";
import Conversion from "./Lessons_5/Task_2/Conversion";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />         {/*ДОМАШНЯЯ РАБОТА № 5. ФОРМЫ*/}
        {/*<Conversion />*/}
        {/*<SearchBar/>*/}
        {/*<Counter />*/}
        {/*<br />*/}
        {/*<ToDo />*/}
        {/*<Posts />*/}
        {/*<ToDoList />*/}
      </div>
    )
  }
}

export default App;
