import React from 'react'
import SuccessSignInUp from "../success/success-sign-in-up/SuccessSignInUp"
import SendReset from "../send-reset/SendReset"
import { useSelector } from 'react-redux'

import "../Auth.scss"

const AuthByTeacher = () => {

    const activeItem = useSelector((state) => state.authItem.activeItem)
    const closeAuth = useSelector(state => state.auth.closeAuth) 
    const closeReg = useSelector(state => state.auth.closeReg) 



  return (
    <div className='auth-by-teacher reg-form' style={{display: !closeReg&&closeAuth&&activeItem===3?"flex":"none"}}>
        <SuccessSignInUp/>
        <div className='form'>
            <input type="text" placeholder='Անուն'/>
            <input type="text" placeholder='Ազգանուն'/>
            <input type="telephone" placeholder='Հեռախոսահամար'/>
            <input type="email" placeholder='E-mail'/>
            <input type="password" placeholder='Գաղտնաբառ'/>
            <input type="password" placeholder='Գաղտնաբառի կրկնություն'/>
        </div>
        <SendReset/>
    </div>
  )
}

export default AuthByTeacher;