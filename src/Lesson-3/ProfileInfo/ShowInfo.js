import React, {useEffect, useState} from 'react';
import {usersApi} from "../API/api";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import Loader from "../Loader/Loader";

const ShowInfo = () => {

  let [userInfo, setUserInfo] = useState([]);
  let [pending, setPending] = useState(false)
  let {id} = useParams()

  useEffect(() => {

    setPending(true)
    usersApi.getInfo(id)
      .then(response => {

        setUserInfo(response.data)
        setPending(false)
      })

  }, [id])

  let {username,email,phone,website,name} = userInfo


  if(pending) {
    return <Loader />
  }
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        <li>{username}</li>
        <li>{email}</li>
        <li>{phone}</li>
        <li>{website}</li>
      </ul>
    </div>
  );
};

export default ShowInfo;