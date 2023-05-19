import axios from "axios";


let instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
})

export const toDoApi = {

  getToDoItems() {
    return instance.get(`todos`)
  },
  getUsers() {
    return instance.get('users')
  }
}

export const usersApi = {
  getName () {
    return instance.get('users')
  },
  getInfo(id) {
    return instance.get(`users/${id}`)

  }
}

