import {createBrowserRouter} from "react-router-dom";
import Header from "./Header/Header";
import React from "react";
import Counter from "../CounterRedux/Counter";
import UsersBox from "../CreateUsersBox/UsersBox";
import ReduxForm from "../redux-form/ReduxForm";
import Posts from "../Posts/Posts";
import Title from "../Title/Title";
import LearnHook from "../HOOKS/LearnHook";
import LearnHook2 from "../HOOKS/LearnHook2";
import Hover from "../HOOKS/UseHover/Hover";
import ControlInput from "../HOOKS/useInput/controlInput";
import ListForHook from "../HOOKS/ListsForHook/ListForHook";

export const router = createBrowserRouter([
  {
    element:<Header />,
    children:[
      {
        path:"/",
        element:<ReduxForm />

      },
      {
        path:"/post",
        element:<Posts></Posts>
      },
      {
        path:"/user",
        element:<UsersBox />
      },
      {
        path: "/counter",
        element: <Counter/>,
      },
      {
          path:"/secondCounter",
            element:<Title />
      },
      {
        path:"/useHover",
        element:<Hover />
      },
      {
        path:"/useInput",
        element:<ControlInput />
      },
      {
        path:"/useScroll",
        element:<ListForHook />
      },
    ]
  }
])