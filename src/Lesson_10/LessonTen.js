import React from 'react';
import ErrorBoundary from "./ErrorBoundary";
import ToDoList from "../ToDoAsynhron/ToDoList";

const LessonTen = () => {
  return (
    <div>
      <ErrorBoundary>
        <ToDoList/>
      </ErrorBoundary>
    </div>
  );
};

export default LessonTen;