import React, {useEffect, useState} from "react";
import darkness from "../../assets/darkness.png";
import light from "../../assets/light.png";
import "./ComponentDidMount.css"


const ComponentDidMount = () => {

  let [image, setImage] = useState(darkness)


  useEffect(() => {

    let idImage = setTimeout(() => {setImage(light)},2000)

    return () => {
      clearTimeout(idImage)
    }
  })

  return (
    <>
      <div className="image-container">
      <img src={image} alt="some image"/>
      </div>
      </>
      )


      }


      export default ComponentDidMount;