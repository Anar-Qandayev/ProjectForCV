import React from 'react';
import { useNavigate } from "react-router-dom";
//! Style
import "../style/Page.styled/Dashboard.scss";
//? Pages
import Home from "./Home";

export const Dashboard = ({setUser}) => {
  const navigate = useNavigate();
  return (
    <div className='dashboard'>
      <button onClick={()=>{ navigate("/login"); setUser(false); sessionStorage.removeItem("token");}}>
        Logout
      </button>
      <Home/>
    </div>
  )
}
export default Dashboard;