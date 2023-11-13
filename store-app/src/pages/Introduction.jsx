import React from 'react';
//! Style
import "../style/Page.styled/Introduction.scss";
//? Components
import Button from '../components/Button';
// Icons
import { FaCartShopping, } from "react-icons/fa6";
// Images
import i_hero from "../img/organic-products-hero.png";
import i_leaf from "../img/logo-leaf-new.png";

const Introduction = () => {
  return ( 
    <section id="introduction">
        <div className="i-image">
          <img src={i_hero} alt="" />
        </div>
        <div className="i-text">
          <img src={i_leaf} alt="leaf" />
          <h3>Best Quality Products</h3>
          <h1>Join The Organic Movement!</h1>
          <p className="text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <Button
            className="secondary"
            text="SHOP NOW"
            icon={<FaCartShopping />}
            path="/Everything"
          />
          <div></div>
        </div>
      </section>
  )
}

export default Introduction