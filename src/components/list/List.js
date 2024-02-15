import React from 'react'
import './List.css'
import{IoIosArrowForward , IoIosArrowBack} from 'react-icons/io'
import Listitem from '../listitem/Listitem'
import { useRef } from 'react'
import { useState } from 'react'
const List = () => {

  const[slideNumber,setSlideNumber]=useState(0);
  const[isMoved,setIsMoved]=useState(false);
  const listref= useRef()

const clickHandler =(direction)=>{
 setIsMoved(true)
let distance= listref.current.getBoundingClientRect().x-50
if(direction==='left'&& slideNumber>0){
  setSlideNumber(slideNumber-1)
  listref.current.style.transform =`translateX(${230 + distance}px)`
}
if(direction==='right'  && slideNumber<5 ){
  setSlideNumber(slideNumber+1)
  listref.current.style.transform =`translateX(${-230 + distance}px)`
}
}

  return (
    <div className='list'>

   <span className='listTitle'>Continue To Watch</span>
   
   <div className='wrapper'>

   <IoIosArrowBack  className='sliderarrowLeft' onClick={()=>clickHandler('left')}
    style={{display:!isMoved && "none"}}/>
   

   <div className='cont' ref={listref}>
    <Listitem index={0}></Listitem>
    <Listitem index={1}></Listitem>
    <Listitem index={2}></Listitem>
    <Listitem index={3}></Listitem>
    <Listitem index={4}></Listitem> 
    <Listitem index={5}></Listitem>
    <Listitem index={6}></Listitem>
    <Listitem index={7}></Listitem>
    <Listitem index={8}></Listitem>
    <Listitem index={9}></Listitem>
   </div>
   <IoIosArrowForward  className='sliderarrowRight' onClick={()=>clickHandler('right')}/>
    </div></div>
  )
}

export default List