import React from 'react';
import ControlForm from "./ControlForm/ControlForm";
import Multiply from "./Multiply/Multiply";
import CustomLink from "../router/Header/CustomLink/CustomLink";

const LessonFifth = () => {
  return (
    <div>
      {/*<ControlForm />*/}
      {/*<Multiply />*/}
      <CustomLink  to={'multiply'}>Multiply</CustomLink>
      <CustomLink  to={'form'}>Form</CustomLink>
    </div>
  );
};

export default LessonFifth;