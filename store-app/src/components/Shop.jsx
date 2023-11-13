import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

//! Style
import "../style/Component.styled/Shop.scss";
//? Components
import Card from "./Card"; 

const Shop = ({ name }) => {
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const { pathname } = useLocation();
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]); 
  const totalPages = Math.ceil(data.length / itemsPerPage); 

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const visibleProducts = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ); 

  
  useEffect(() => {
    setData(
      products.filter((product) => {
        const ctg = pathname.substring(1);
        if (ctg === "Everything") return true; 
        return product.category === ctg;
      })
    );
  }, [products]);

  useEffect(() => {
    axios.get(`http://localhost:3009/getProducts`).then((res) => {
      setProducts(res.data); 
    });
   
  }, [pathname]);  
  
  return (
    <div className="shop">
      <div className="shop-head">
        <p><Link to="/home">Home</Link>/<span>{name}</span> </p>
        <h1>{name}</h1> 
        <p>{`Shwing ${data.length} results`}</p> 
      </div>

      <div className="shop-cards">
        {visibleProducts.map((items) => {
          const isPrice = items.price === 25.0;
          return <Card
          key={items.id}
          data={items}
          discount={isPrice&&items.discount}
          oldPrice={isPrice&&items.previousPrice}
        />
        } )}
      </div> 

      {totalPages > 1 && (
        <div className="btnnn">
          <button onClick={handlePrevPage} className="secondary" disabled={currentPage === 1}>
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="secondary"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          <select className="secondary" onChange={(e)=>setItemsPerPage(+e.target.value)} value={itemsPerPage} name="" id="" title="Select">
            <option value={3}>3</option>
            <option value={6}>6</option>
            <option value={9}>9</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Shop;
