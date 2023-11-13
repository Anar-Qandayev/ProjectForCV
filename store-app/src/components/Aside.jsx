import {React,useEffect,useState} from 'react';
import axios from 'axios'; 
import { FaAngleRight } from "react-icons/fa6";  
import { Link, useNavigate } from "react-router-dom";

//! Style
import "../style/Component.styled/Aside.scss"; 
//? Components
import Card from "./Card"; 

const Aside = () => {  
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); 
    useEffect(() => {
      axios.get(`http://localhost:3009/getProducts`).then((res) => {
        setProducts(res.data); 
      });
    }, []); 

  const [productName,setProductName]=useState(" ");      
  const showSearchProduct=()=>{   
    const filteredProducts = products.filter((item) => {
      return item.title.includes(productName);
    });
    
    filteredProducts.forEach((item) => {
      navigate(`/product-detail/${item.id}`);
    });
  }
  return (
    <div className='aside'>
        <div className='search-group'>
            <h3 style={{margin:"10px 0"}}>Filter by product</h3> 
            <hgroup>
              <input type="text" name="search" onChange={(e)=>setProductName(...[e.target.value])} placeholder='Search products...'/>
              <button className='secondary' onClick={showSearchProduct}><FaAngleRight/> </button>
            </hgroup>
        </div> 
        <div className='product-group'>
            <p><Link to="/Groceries">Groceries</Link> (11)</p>  
            <p><Link to="/Juice">Juice</Link> (6)</p> 
            <h1>Trending Products</h1>
            {products.map((items) => {
              if (items.type.includes("tProduct")) {
                if (items.price !== 25.00) {
                  return <Card key={items.id} data={items} />;
                } else {
                  return <Card key={items.id} data={items} discount={"Sale!"} oldPrice={"35.00"} />;
                }
              } 
        return null;
      })} 
        </div>    
    </div>
  )
}

export default Aside