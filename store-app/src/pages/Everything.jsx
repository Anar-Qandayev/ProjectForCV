import React from 'react';
//! Style
import "../style/Page.styled/Everything.scss";
//? Components
import Aside from "../components/Aside";
import Shop from "../components/Shop";  

function Products() {
  return (
    <div className='products'>
        <aside>
          <Aside/>
        </aside> 
        <section className='shop'>
          <Shop name={"Shop"}/>
        </section>
    </div>
  )
}

export default Products;