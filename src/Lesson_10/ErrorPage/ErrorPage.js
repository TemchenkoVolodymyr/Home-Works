import React from 'react';
import CustomLink from "../../router/Header/CustomLink/CustomLink";

const ErrorPage = () => {
  return (
    <div>
      <h2>404 </h2>
      <p>page not found</p>
      <CustomLink to={"/"}>go home</CustomLink>
    </div>
  );
};

export default ErrorPage;