
import React from 'react';
import ShowDifferentString from "./ShowDifferentString";

const LessonSecond = () => {
  return (
   <>
     <div className="main">
     <ShowDifferentString  string={"String From First Component"}/>
     <ShowDifferentString  string={"String From Second Component"}/>
     <ShowDifferentString  string={"String From Third Component"}/>
     </div>
   </>
  );
};

export default LessonSecond;