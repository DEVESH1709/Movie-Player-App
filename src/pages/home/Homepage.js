import React from 'react'
import './Homepage.css'
import Navbar from '../../components/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
const Homepage = () => {
  return (
    <div className='home'>
      <Navbar ></Navbar>
    
          <Featured></Featured>

          <List></List>
          <List></List>
          <List></List>
          

    </div>
  )
}

export default Homepage