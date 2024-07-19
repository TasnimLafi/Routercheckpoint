
import './App.css';
import React, { useState } from 'react'
import Login from './componants/Login';
import { Route , Routes } from 'react-router-dom';
import  Home  from './componants/Home';


function App() {

  const [add, setadd] = useState(false)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Login/>} />
        <Route path='/home' element={<Home add={add} setadd={setadd}/>}/>
      </Routes>
    </div>
  );
}

export default App;
