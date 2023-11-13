import React from 'react';
// Icons
import {
    FaTruck,
    FaAddressBook,
    FaMoneyBill1,
    FaRotate, 
  } from "react-icons/fa6"; 
//! Style
import "../style/Page.styled/Features.scss";

const Features = () => {
  return (
    <section id="features">
    <div className="cards">
      <FaTruck color="#8BC34A" size={22} />
      <hgroup>
        <h3>Free Shipping</h3>
        <p>Above $5 Only</p>
      </hgroup>
    </div>
    <div className="cards">
      <FaAddressBook color="#8BC34A" size={22} />
      <hgroup>
        <h3>Certified Organic</h3>
        <p>100% Guarantee</p>
      </hgroup>
    </div>
    <div className="cards">
      <FaMoneyBill1 color="#8BC34A" size={22} />
      <hgroup>
        <h3>Huge Savings</h3>
        <p>At Lowest Price</p>
      </hgroup>
    </div>
    <div className="cards">
      <FaRotate color="#8BC34A" size={22} />
      <hgroup>
        <h3>Easy Returns</h3>
        <p>No Questions Asked</p>
      </hgroup>
    </div>
  </section>
  )
}

export default Features