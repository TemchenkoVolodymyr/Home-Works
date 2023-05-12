import axios from "axios";


let instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
})

export const toDoApi = {

  getToDoItems() {
    return instance.get(`todos`)
  },
  getPostsItems() {
    return instance.get(`posts`)
  },
  getUsers() {
    return instance.get('users')
  }
}

