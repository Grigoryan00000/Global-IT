import React from 'react'
import authImg from "../../assets/auth/OBJECTS.png"

import "./Auth.scss"
import AuthWindow from './auth-window/AuthWindow'

const Auth = () => {
  return (
    <>
      <div className='auth'>
        <div className='auth-text'>
          <h1>Դարձի`ր ծրագրավորող</h1>
        </div>
        <div className="auth-img">
          <img src={authImg} alt="" />
        </div>
      </div>
      <AuthWindow/>
    </>
    
  )
}

export default Auth