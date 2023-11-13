import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

//! Style
import "../style/Component.styled/CardFP.scss";

//? Components
import Button2  from './Button2';

const CardFP = ({fpData}) => {
    const {image,text,description}=fpData;

  return (
    <div className='fp-card'>
        <div className='fp-text'>
            <h2>{text}</h2>
            <p>{description}</p>
            <Button2 
              path='/Everything'
              className="secondary"
              text="SHOP NOW" 
              icon={<FaArrowRightLong/>} 
            />
        </div>
        <img src={image} alt="bg_image" />
    </div>
  )
}

export default CardFP;