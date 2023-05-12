import React from 'react';
import {Navbar} from "./Navbar";
import {Outlet} from "react-router";

const Header = () => {
  return (
  <>
    <header>
      <Navbar />
    </header>
    <Outlet />
  </>
  );
};

export default Header;