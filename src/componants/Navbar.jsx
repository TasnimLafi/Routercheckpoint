import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = ({setsearch,setadd}) => {
    const navigate=useNavigate()
  return (
    <div className='nav'>

      <h1>MovieApp</h1>
      <div>

       <input onChange={(e)=>setsearch(e.target.value)} type="text" placeholder='search here'/>
      <button onClick={()=>setadd(true)}>AddMovie</button> 
      <button onClick={()=>navigate("/")}>logout</button>
      </div>
      
    </div>
  )
}

export default Navbar
