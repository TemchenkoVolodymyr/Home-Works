import React, {useEffect, useState} from 'react';
import {usersApi} from "../../API/api";
import "./ShowNames.css"
import CustomLink from "../../router/Header/CustomLink/CustomLink";

const ShowNames = () => {
  let [names, setNames] = useState([])

  useEffect(() => {
    usersApi.getName()
      .then(response => {
        setNames(response.data)
      })
  }, [])


  let name = names.map(name => <CustomLink to={`name/${name.id}`}><li key={name.id}>{name.name}</li></CustomLink>)

  return (
    <div className="div__container">
      <ul className="list">
        {name}
      </ul>
    </div>
  );
};

export default ShowNames;