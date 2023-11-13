import React , { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//! Style
import "../style/Page.styled/ProductDetails.scss";
//? Components
import CardDetail from "../components/CardDetail";

const ProductDetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState({}); 
  useEffect(() => {
    axios.get(`http://localhost:3009/getProducts/${id}`).then((res) => {
      setCard(res.data); 
    });
  }, [id]);

  return (
    <div className="card-content">
      <CardDetail card={card} /> 
    </div>
  );
};

export default ProductDetails;
