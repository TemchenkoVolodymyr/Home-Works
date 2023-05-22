import React, {useState} from 'react';
import CustomLink from "../../router/Header/CustomLink/CustomLink";
import {useParams} from "react-router";

const Items = () => {
  let [product, setProduct] = useState([
    {color: 'Cinema', id: 1},
    {color: 'Theatre', id: 2},
    {color: 'Circus', id: 3}
  ])

  return (
    <div>
      {product.map(item => <CustomLink to={`/lessons-9/shop/items/${item.id}`}>{item.color}</CustomLink>)}
    </div>
  );
};

export const InfoItems = () => {

  let [infoProduct,setInfoProduct] = useState([
    {id:1,textInfo:["Le ali della libertà","Schindler's List"," Toro scatenato"]},
    {id:2,textInfo:["The nature of theatre design","Theatre forms","The goals of theatre design"]},
    {id:3,textInfo:["Can you help me?","Early history","Philip Astley and the first circuses"]},
  ])

  let {id} = useParams()
  console.log(id)



  return (
    <>
      {infoProduct[id -1].textInfo.map(item => <p>{item}</p>)}
    </>
  )
}

export default Items;