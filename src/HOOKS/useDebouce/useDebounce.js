import {useCallback, useRef} from "react";

export const useDebounce = (callback, delay) => {
  const time = useRef();
  const debouncedCallback = useCallback((...args) => {
    if (time.current) {
      clearTimeout(time.current)
    }
    time.current = setTimeout(() => {
      callback(...args)
    },delay)
  }, [callback, delay])
  return debouncedCallback;
};