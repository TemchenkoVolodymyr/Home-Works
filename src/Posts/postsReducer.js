import {initialState} from "../redux/initialState";
import {LOADING_END, LOADING_ERROR, LOADING_START} from "./ActionAsynhron";


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
    default:return posts
  }
}