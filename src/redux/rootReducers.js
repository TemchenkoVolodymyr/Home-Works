import {combineReducers} from "redux";
import TitleReducer from "../Title/titleReducer";
import inputValueReducer from "../Title/inputValueReducer";
import counterReducer from "../CounterRedux/counterReducer";
import {toDoReducer} from "../ToDo/toDoReducer";
import {listItemsReducer} from "../ToDo/listItemsReducer";
import {postsReducer} from "../Posts/postsReducer";
import {toDoReducers} from "../ToDoAsynhron/toDoReducer";
import {inputReducer} from "../Form/Input/inputReducer";
import {conversionReducer} from "../Form/inputForConversionValue/conversionReducer";





export default combineReducers ({
  title:TitleReducer,
  inputValue:inputValueReducer,
  currentCount:counterReducer,
  toDoInputValue:toDoReducer,
  toDoListItems:listItemsReducer,
  posts:postsReducer,
  toDoItems:toDoReducers,
  inputForForm:inputReducer,
  conversionValue:conversionReducer,
})