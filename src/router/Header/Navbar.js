import {Link} from "react-router-dom";
import React from "react";
import "./Navbar.css"
export const Navbar = () => {
  return (
    <div className="links_wrapper">
      <Link className="link" to='/'>Login</Link>
      <Link className="link" to='/post'>Posts</Link>
      <Link className="link" to='/user'>users</Link>
      <Link className="link" to='/counter'>Counter</Link>
      <Link className="link" to='/useHover'>Hover</Link>
      <Link className="link" to='/useInput'>ControlInput</Link>
      <Link className="link" to='/useScroll'>ListForHook</Link>


    </div>
  );
};