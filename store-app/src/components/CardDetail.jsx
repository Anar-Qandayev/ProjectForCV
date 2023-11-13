import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Zoom from "react-zoom-image-hover";
import { addToBasket } from "../redux/slices/addToBasketSlice";

//! Style
import "../style/Component.styled/CardDetail.scss";   
import Swal from 'sweetalert2/src/sweetalert2.js'

const CardDetail = ({ card }) => {
  const navigate = useNavigate();
  const { title, image, price, category } = card;
  const basketData = useSelector((state) => state.basket);
  const dispatch = useDispatch(); 

  const handleAddToBasket = () => {
    if (basketData.find((item) => item.id === card.id)) {
        const newData = basketData.map((item) => {
          if (item.id === card.id) {
            return {...item, count:item.count+1};
          }
          return item;
        })
      dispatch(addToBasket([...newData]));
    } else dispatch(addToBasket([...basketData, card]));
    Swal.fire({
      title: title,
      text: 'The product has been added to the cart.',
      imageUrl: image,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  };
  const handleBasket = () => {
    navigate("/basket")
  }
  return (
    <div className="card-details">
      <hgroup>
        <h1>Selected product: "{title}"</h1>
        <button className="secondary" onClick={handleBasket}>Go to Basket</button>
      </hgroup>
      <hr />
      <div className="card-detail">
        <div className="zoom-img">
          <Zoom
            height={400}
            width={400}
            className="zoom"
            zoomScale={2}
            src={image}
          />
        </div>
        <div className="text">
          <h1>{title}</h1>
          <h2>{category}</h2>
          <h3>
            £{price} <span> + Free Shipping</span>
          </h3>
          <p>
            Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
            consectetur adipisci velit, sed quia non incidunt lores ta porro
            ame. numquam eius modi tempora incidunt lores ta porro ame.
          </p>
          <button className="secondary" onClick={handleAddToBasket}>
            ADD TO CART
          </button>
          <hr />
          <p>
            Categories: <Link to="/Groceries">Groceries</Link> ,{" "}
          <Link to="/Juice">Juice</Link>
          </p>
        </div>
      </div> 
      
    </div>
  );
};
export default CardDetail;
