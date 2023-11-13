import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../style/Page.styled/Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:3009/login`, { username, password }).then((res) => {
      if (res.data.token) {
        // Save the token to localStorage
        localStorage.setItem("token", res.data.token);
        
        // Redirect to the desired page (e.g., "/basket")
        navigate('/basket');
      } else {
        // Handle the case when no token is received
        console.log("No token received from the server.");
      }
    }).catch(err => {
      console.log(err);
      // Handle other errors as needed
    });
  }

  return (
    <div className='login'>
      <h1>LOGIN</h1>
      <form onSubmit={handleSumbit}>
        <input type="text" name="username" onChange={(e) => setUserName(e.target.value)} placeholder='...User Name' />
        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder='...User Password' />
        <button type='submit' className='secondary'>Login</button>
      </form>
    </div>
  )
}

export default Login;
