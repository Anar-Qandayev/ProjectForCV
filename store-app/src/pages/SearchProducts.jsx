import React from 'react';
//! Style
import "../style/Page.styled/SearchProducts.scss";
//? Components
import Button from '../components/Button';  

const SearchProducts = (data) => {     
  const { title, image } = data;
  return (
    <div className='contain'>
        <Button path={"/Everything"} text={"Shop"} className={"secondary"}/>
        <h3>This product is not available!</h3>
        <div>  
          <img src={image} alt="" />
          <p>{title}</p> 
        </div>
    </div>
  )
}

export default SearchProducts