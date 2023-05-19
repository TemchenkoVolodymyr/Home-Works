import {initialState} from "../redux/initialState";
import {LOADING_END, LOADING_ERROR, LOADING_START} from "./ActionAsynhron";
import {CREATE_NEW_POST} from "./actionPost";



export const postsReducer = (posts = initialState.posts, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...posts,
        loading: true,
      }
    case LOADING_END:
      return {
        ...posts,
        post: action.posts,
        loading: false,
      }
    case LOADING_ERROR:
      return {
        ...posts,
        loading: false,
        error:action.error,
      }
    case CREATE_NEW_POST :
      return  {
        ...posts,post:[...posts.post,action.newPost]
      }
    default:return posts
  }
}