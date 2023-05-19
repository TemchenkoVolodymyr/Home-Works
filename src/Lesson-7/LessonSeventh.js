import React from 'react';
import CustomLink from "../router/Header/CustomLink/CustomLink";

const LessonSeventh = () => {
  return (
   <>
     {/*<Todos />*/}
     <CustomLink  to={'todos'}>Todos</CustomLink>
     <CustomLink  to={'componentA'}>ComponentA</CustomLink>
   </>
  );
};

export default LessonSeventh;