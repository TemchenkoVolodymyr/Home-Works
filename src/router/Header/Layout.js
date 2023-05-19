import React from 'react';
import {Navbar} from "./Navbar";
import {Outlet} from "react-router";
import "./Layout.css"

const Layout = () => {

  // там где мы поместим наш Outlet там и будет показываться контент наших страниц ссылки на которые находятся в Navbar
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

export default Layout;