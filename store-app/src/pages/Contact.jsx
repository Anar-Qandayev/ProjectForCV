import React from "react";
//! Style
import "../style/Page.styled/Contact.scss";
//? Components
import ToggleComponent from '../components/ToggleComponent';
// Icons
import { BsFillTelephoneFill, BsEnvelope } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
// Images
import leaf from "../img/basil-leaf.png";
import leaf_logo from "../img/logo-leaf-new.png";

const Contact = () => {
   
  return (
    <div className="contact">
      <div className="contact-head">
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-main">
        <div className="contact-cards">
          <img src={leaf} alt="img" />
          <hgroup>
            <BsFillTelephoneFill color="#8BC34A" size={22} />
            <p>+123 456 7890</p>
            <p>+123 456 7890</p>
          </hgroup>
          <hgroup>
            <BsEnvelope color="#8BC34A" size={22} />
            <p>info@example.com</p>
            <p>support@example.com</p>
          </hgroup>
          <hgroup>
            <FaLocationDot color="#8BC34A" size={22} />
            <p>1569 Ave, New York,</p>
            <p>NY 10028, USA</p>
          </hgroup>
        </div>
        <div className="contact-question">
          <h2>Frequently Asked Question!</h2>
          <img src={leaf_logo} alt="img" />
            <div className="toggleComponent">
                <ToggleComponent question={"Pulvinar nostrud class cum facilis?"} text={"I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo."}/>
                <ToggleComponent question={"Pon excepturi numquam, facilis?"} text={"I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo."}/>
                <ToggleComponent question={"Pon excepturi numquam, facilis?"} text={"I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo."}/>
                <ToggleComponent question={"Pon excepturi numquam, facilis?"} text={"I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo."}/>
                <ToggleComponent question={"Consequat nesciunt fusce facilisi?"} text={"I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo."}/>
                <ToggleComponent question={"Consequat nesciunt fusce facilisi?"} text={"I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo."}/>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Contact;
