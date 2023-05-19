import React from 'react';
import {Navbar} from "./Navbar";
import {Outlet} from "react-router";
import "./Header.css"

const Header = () => {
  return (
  <>
    <div className="container">
    <header className="header">
      <Navbar />
    </header>
      <div className="wrapper__outlet">
        <Outlet />
      </div>

    </div>
  </>
  );
};

export default Header;