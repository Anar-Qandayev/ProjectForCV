import React, { useState } from "react";
import { FaCaretRight,FaCaretUp } from "react-icons/fa";

//! Style
import "../style/Component.styled/ToggleComponent.scss"; 

const ToggleComponent = ({text,question}) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleText = () => {
    setIsTextVisible(!isTextVisible);
  };
  
  return (
    <div className="toggle-container">
      <div className="icon" onClick={toggleText}>
        {question}{isTextVisible ?  <FaCaretUp/> : <FaCaretRight/>}
      </div>
      {isTextVisible && <div className="text">{text}</div>}
    </div>
  );
};

export default ToggleComponent;
