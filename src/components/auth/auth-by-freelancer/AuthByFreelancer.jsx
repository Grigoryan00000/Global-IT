import React from 'react'
import SuccessSignInUp from "../success/success-sign-in-up/SuccessSignInUp"
import SendReset from "../send-reset/SendReset"
import { useSelector } from 'react-redux'
import { useState } from 'react'

import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";

import "../Auth.scss"

const AuthByFreelancer = () => {

    const activeItem = useSelector((state) => state.authItem.activeItem)
    const closeAuth = useSelector(state => state.auth.closeAuth) 
    const closeReg = useSelector(state => state.auth.closeReg) 
    const [openOptions, setOpenOptions] = useState(false)

  return (
    <div className='auth-by-freelancer reg-form' style={{display: !closeReg&&closeAuth&&activeItem===4?"flex":"none"}}>
        <SuccessSignInUp/>
        <div className='form'>
            <input type="text" placeholder='Անուն'/>
            <input type="text" placeholder='Ազգանուն'/>
            <input type="telephone" placeholder='Հեռախոսահամար'/>
            <input type="email" placeholder='E-mail'/>
            <input type="password" placeholder='Գաղտնաբառ'/>
            <div className="select-option">
                <div className='select' onClick={() => {
                    setOpenOptions(!openOptions)
                }}>
                    <p>Մասնագիտություն</p>
                    {openOptions?<IoChevronUpOutline/>:<IoChevronDownOutline/>}
                </div>
                <div className='options' style={{display: openOptions?"flex":"none"}}>
                    <div>Front-end developer</div>
                    <div>Back-end developer</div>
                    <div>CMS</div>
                    <div>Web design</div>
                </div>
            </div>
        </div>
        <SendReset/>
    </div>
  )
}

export default AuthByFreelancer
