import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import logo from "../../../assets/auth/logo.png"
import { setCloseAuth, setCloseAuthWindow } from '../../../redux/slices/authSlice';
import AuthWindowItem from './auth-window-item/AuthWindowItem';
import closeBtn from "../../../assets/auth/close.png"

import SignInUp from '../sign-in-up/signInUp';


import "./AuthWindow.scss"

const AuthWindow = () => {

    const dispatch = useDispatch()
    const closeAuth = useSelector(state => state.auth.closeAuth) 
    const closeAuthWindow = useSelector((state) => state.auth.closeAuthWindow)

    

  return (
    <div className='auth-window' style={{display: !closeAuth&&closeAuthWindow?"flex":"none"}}>
        <div className='close-button'  onClick={() => {
            dispatch(setCloseAuthWindow())
        }}>
            <img src={closeBtn} alt="" />
        </div>
        <img src={logo} alt="" />
        <SignInUp/>
        <h4>Գրանցվել որպես</h4>
        <div className='auth-window-items'>
            <AuthWindowItem/>
        </div>
        <div className='auth-window-footer'>
            <button className='forward' onClick={() => {
                dispatch(setCloseAuth())
            }}>Առաջ</button>
        </div>
    </div>
  )
}

export default AuthWindow