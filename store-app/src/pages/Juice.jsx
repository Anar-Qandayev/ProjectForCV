import React from 'react';
//! Style
import "../style/Page.styled/Juice.scss";
//? Components
import Aside from "../components/Aside";
import Shop from "../components/Shop";

const Juice = () => {
  return (
    <div className='products'>
        <aside>
          <Aside/>
        </aside> 
        <section className='shop'>
          <Shop name={"Juice"}/>
        </section>
    </div>
  )
}

export default Juice