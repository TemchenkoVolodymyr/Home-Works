import axios from "axios";


export const LOADING_START ="LOADING-START"
export const LOADING_END ="LOADING-END"
export const LOADING_ERROR ="LOADING-ERROR"


export const loadPostAction = () => {
  return (dispatch) => {          // тут мы получили dispatch только потому что в компоненте Posts в componentDidMount вызвали dispatch с функцией loadPostAction
                                        // это надо для того что бы мы асинхронно делали запросы на сервер
    dispatch({
      type:LOADING_START
    })

    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response =>{
        dispatch({
          type:LOADING_END,
          posts:response.data
        })
      })
      .catch(error =>{

        dispatch({
          type:LOADING_ERROR,error
        })
      })
  }
}
