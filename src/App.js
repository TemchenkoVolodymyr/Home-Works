import React from "react";
import './App.css';
import {connect} from "react-redux";
import {
  Link,
  Route, Routes,
} from "react-router-dom";
import Layout from "./router/Header/Layout";

import Posts from "./Posts/Posts";
import UsersBox from "./CreateUsersBox/UsersBox";
import Hover from "./HOOKS/UseHover/Hover";
import ListForHook from "./HOOKS/ListsForHook/ListForHook";
import Title from "./Title/Title";
import ControlInput from "./HOOKS/useInput/controlInput";
import ReduxForm from "./Lesson-6/redux-form/ReduxForm";
import HomePage from "./HomePage/HomePage";
import Loader from "./Loader/Loader";
import ToDoListAsynchron from "./ToDoListAsynchron/ToDoListAsynchron";
import AnotherPage from "./router/Params/AnotherPage";
import CreateNewPost from "./router/Params/CreateNewPost";
import RequireAuth from "./router/requireAuth/RequireAuth";
import AuthProvider from "./router/requireAuth/Authorization";
import LessonFirst from "./Lesson-1/LessonFirst";
import LessonSecond from "./Lesson-2/LessonSecond";
import LessonThird from "./Lesson-3/LessonThird";
import ShowInfo from "./Lesson-3/ProfileInfo/ShowInfo";
import NavigationTasks from "./Lesson-3/NavigationTasks";
import ShowNames from "./Lesson-3/ProfileInfo/ShowNames";
import Counter from "./Lesson-3/Counter/Counter";
import LessonFourth from "./Lesson-4/LessonFourth";
import ControlForm from "./Lesson-5/ControlForm/ControlForm";
import LessonFifth from "./Lesson-5/LessonFifth";
import Multiply from "./Lesson-5/Multiply/Multiply";
import LessonSixth from "./Lesson-6/LessonSixth";
import LessonSeventh from "./Lesson-7/LessonSeventh";
import Todos from "./Lesson-7/Todos/Todos";
import ComponentA from "./Lesson-7/CallbackRedux/ComponentA";
import LessonEighth from "./Lesson-8/LessonEighth";
import Clock from "./Lesson-8/Clock/Clock";
import LessonNinth from "./Lesson_9/LessonNinth";
import Shop from "./Lesson_9/OnlineShop/Shop";
import Items, {InfoItems} from "./Lesson_9/OnlineShop/Items";
import Contacts from "./Lesson_9/OnlineShop/Contacts";
import SecretShop from "./Lesson_9/OnlineShop/SecretShop";
import LessonTen from "./Lesson_10/LessonTen";
import ErrorPage from "./Lesson_10/ErrorPage/ErrorPage";
import ComponentDidMount from "./Lesson-8/useEffect/ComponentDidMount";

const App = () => {

// 1.  Если поставить <Route index> то этот роутер будет начальным элементом для главного роутера,у нас это <Route path="/" element={<Layout/>}>
// и его начальным интерфейсом будет <Route index element={<HomePage/>}></Route>
  //2.  <Route path="post/:id" element={<AnotherPage/>}></Route> . Что бы можно было нажимать на ссылки и переходить на определенный пост внутри компоненты Posts
  // С помощю хука useParams в компоненте  AnotherPage мы делаем запрос на сервер и находим именно тот пост id которого нам попал в useParams
  // 3. RequireAuth это наша компонента,она защищает компоненту от незалогиненого входа
  return (
    <>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route index element={<HomePage/>}></Route>
          <Route path="lessons-1" element={<LessonFirst/>}></Route>
          <Route path="lessons-2" element={<LessonSecond/>}></Route>
          <Route path="lessons-3" element={<LessonThird/>}></Route>
          <Route path="lessons-3/profile/name/:id" element={<ShowInfo/>}></Route>
          <Route path="lessons-3/profile" element={<ShowNames/>}></Route>
          <Route path="lessons-3/counter" element={<Counter/>}></Route>
          <Route path="lessons-4" element={<LessonFourth/>}></Route>
          <Route path="lessons-5" element={<LessonFifth/>}></Route>
          <Route path="lessons-5/multiply" element={<Multiply/>}></Route>
          <Route path="lessons-5/form" element={<ControlForm/>}></Route>
          <Route path="lessons-6" element={<LessonSixth/>}></Route>
          <Route path="lessons-6/redux-form" element={<ReduxForm/>}></Route>
          <Route path="lessons-7" element={<LessonSeventh />}></Route>
          <Route path="lessons-7/todos" element={<Todos />}></Route>
          <Route path="lessons-7/componentA" element={<ComponentA />}></Route>
          <Route path="lessons-8" element={<LessonEighth />}></Route>
          <Route path="lessons-8/clock" element={<Clock />}></Route>
          <Route path="lessons-8/didMount" element={<ComponentDidMount />}></Route>
          <Route path="lessons-9" element={<LessonNinth />}></Route>
          <Route path="lessons-9/shop" element={<Shop />}></Route>
          <Route path="lessons-9/shop/items" element={<Items />}></Route>
          <Route path="lessons-9/shop/contacts" element={<Contacts />}></Route>
          <Route path="lessons-9/shop/items/:id" element={<InfoItems />}></Route>
          <Route path="lessons-9/shop/secret" element={<SecretShop />}></Route>
          <Route path="lessons-10" element={<LessonTen/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
          {/*<Route path="login" element={<ReduxForm/>}></Route>*/}

          {/*<Route path="post" element={<Posts/>}></Route>*/}
          {/*<Route path="post/:id" element={<AnotherPage/>}></Route>*/}
          {/*<Route path="post/new" element={<CreateNewPost/>}></Route>*/}

          {/*<Route path="user" element={*/}
          {/*  <RequireAuth>*/}
          {/*  <UsersBox/>*/}
          {/*  </RequireAuth>*/}
          {/*}></Route>*/}
          {/*<Route path="useHover" element={<Hover/>}></Route>*/}
          {/*<Route path="useScroll" element={<ListForHook/>}></Route>*/}
          {/*<Route path="title" element={<Title/>}></Route>*/}
          {/*<Route path="useInput" element={<ControlInput/>}></Route>*/}
          {/*<Route path="counter" element={<Counter/>}></Route>*/}
          {/*<Route path="loader" element={<Loader/>}></Route>*/}

          {/*<Route path="todolist" element={*/}
          {/*  <RequireAuth>*/}
          {/*    <ToDoListAsynchron/>*/}
          {/*  </RequireAuth>*/}
          {/*}></Route>*/}

        </Route>
      </Routes>
      </AuthProvider>
    </>
  );
};

let mapStateToProps = (store) => {
  return {
    formikData: store.formikData
  }
}
export default connect(mapStateToProps)(App);

