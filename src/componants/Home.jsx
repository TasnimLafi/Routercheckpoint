import React, { useState } from 'react'
import Navbar from './Navbar'
import List from './List'

const Home = ({setadd}) => {
    const [search, setsearch] = useState("")

  return (
    <div>
      <Navbar setsearch={setsearch} setadd={setadd}/>
      <List search={search} />
    </div>
  )
}

export default Home
