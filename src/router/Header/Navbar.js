import {Link,NavLink} from "react-router-dom";
import React from "react";
import "./Navbar.css"
import CustomLink from "./CustomLink/CustomLink";
export const Navbar = () => {

  // у NavLink есть встроенный класс active , надо только настроить ему стили в Navbar.css  и все
  // Можем создать свой NavLink, на примере CustomLink, мы создаем компоненту CustomLink.
  return (
    <div className="links_wrapper">
      <CustomLink className="link" to="/">Home</CustomLink>

      <CustomLink className="link" to='/lessons-1'>Lessons 1</CustomLink>
      <CustomLink className="link" to='/lessons-2'>Lessons 2</CustomLink>
      <CustomLink className="link" to='/lessons-3'>Lessons 3</CustomLink>
      <CustomLink className="link" to='/lessons-4'>Lessons 4</CustomLink>
      <CustomLink className="link" to='/lessons-5'>Lessons 5</CustomLink>
      <CustomLink className="link" to='/lessons-6'>Lessons 6</CustomLink>
      <CustomLink className="link" to='/lessons-7'>Lessons 7</CustomLink>
      <CustomLink className="link" to='/lessons-8'>Lessons 8</CustomLink>
      <CustomLink className="link" to='/lessons-9'>Lessons 9</CustomLink>
      <CustomLink className="link" to='/lessons-10'>Lessons 10</CustomLink>
      {/*<CustomLink className="link" to='/login'>Login</CustomLink>*/}
      {/*<CustomLink className="link" to='/post'>Posts</CustomLink>*/}
      {/*<CustomLink className="link" to='/user'>users</CustomLink>*/}
      {/*<CustomLink className="link" to='/counter'>Counter</CustomLink>*/}
      {/*<CustomLink className="link" to='/useHover'>Hover</CustomLink>*/}
      {/*<CustomLink className="link" to='/useInput'>ControlInput</CustomLink>*/}
      {/*<CustomLink className="link" to='/useScroll'>ListForHook</CustomLink>*/}
      {/*<CustomLink className="link" to='/title'>Title</CustomLink>*/}
      {/*<CustomLink className="link" to='/todolist'>Todo</CustomLink>*/}
    </div>
  );
};