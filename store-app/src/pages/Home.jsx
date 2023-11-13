import React from "react";
//! Style
import "../style/Page.styled/Home.scss";
//? Pages
import Reviews from "./Reviews";
import Features from "./Features";
import BSProduct from "../components/bsProduct";
import FreshProduct from "./FreshProduct";
import Introduction from "./Introduction";
import TrendingProduct from "./TrendingProduct";

function Home() {
  return (
    <div className="home">
      <Introduction/>
      <Features/> 
      <BSProduct h1="Best Selling Product" />  
      <FreshProduct /> 
      <TrendingProduct h1="Trending Products" /> 
      <Reviews/>
    </div>
  );
}

export default Home;
