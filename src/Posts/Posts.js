import React, {Component} from 'react';
import {connect} from "react-redux";
import {loadPostAction} from "./ActionAsynhron";
import Loader from "../Loader/Loader";

class Posts extends Component {
  componentDidMount() {
    // тут мы используем "замыкание", такой синтаксис нужен для того что бы dispatch передать внутрь функции loadPostAction и там вызывать dispatch
    this.props.dispatch(loadPostAction())
  }

  render() {
    return (
      <>
        {this.props.loading ? <Loader /> : null}
      <ul>
        {this.props.post.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    post: store.posts.post,
    loading: store.posts.loading
  }
}
export default connect(mapStateToProps)(Posts);