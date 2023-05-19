export const CREATE_NEW_POST = "CREATE_NEW_POST"


export const newPostAC = (post) => {
  return {
    type:"CREATE_NEW_POST",
    newPost:post
  }
}