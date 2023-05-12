import React, {useEffect, useState} from 'react';

const UseHover = (ref) => {
  const [isHovering, setHover] = useState(false);


  const on = () => {
    setHover(true)
  }
  const off = () => {
    setHover(false)
  }
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const element = ref.current       // имеено в current находятся данные элемента которая ref нам подтянул
    element.addEventListener("mouseenter", on)
    element.addEventListener("mousemove", on)
    element.addEventListener("mouseleave", off)

    return function () {
      element.removeEventListener("mouseenter", on)
      element.removeEventListener("mousemove", on)
      element.removeEventListener("mouseleave", off)
    }
  })
  return isHovering
};

export default UseHover;