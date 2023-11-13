import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Images
import leaf from "../img/logo-leaf-new.png"
//! Style
import "../style/Page.styled/Basket.scss";
//? Components
import Card from "./Card"; 

const BS_Product = ({h1}) => {
  const [products, setProducts] = useState([]); 
  useEffect(() => {
    axios.get(`http://localhost:3009/getProducts`).then((res) => {
      setProducts(res.data); 
    });
  }, []);
  
  return (
    <div  className='bsProduct'>
      <div className='bsProduct-head'>
        <h1>{h1}</h1>
        <img src={leaf} alt="" />
      </div>
      <div className='bsProduct-cards'>
      {products.map((items) => {
        if (items.type === "") {
          if (items.price !== 25.00) {
            return <Card key={items.id} data={items} />;
          } else {
            return <Card key={items.id} data={items} discount={"Sale!"} oldPrice={"35.00"} />;
          }
        } 
        return null;
      })}
      </div>
    </div>
  )
}

export default BS_Product;