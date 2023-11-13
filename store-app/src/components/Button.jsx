import React from "react";
import { Link } from "react-router-dom";

//! Style
import "../style/Component.styled/Button.scss";

const Button = ({ className, text, onClick, icon, path }) => {
  return (
    <Link to={`${path}`}> 
      <button onClick={onClick} className={className} path={path}>
        {icon} {text}
      </button>
    </Link>
  );
};

export default Button;
