import React from 'react'
import './Listitem.css'
import {MdOutlineThumbDownOffAlt ,MdOutlineThumbUp } from 'react-icons/md'
import { FaPlay } from 'react-icons/fa'
import {IoMdAdd} from 'react-icons/io'
import {useState} from 'react'
const Listitem = ({index}) => {
  const[isHovered,setIsHovered]=useState(false);
  const trailer =
  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className='listitem' 
    style={{left : isHovered && index*225 - 50+ index*2.5}}
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}>
      <img src='https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee' alt='
      '></img>

      {isHovered && (
       <><video src={trailer} autoPlay={true} loop></video>
      <div className='itemInfo'>
      <div className='icons'>
      <FaPlay  className='icn'/>
      <IoMdAdd  className='icn'/>
      <MdOutlineThumbUp  className='icn'/>
      <MdOutlineThumbDownOffAlt className='icn' />
      </div>

      <div className='iteminfoTop'>
       <span>1 hour 14 minute</span>
       <span className='limit'> 16+</span>
       <span>1999</span>
      </div>

      <div className='desc'>
        jhdsh dskjchioo kjn kjn ndnnd  jnk jo i jn j 
        j bsdkjcb d djjjj ihkj ijInj jhdshh
   
      </div>
      <div className='genre'>Action</div>
      </div></> 
      )}
      
    </div>
  )
}

export default Listitem