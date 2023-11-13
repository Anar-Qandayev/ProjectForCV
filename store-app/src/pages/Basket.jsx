import { useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
import { useDispatch,  useSelector } from 'react-redux';  
import { deleteToBasket } from '../redux/slices/addToBasketSlice'; 
import { addToBasket, removeBasket } from '../redux/slices/addToBasketSlice';
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

//! Style
import "../style/Page.styled/Basket.scss";
//? Components
import azn  from "../img/azn.png";  

const Basket = () => { 
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const [commonPrice, setCommonPrice] = useState(0);
    const basketItems=useSelector((state)=>state.basket);  
    const token = localStorage.getItem("token");
    const decoded = token ? jwt_decode(token) : null;
    const username = decoded ? decoded.sub : null;

    useEffect(()=>{
        let price = 0;
        basketItems.map(item=>price += (item.price*item.count))
        setCommonPrice(price)
    },[basketItems]);
    
    const increment=(id)=>{
        const newData = basketItems.map((item) => {
            console.log(item)
            if (item.id === id) {
                return {...item, count:item.count+1};
            }
            return item;
        })
        dispatch(addToBasket([...newData]));
    }  

    const decrement=(id)=>{
        const newData = basketItems.map((item) => {
            console.log(item)
            if (item.id === id && item.count>1) {
                return {...item, count:item.count-1}; 
            }
            return item;
        })
        dispatch(addToBasket([...newData]));
    }

    const onHandlePayment = () => {
        if (!username) {
            Swal.fire({
                title: 'Did you register or login?',
                showDenyButton: true,
                denyButtonText: "No, I'm not registered",
            }).then((result) => {
                if (result.isDenied) {
                    navigate('/register');
                }
            });
        } else {
            navigate('/payment');
        }
    }

return (
    <div className='basket'> 
        <h2>Basket</h2>
        <div className='basket-product'>
            {basketItems.length===0?(
                <p>There are no selected products</p>
                ):(
                    <ul>
                        {basketItems.map((data)=>(
                            <li key={data.id}>
                                <img src={data.image} alt="" /> 
                                <h3>{data.title} </h3>
                                <h3><img src={azn} alt='img'/>{data.price} </h3>
                                <div>Count: {data.count} <div>  <button disabled={data.count===1} onClick={()=>decrement(data.id)} className='secondary'>-</button><button className='secondary' onClick={()=>increment(data.id)}>+</button></div></div>
                                <button className='secondary' onClick={()=>dispatch(deleteToBasket(data.id))}>Delete</button>
                                </li>
                            ))}
                    </ul>
                )
            }
        </div>
        <div className='btn'>
            <hgroup>
                <h2>Total:<img src={azn} alt="" />{commonPrice.toFixed(2)}</h2>
                <button className="secondary" onClick={onHandlePayment}>PROCEED TO CHECKOUT</button>
            </hgroup> 
            <button className='secondary' onClick={()=>dispatch(removeBasket())}>Clear Basket</button>
        </div>
    </div>
  )
}

export default Basket; 