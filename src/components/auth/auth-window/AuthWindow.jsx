import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import logo from "../../../assets/auth/logo.png"
import { setActive } from '../../../redux/slices/authSlice';
import AuthWindowItem from './auth-window-item/AuthWindowItem';
import closeBtn from "../../../assets/auth/close.png"


import "./AuthWindow.scss"

const AuthWindow = () => {

    const authData = useSelector((state) => state.auth.auth);
    const dispatch = useDispatch()
    const [open, setOpen] = useState(true)

  return (
    <div className='auth-window' style={{display: open?"flex":"none"}}>
        <div className='close-button'  onClick={() => {
            setOpen((prev) => {
                return !prev
            })
        }}>
            <img src={closeBtn} alt="" />
        </div>
        <img src={logo} alt="" />
        <div className='log-in_sign-in' >
            {authData.map((item) => {
                return (
                    <div key={item.id} style={{backgroundColor: item.active?"#864DE3":"inherit"}} onClick={() => {
                        dispatch(setActive({id: item.id}))
                    }}>
                        <p>{item.title}</p>
                    </div>
                )
            })}
        </div>
        <h4>Գրանցվել որպես</h4>
        <div className='auth-window-items'>
            <AuthWindowItem/>
        </div>
        <div className='auth-window-footer'>
            <button className='forward'>Առաջ</button>
        </div>
    </div>
  )
}

export default AuthWindow