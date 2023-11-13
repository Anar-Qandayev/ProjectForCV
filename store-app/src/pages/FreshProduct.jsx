import React from 'react'
import { freshdata } from "../data/freshcard";
// Icons
import i_leaf_hero from "../img/basil-leaf.png";
//! Style
import "../style/Page.styled/FreshProduct.scss";
//? Components
import CardFP from  "../components/CardFP";

const FreshProduct = () => {
  return (
    <div className='freshProduct'> 
      <img src={i_leaf_hero} alt="base-leaf" className="base-leaf" />
      {
          freshdata.map((items)=>{
            if(items.type==="freshProduct"){
              return <CardFP key={items.id} fpData={items}/>
            }
          })
          }
    </div>
  )
}

export default FreshProduct