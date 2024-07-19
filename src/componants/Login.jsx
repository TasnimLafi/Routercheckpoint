import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
  return (
    <div className='login'>
      
      <div><h1>login</h1>
        <input type="text" placeholder='username' />
        <input type="password" placeholder='password' />
        <button onClick={()=>navigate("/home")}>login</button>
      </div>
    </div>
  )
}

export default Login
