import React from "react";
import CountUp from "react-countup";
import { Carousel } from "react-responsive-carousel";

// Icons
import { BsStarFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { BsCheckCircle } from "react-icons/bs";

// Images
import banner from "../img/banner-01.jpg";
import leaf from "../img/basil-leaf.png";
import leaf_logo from "../img/logo-leaf-new.png";
import tomato from "../img//farming04-free-img-o9xdxvnzch1gu353cc71s2fv9hgs2o8e1ubsjmmia0.jpg";
import plant from "../img/farming03-free-img-o9vzqvrix9ebgtwlxr5iwk27s1xblzkum1b4ivvlzc.jpg";
import water from "../img/image-01-ok9t8tqfmw86q6a5qjwdw95uon8m0ro8dme893gop4.jpg";
import grape from "../img/image-02-ok9thlk7f88j35jeicf161gqa3zxv2i1l1ldi2gemg.jpg";
import badge from "../img//organic-badge-freeimg.png";
import i_client2 from "../img/client02-free-img.png";

//! Styles
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style/Page.styled/About.scss";

//? Components
import Button from "../components/Button";

const About = () => {
  const images = [tomato, plant, water, grape];
  
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="introduction">
        <img className="img" src={leaf} alt="img" />
        <div>
          <div className="about-text">
            <h3>We Are Your Favourite Store.</h3>
            <p>
              Tuas quisquam quo gravida proident harum, aptent ligula anim
              consequuntur, ultrices mauris, nunc voluptates lobortis, varius,
              potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero
              penatibus quasi! Nostra tenetur dignissimos ultrices natus
              distinctio ultrices consequuntur numqu.
            </p>
            <p>
              Officiis fuga harum porro et? Similique rhoncus atque! Netus
              blanditiis provident nunc posuere. Rem sequi, commodo, lorem
              tellus elit, hic sem tenetur anim amet quas, malesuada proident
              platea corrupti expedita.
            </p>
          </div>
          <div className="about-img">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
      <div className="about-countup">
        <h3>Numbers Speak For Themselves!</h3>
        <hgroup>
          <CountUp
            start={0}
            end={5000}
            duration={4}
            separator=","
            suffix="+"
            className="countup"
          ></CountUp>
          <h4>Curated Products </h4>
        </hgroup>
        <hgroup>
          <CountUp
            start={0}
            end={800}
            duration={4}
            separator=","
            suffix="+"
            className="countup"
          ></CountUp>
          <h4>Curated Products</h4>
        </hgroup>
        <hgroup>
          <CountUp
            start={0}
            end={40}
            duration={4}
            separator=","
            suffix="+"
            className="countup"
          ></CountUp>
          <h4>Product Categories</h4>
        </hgroup>
      </div>
      <div className="certified-products">
        <div className="carousel">
          <Carousel
            className="crs"
            autoPlay
            interval={3000} // 3 saniyede bir geçiş
            infiniteLoop
            showThumbs={false} // Sayfalama noktalarını gösterme
          >
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </Carousel>
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
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <hgroup>
              <img src={i_client2} alt="" />
              <p>Mila Kunis</p>
            </hgroup>
          </div>
        </div>
        <div className="cp-text">
            <div>
              <img src={badge} alt="img" />
              <hgroup>
                <h2>Certified Products</h2>
                <p>Click edit button to change this text. Lorem ipsum dolor sit amet</p>
              </hgroup>
            </div>
            <h1>We Deal With Various Quality Organic Products!</h1>
            <img src={leaf_logo} alt="img-logo" />
            <ul>
              <li><BsCheckCircle className="icon"/> Fresh fruits</li>
              <li><BsCheckCircle className="icon"/> Dry fruits</li>
              <li><BsCheckCircle className="icon"/> Fresh vegetables</li>
              <li><BsCheckCircle className="icon"/> Dried vegetables</li>
              <li><BsCheckCircle className="icon"/> Dried vegetables</li>
              <li><BsCheckCircle className="icon"/> Beauty products</li>
              <li><BsCheckCircle className="icon"/> Milk products</li>
              <li><BsCheckCircle className="icon"/> Organic honey</li>
              <li><BsCheckCircle className="icon"/> Organic tea</li>
            </ul>
            <Button className={"secondary"} text={"START SHOPPING"} icon={<FaCartShopping className="fcs"/>} path="/Everything"/>
        </div>
      </div>
    </div>
  );
};

export default About;
