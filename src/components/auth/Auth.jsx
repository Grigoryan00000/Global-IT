import React from 'react'
import authImg from "../../assets/auth/OBJECTS.png"

import "./Auth.scss"
import AuthWindow from './auth-window/AuthWindow'
import { useSelector } from 'react-redux'



const Auth = () => {

  const closeAuth = useSelector((state) => state.auth.closeAuth)
  const closeReg = useSelector((state) => state.auth.closeReg)

  return (
    <>
      <div className='auth' style={{ display: closeReg || closeAuth ? "none" : "flex" }}>
        <div className='auth-text'>
          <h1>Դարձի`ր ծրագրավորող</h1>
        </div>
        <div className="auth-img">
          <img src={authImg} alt="" />
        </div>
      </div>
      <AuthWindow />
    </>

  )
}

export default Auth