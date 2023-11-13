import React, { useEffect, useState } from 'react'
import axios from 'axios';
//! Style
import "../style/Page.styled/TrendingProduct.scss";
//? Components
import Card from "../components/Card"; 
// Images
import leaf from "../img/logo-leaf-new.png";

const TrendingProduct = ({h1}) => {
  const [products, setProducts] = useState([]); 
  useEffect(() => {
    axios.get(`http://localhost:3009/getProducts`).then((res) => {
      setProducts(res.data); 
    });
  }, []);
  return (
    <div className='t-product'>
        <div className='TProduct-head'>
        <h1>{h1}</h1>
        <img src={leaf} alt="" />
      </div>
      <div className='TProduct-cards'>
        {
          products.map((items) => {
            if(items.type.includes("tProduct")){
              if(items.price !==25.00){
                return <Card key={items.id} data={items} />
              }else{
                return <Card key={items.id} data={items} discount={"Sale!"} oldPrice={"35.00"}/>
              }
            }
          })
        }
      </div>
    </div>
  )
}

export default TrendingProduct