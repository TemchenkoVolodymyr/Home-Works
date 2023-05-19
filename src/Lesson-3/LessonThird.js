import React from 'react';
import ShowNames from "./ProfileInfo/ShowNames";
import Counter from "./Counter/Counter";
import NavigationTasks from "./NavigationTasks";
import CustomLink from "../router/Header/CustomLink/CustomLink";

const LessonThird = () => {
  return (
    <div>
      <CustomLink  to={'profile'}>Profile</CustomLink>
      <CustomLink  to={'counter'}>Counter</CustomLink>
    </div>
  );
};

export default LessonThird;