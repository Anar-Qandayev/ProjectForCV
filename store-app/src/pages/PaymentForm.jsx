import React, { useEffect, useState, useRef } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "../style/Page.styled/PaymentFrom.scss";
import { useDispatch, useSelector } from "react-redux";
import azn from "../img/azn.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { removeBasket } from '../redux/slices/addToBasketSlice';


const PaymentForm = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const basketItems = useSelector((state) => state.basket);
  const [commonPrice, setCommonPrice] = useState(undefined);

  useEffect(() => {
    commonPrice === 0 && commonPrice !== undefined && navigate("/Everything");
  }, [commonPrice]);

  useEffect(() => {
    let price = 0;
    basketItems.map((item) => (price += item.price * item.count));
    setCommonPrice(price);
  }, [basketItems]);

  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
    location: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setState((prev) => ({ ...prev, [name]: value }));
  
    if (name === "number" && (value.length !== 16 || !/^[0-9]{12,16}$/.test(value))) {
      e.target.style.borderColor = "red";
    } else if (name === "expiry" && value.length !== 4) {
      e.target.style.borderColor = "red";
    } else if (name === "cvc" && value.length !== 3) {
      e.target.style.borderColor = "red";
    } else if (name === "location" && value === "") {
      e.target.style.borderColor = "red";
    } else if (name === "phone" && !/^(994|0)(50|51|55|70|77|99)[1-9][0-9]{6}$/.test(value)) {
      e.target.style.borderColor = "red";
    } else {
      e.target.style.borderColor = "green";
    }
  };

  const handleInputFocus = (e) => {
    setState((prev) => ({ ...prev, focus: e.target.name }));
  };

  const numberRef = useRef(null);
  const cvcRef = useRef(null);
  const expiryRef = useRef(null);
  const nameRef = useRef(null);
  const locationRef = useRef(null);
  const phoneRef = useRef(null);

  const handlePayment = () => {
    if (commonPrice !== 0) {
      if (!numberRef.current.value || !nameRef.current.value || !expiryRef.current.value || !cvcRef.current.value || !locationRef.current.value || !phoneRef.current.value) {
        // Bütün inputlar dolu deyil
        Swal.fire({
          icon: "error",
          title: "Error! Values are not entered correctly!",
        });
      } else if (!/^[0-9]{12,16}$/.test(numberRef.current.value)) {
        // 12-dən 16 rəqəm daxil edilməyib
        Swal.fire({
          icon: "error",
          title: "Error! Enter a valid card number...",
        });
      } else {
        setTimeout(() => {
          Swal.fire("Your order registered", "You clicked the button!", "success");
          dispatch(removeBasket())
          navigate("/Everything");

        }, 1000);
      }
    } else {
      setTimeout(() => {
        Swal.fire({
          icon: "error",
          title: "Error! Your basket appears empty...",
          footer: '<a href="">Why do I have this issue?</a>',
        });
        navigate("/Everything"); 
      }, 1000);
    }
  };
  const handleShop = () => {
    navigate("/Everything");
  };
  return (
    <div className="container">
      <hgroup>
        <h1>Checkout</h1>
        <button className="secondary" onClick={handleShop}>
          Go to Shop
        </button>
      </hgroup>
      <hr />
      <div className="payment-head">
        <h2>
          The amount to be payment: <img src={azn} alt="img" />
          {commonPrice}
        </h2>
        <div className="payment">
          <Cards
            number={state.number}
            expiry={state.expiry}
            cvc={state.cvc}
            name={state.name}
            focused={state.focus}
          />
          <form>
            <input
              type="number"
              name="number"
              placeholder="Card Number"
              value={state.number}
              ref={numberRef}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input
              type="name"
              name="name"
              placeholder="Your Name"
              value={state.name}
              ref={nameRef}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input
              type="expiry"
              name="expiry"
              placeholder="Valid Thru"
              value={state.expiry}
              ref={expiryRef}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input
              type="cvc"
              name="cvc"
              placeholder="Secret Code"
              value={state.cvc}
              ref={cvcRef}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </form>
        </div>
        <div className="contact">
          <hgroup>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              ref={locationRef}
              onChange={handleInputChange}
              id="location"
              placeholder="Location address"
            />
          </hgroup>
          <hgroup>
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phone"
              id="phone"
              pattern="^(994|0)(50|51|55|70|77|99)[1-9][0-9]{6}$"
              ref={phoneRef}
              onChange={handleInputChange}
              placeholder="Example:0558540833"
            />
          </hgroup>
        </div>
        <button onClick={handlePayment} className={"secondary"}>
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
