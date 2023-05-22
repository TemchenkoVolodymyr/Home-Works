import React, {useState} from 'react';
import CustomLink from "../../router/Header/CustomLink/CustomLink";
import Button from "@mui/material/Button";
import {Navigate} from "react-router-dom";

const Shop = () => {
  let [canSee, setCanSee] = useState(false)


  const accept = () => {
    setCanSee(!canSee)
  }

  let canSeeOrNot = canSee ?   <CustomLink to={'secret'}>Secret shop</CustomLink> : <Navigate to={"/lessons-9/shop"} />

  return (
    <div>
      <CustomLink to={'items'}>products</CustomLink>
      <CustomLink to={'contacts'}>contacts</CustomLink>
      {canSeeOrNot}
      <Button onClick={accept} variant="contained">I`m 18ye</Button>
    </div>
  );
};

export default Shop;