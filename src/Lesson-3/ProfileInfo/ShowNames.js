import React, {useEffect, useState} from 'react';
import {usersApi} from "../API/api";
import "./ShowListOfNames.css"
import {Link} from "react-router-dom";

const ShowNames = () => {
  let [names, setNames] = useState([])

  useEffect(() => {
    usersApi.getName()
      .then(response => {
        setNames(response.data)
      })
  }, [])


  let name = names.map(name => <Link to={`name/${name.id}`}><li key={name.id}>{name.name}</li></Link>)

  return (
    <div className="div__container">
      <ul className="list">
        {name}
      </ul>
    </div>
  );
};

export default ShowNames;