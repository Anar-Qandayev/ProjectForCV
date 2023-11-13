import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate=useNavigate()
    const [username ,setUserName]=useState();
    const [email ,setEmail]=useState();
    const [password ,setPassword]=useState();

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3009/register",{username,email,password}).then(result => console.log(result)
        ,navigate('/login')).catch(err=>console.log(err))
    }
  return (
    <div className='register'>
        <form action="/register" onSubmit={handleSubmit}>
            <h1>SIGN UP</h1>
            <hgroup>
                <label htmlFor="name">First name</label>
                <input type="text" id='name' onChange={(e)=>setUserName(e.target.value)}/>
            </hgroup>
            <hgroup>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' onChange={(e)=>setEmail(e.target.value)}/>
            </hgroup>
            <hgroup>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' onChange={(e)=>setPassword(e.target.value)}/>
            </hgroup>
            <button type='submit' className='secondary'>Submit</button>
        </form>
    </div>
  )
}

export default Register