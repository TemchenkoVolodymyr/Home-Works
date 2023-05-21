import React from 'react';
import Clock from "./Clock/Clock";
import CustomLink from "../router/Header/CustomLink/CustomLink";
import ShouldComponentUpdate from "./useEffect/ShouldComponentUpdate";

const LessonEighth = () => {
  return (
    <>
      {/*<Clock/>*/}
      <CustomLink  to={'clock'}>Clock</CustomLink>
      <ShouldComponentUpdate />
    </>
  );
};

export default LessonEighth;