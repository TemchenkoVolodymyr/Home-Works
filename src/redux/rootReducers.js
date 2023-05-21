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
import {formikReducer} from "../Formik/FormikReducer";
import {toDoListReducer} from "../ToDoListAsynchron/toDoListAsychronReducer";
import {usersReducer} from "../CreateUsersBox/Users/usersReducer";
import { reducer as formReducer } from 'redux-form';
import {authorizationReducer} from "../router/requireAuth/AuthorizationReducer";
import {reducerComponentA} from "../Lesson-7/CallbackRedux/reducerComponentA";
import {reduxShouldCU} from "../Lesson-8/useEffect/reduxShouldComponentUpdate";





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
  formikData:formikReducer,
  toDo:toDoListReducer,
  users:usersReducer,
  form:formReducer,
  isAuth:authorizationReducer,
  componentValue:reducerComponentA,
  shouldUC:reduxShouldCU,
})