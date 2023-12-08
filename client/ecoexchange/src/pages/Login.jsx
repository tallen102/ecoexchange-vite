import axios from 'axios'
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../css/Login.css'
const Login = () => {
  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  })
  const [err,setError] = useState(null)

  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))

  }
  const handleSubmit = async e =>{
    e.preventDefault()
    try{
    await axios.post("http://localhost:8800/server/auth/login", inputs,{withCredentials:true})
    navigate("/");
    }catch(err){
      setError(err.response.data);
    }
  }
  return (
    <div className='auth'>
      <div className="login-form">
      <h1>SIGN IN</h1>
      <form>
            <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
            <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
            <button onClick={handleSubmit}>Login</button>
            {err && <p>{err}</p>}
          <span>first time here? <Link to="/register">Register</Link></span>
        </form>
      </div>
      <div className='login-photo'></div>
    </div>
  );
};


export default Login