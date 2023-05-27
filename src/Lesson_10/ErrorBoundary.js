import React, { useState, useEffect } from 'react';
import style from "./ErrorBoundary.module.scss"
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const onError = () => setHasError(true);

    window.addEventListener('error', onError);

    return () => window.removeEventListener('error', onError);
  }, []);

  if (hasError) {
    return <h1 className={style.header}>Something went wrong.</h1>;
  }

  return children;
};

export default ErrorBoundary;
