import React from "react";
import { Link } from "react-router-dom";
import footer_img from "../img/organic-store-white-logo.png";
import footer_gp from "../img/play-store.png";
import footer_apps from "../img/app-store.png";
import { BsFacebook ,BsTwitter,BsWhatsapp,BsInstagram} from "react-icons/bs";

//! Style
import "../style/Component.styled/Footer.scss"; 

const Footer = () => {
  return (
    <footer>
      <div className="up-section">
        <div className="f1">
          <img src={footer_img} alt="logo" />
          <i>
            Maecenas mi justo, interdum at consectetur vel, tristique et arcu.
            Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse
            quis faucibus urna. Suspendisse pellentesque.
          </i>
        </div>
        <div className="f2">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/everything">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/basket">Basket</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li> 
          </ul>
          <h3>Site Links</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Shipping Details</li>
            <li>Offers Coupons</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="f3">
          <h3>Download Our Mobile app</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            aliquam gravida sollicitudin. Praesent portaenim mi, non tincidunt
            libero interdum sit amet.
          </p>
          <h3>Quick Links</h3>
          <ul className="green-li">
            <li>Know More About Us</li>
            <li>Visit Store</li>
            <li>Let's Connect</li>
            <li>Locate Stores</li>
          </ul>
          <hgroup>
            <Link to="https://play.google.com/store/apps/details?id=app.organicfood.com.organicfoodcafe&hl=en&gl=US"><img src={footer_gp} alt="google pay" /></Link>
            <Link to="https://apps.apple.com/ae/app/organic-grocery-online/id1352968357"><img src={footer_apps} alt="app store" /></Link>
          </hgroup>
        </div>
      </div>
      <div className="down-section">
        <p>Copyright © 2023 | Organic Store</p>
        <ul>
          <li><BsWhatsapp  color="#A8AFB4" size={14}/></li>
          <li><BsFacebook  color="#A8AFB4" size={14}/></li>
          <li><BsTwitter   color="#A8AFB4" size={14}/></li>
          <li><BsInstagram color="#A8AFB4" size={14}/></li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
