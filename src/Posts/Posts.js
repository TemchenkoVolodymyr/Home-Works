import React, {Component, useEffect, useReducer} from 'react';
import {connect, useDispatch} from "react-redux";
import {loadPostAction} from "./ActionAsynhron";
import Loader from "../Loader/Loader";
import "./Posts.css"
import {Link, useLocation} from "react-router-dom";
import CustomLink from "../router/Header/CustomLink/CustomLink";
import {postsReducer} from "./postsReducer";
import {initialState} from "../redux/initialState";

const Posts = (props) => {
console.log(useLocation())
  useEffect(() => {
    props.dispatch(loadPostAction())
  },[])
  return (
    <>
      <h1>POSTS</h1>
      <CustomLink to={"/post/new"}>Create New Post</CustomLink>
      {props.loading ? <Loader/> : null}
      <ul>
        {props.post.map(post => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <li className="lists">{post.id}. {post.title}</li>
          </Link>
        ))}
      </ul>
    </>
  )
}
const mapStateToProps = (store) => {
  return {
    post: store.posts.post,
    loading: store.posts.loading
  }
}
export default connect(mapStateToProps)(Posts);
