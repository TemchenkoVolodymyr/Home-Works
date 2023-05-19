import React, {useRef} from 'react';
import useHover from "./useHover";


const Hover = () => {

  const ref = useRef() // хук useRef дает возможность отслеживать элемент
  const refSecondDiv = useRef()
  const isHovering = useHover(ref)
  const isHoveringSecondDiv = useHover(refSecondDiv)


  return (
    <>
      <h1>HOVER</h1>
      <div ref={ref} style={{width:300,height:300,background: isHovering ? "brown" : "orange"}}></div>
      <div ref={refSecondDiv} style={{width:300,height:300,background: isHoveringSecondDiv ? "blue" : "green"}}></div>
    </>
  );
};

export default Hover;