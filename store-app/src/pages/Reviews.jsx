import React from 'react';
//! Style
import "../style/Page.styled/Reviews.scss"; 
//? Components
import Button2 from "../components/Button2";
// Images
import i_sydney from "../img/sydney-rae-668606-unsplash.jpg";
import i_client1 from "../img/client01-free-img.png";
import i_client2 from "../img/client02-free-img.png";
import i_leaf from "../img/logo-leaf-new.png"; 
import i_logo1 from "../img/logo-1.svg";
import i_logo2 from "../img/logo-2.svg";
import i_logo3 from "../img/logo-3.svg";
import i_logo4 from "../img/logo-4.svg";
import i_logo5 from "../img/logo-5.svg"; 
// Icons
import { FaArrowRightLong} from "react-icons/fa6";
import { BsStarFill } from "react-icons/bs";


const Reviews = () => {
  return (
    <section id="reviews">
        <div className="container">
          <h1>Customers Reviews</h1>
          <img src={i_leaf} alt="" />
          <div className="reviews-cards">
            <div className="reviews-card">
              <ul>
                <li>
                  <BsStarFill color="#ffbb1e" />
                </li>
                <li>
                  <BsStarFill color="#ffbb1e" />
                </li>
                <li>
                  <BsStarFill color="#ffbb1e" />
                </li>
                <li>
                  <BsStarFill color="#ffbb1e" />
                </li>
                <li>
                  <BsStarFill color="#ffbb1e" />
                </li>
              </ul>
              <p>
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <hgroup>
                <img src={i_client2} alt="" />
                <p>Mila Kunis</p>
              </hgroup>
            </div>
            <div className="reviews-base">
              <img src={i_sydney} alt="" />
              <div className="reviews-bg">
                <h3>Deal Of The Day 15% Off On All Vegetables!</h3>
                <p>
                  I am text block. Click edit button to change this tex em ips.
                </p>
                <Button2
                  className="secondary"
                  text="SHOP NOW"
                  icon={<FaArrowRightLong />}
                  path='/Everything'
                />
              </div>
            </div>
            <div className="reviews-card">
              <ul>
                <li>
                  <BsStarFill color="#ffbb1e" />
                </li>
                <li>
                  <BsStarFill color="#ffbb1e" />
                </li>
                <li>
                  <BsStarFill color="#ffbb1e" />
                </li>
                <li>
                  <BsStarFill color="#ffbb1e" />
                </li>
                <li>
                  <BsStarFill color="#ffbb1e" />
                </li>
              </ul>
              <p>
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <hgroup>
                <img src={i_client1} alt="" />
                <p>Mike Sendler</p>
              </hgroup>
            </div>
          </div>
          <div className="colleagues-logo">
            <h2>Featured Brands:</h2>
            <img src={i_logo1} alt="logo" />
            <img src={i_logo2} alt="logo" />
            <img src={i_logo3} alt="logo" />
            <img src={i_logo4} alt="logo" />
            <img src={i_logo5} alt="logo" />
          </div>
        </div>
      </section>
  )
}

export default Reviews