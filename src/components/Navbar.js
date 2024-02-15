import React from 'react'
import './Navbar.css'
import { TbMoodSearch ,TbNotification } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";
// import { useState } from 'react';
const Navbar = () => {
//   const[isScrolled,setIsScrolled]= useState(false);


//   window.onscroll=()=>{
//     setIsScrolled(window.pageXOffset)
//   }


  return (
    // <div className={isScrolled ? 'navbar scrolled':'navbar'}>
    <div className='navbar'>
        <div className='container'>
            <div className='left'>
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=''></img>
           <span>Homepage</span>
           <span>Series</span>
           <span>Movies</span>
           <span>New and Popular</span>
           <span>My List</span>
           <span></span>
           
           
           
           
           
            </div>

            <div className='right'>
            <TbMoodSearch className='icon'/>
            <span>KID</span>
            <TbNotification className='icon'/>
            <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className='profile'>
          <IoMdArrowDropdown className='icon' ></IoMdArrowDropdown>
          <div className='options'>
            <span>Settings</span>
            <span>Logout</span>
          </div>
            </div></div>
        </div>
    </div>
  )
  }

export default Navbar