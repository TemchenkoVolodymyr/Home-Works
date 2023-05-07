import {applyMiddleware, compose, createStore} from "redux";
import {initialState} from "./initialState";
import reducer from "./rootReducers"
import thunk from "redux-thunk";


const store = createStore(reducer,initialState,
  compose(
    applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // thunk нам нужен что бы иметь возможность делать асинхронные действия, React без дополнительных библиотек не может делать асинхрон
))

export default store;

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()