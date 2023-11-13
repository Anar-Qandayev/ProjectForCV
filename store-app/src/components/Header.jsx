import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss' ;

// IMG
import imgAzn from "../img/azn.png";
import logo from "../img/header-logo.svg";
import imgBasket from "../img/shopping-basket.png";

//! Style
import "../style/Component.styled/Header.scss";

const Header = () => {
  const basketItems = useSelector((state) => state.basket);
  const [commonPrice, setCommonPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let price = 0;
    basketItems.forEach((item) => (price += item.price * item.count));
    setCommonPrice(price);
  }, [basketItems]);

  const token = sessionStorage.getItem("token");
  const decoded = token ? jwt_decode(token) : null;
  const username = decoded ? decoded.sub : null;
  const onHandleLogin = () => {
    if (username) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You are already registered",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("home");
    } else {
      Swal.fire({
        title: 'Qeydiyyatdan kecmisiz?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `Not`,
      }).then((result) => {  
          if (result.isDenied) {
            navigate('/register')
        }
      })
    }
  };

  return (
    <header>
    <nav>
      <ul ul className="ul1">
        <li>
          <Link to="/home">
            <img
              className="logo"
              src={logo}
              alt="logoImage"
            />
          </Link> 
        </li>
        <li>
          <Link to="/Everything">Everything</Link> 
        </li>
        <li>
          <Link to="/Groceries">Groceries</Link> 
        </li>
        <li>
          <Link to="/Juice">Juice</Link> 
        </li>
      </ul>
      <ul className="ul2">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/basket">
            <img src={imgAzn} alt="" />
            {commonPrice.toFixed(2)} 
            <hgroup>
              <img src={imgBasket} alt="basket"/>
              <span>{basketItems.length}</span>
            </hgroup>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <b>Sign Up</b>
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={onHandleLogin}>
            <b>Login</b>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  );
};

export default Header;
