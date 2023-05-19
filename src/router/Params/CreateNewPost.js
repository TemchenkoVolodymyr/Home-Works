import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {newPostAC} from "../../Posts/actionPost";
import {useNavigate} from "react-router";
import {replace} from "formik";

const CreateNewPost = (props) => {

  let [newPost, setNewValue] = useState("");


  const changeValue = (e) => {
    setNewValue(e.target.value)
  }
  const addNewPost = () => {
    props.dispatch(newPostAC(newPost))
  }

// useNavigate это хук который дает возможность двигатся по истории наших ходов(вперед,назад)
  // если в функцию goBack передать navigate(1) то мы перейдем вперед, если -1 то назад
  let navigate = useNavigate()
  const goBack = () => (navigate(-1))

  return (
    <>
      <h1>Create New Post</h1>
      <div>
        <input type="text" value={newPost} onChange={changeValue}/>
        <button onClick={addNewPost}>add post</button>
      </div>
      <button onClick={goBack}>go back</button>

    </>
  );
};

const mapStateToProps = (store) => {
  return {
    post: store.posts.post
  }
}
export default connect(mapStateToProps)(CreateNewPost);