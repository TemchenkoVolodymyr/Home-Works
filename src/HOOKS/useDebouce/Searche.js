import React, {useState} from 'react';
import axios from "axios";
import {useDebounce} from "./useDebounce";

const Search = () => {
  const [value, setValue] = useState("")

  const searchTodo = (query) => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?querr=${query}`)
      .then(response => {
        console.log(query)
      })
  }
  const debouncedSearch = useDebounce(searchTodo, 500);
  const onChange = (e) => {
    setValue(e.target.value)
    debouncedSearch(e.target.value)
  }
  return (
    <div>
      <input type="text" value={value} onChange={onChange}/>
    </div>
  );
};

export default Search;