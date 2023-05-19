import React, {useEffect, useState} from 'react';
import {usersApi} from "../../API/api";
import {useParams} from "react-router";
import Loader from "../../Loader/Loader";
import "./ShowInfo.css"

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
    <div className="user-info">
      <h1>{name}</h1>
      <ul>
        <li><span>Username:</span>{username}</li>
        <li><span>Email:</span>{email}</li>
        <li><span>Phone number: </span>{phone}</li>
        <li><span>website:</span>{website}</li>
      </ul>
    </div>
  );
};

export default ShowInfo;