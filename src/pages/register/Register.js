import React, { useRef, useState } from 'react'
import './register.css'
const Register = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const emailRef =useRef();
    const passwordRef=useRef();

    const clickHandler = ()=>{
        setEmail(emailRef.current.value)

    }
    const clickFinish = ()=>{
        setPassword(passwordRef.current.value)

    }
  return (
    <div className='register'>
    <div className='top'>
    <div className='wrapper'>
        <img className='logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt=''></img>
        <button className='Loginbutton'>Sign In </button>
    </div>
    </div>

    <div className='boxi'>
        <h1>Unlimited movies,TV shows and more</h1>
        <h2>Watch anywhere. Cancel any time</h2>

        <p>Ready to watch? Enter your personal details below to create account or restart your membership</p>
{
    !email ?(<div className='input'>
        <input type='email' placeholder='Enter your email' ref={emailRef}></input>
        <button className='registerButton' onClick={clickHandler}>Get Started</button>
         </div>):(<form className='input'>
        <input type='password' placeholder='Enter your password' ref={passwordRef}></input>
        <button className='registerButton' onClick={clickFinish}>Start</button>
        </form>)
}
       
    </div>


    </div>
  )
}

export default Register