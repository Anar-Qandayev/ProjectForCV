import React from "react";
import { useNavigate } from "react-router-dom";
import { BsStar } from "react-icons/bs";
import aznImg from "../img/azn.png";

//! Style
import "../style/main.scss";
import "../style/Component.styled/Card.scss";

const Card = ({ data, discount, oldPrice }) => {
  const { id, title, image, category, price } = data;
  const navigate = useNavigate();

  return (
    <div className="card">
      <img
        src={image}
        alt=""
        className="img"
        onClick={() => navigate(`/product-detail/${id}`)}
      />
      <span>{category}</span>
      <h1>{title}</h1>

      <ul>
        <li><BsStar /></li>
        <li><BsStar /></li>
        <li><BsStar /></li>
        <li><BsStar /></li>
        <li><BsStar /></li>
      </ul>

      <h3>
        <span>{oldPrice}</span>
        <img src={aznImg} alt="azn" />
        {price.toFixed(2)}
      </h3>

      <div className="discount">
        <p>{discount}</p>
      </div>
    </div>
  );
};

export default Card;
