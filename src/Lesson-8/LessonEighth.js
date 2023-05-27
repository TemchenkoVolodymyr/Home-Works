import React from 'react';
import Clock from "./Clock/Clock";
import CustomLink from "../router/Header/CustomLink/CustomLink";
import ComponentDidMount from "./useEffect/ComponentDidMount";
import MemoComponent from "./useMemo/MemoComponent";
import ReactMemo from "./useMemo/ReactMemo/ReactMemo";

const LessonEighth = () => {
  return (
    <>
      {/*<Clock/>*/}
      <CustomLink  to={'clock'}>Clock</CustomLink>
      <CustomLink  to={'didMount'}>ComponentDidMount</CustomLink>
      <MemoComponent/>
      <ReactMemo />
    </>
  );
};

export default LessonEighth;