import React from 'react';
//! Style
import "../style/Page.styled/Groceries.scss";
//? Components
import Aside from "../components/Aside";
import Shop from "../components/Shop";

const Groceries = () => {
  return (
    <div className='products'>
        <aside>
          <Aside/>
        </aside> 
        <section className='shop'>
          <Shop name={"Groceries"}/>
        </section>
    </div>
  )
}

export default Groceries