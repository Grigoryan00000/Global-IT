import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import SendReset from '../send-reset/SendReset'
import SuccessSignInUp from '../success/success-sign-in-up/SuccessSignInUp'

import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";

import "../Auth.scss"

const AuthBySchool = () => {

    const activeItem = useSelector(state => state.authItem.activeItem)
    const closeAuth = useSelector(state => state.auth.closeAuth) 
    const closeReg = useSelector(state => state.auth.closeReg) 
    const [openOptions, setOpenOptions] = useState(false)

  return (
    <div className='auth-by-school reg-form' style={{display: !closeReg&&closeAuth&&activeItem===2?"flex":"none"}}>
        <SuccessSignInUp/>
        <div className='form'>
            <input type="text" placeholder='Ուս․ հաստատության անվանումը'/>
            <div className='school-director form-section'>
              <h2>Ուս․ հաստատության Տնօրեն</h2>
              <input type="text" placeholder='Անուն Ազգանուն Հայրանուն'/>
              <input type="telephone" placeholder='Հեռախոսահամար'/>
              <input type="email" placeholder='E-mail'/>
            </div>
            <input type="text" placeholder='Ուս․ հաստատության հասցեն'/>
            <input type="telephone" placeholder='Ուս․ հաստատության հեռախոսահամարը'/>
            <input type="email" placeholder='Ուս․ հաստատության էլ․ փոստ'/>
            <p>Ուս․ հաստատության տեսակը (պետական և ոչ պետական)</p>
            <input type="text" placeholder='Տեսակը'/>
            <input type="text" placeholder='Ուսանողների քանակը'/>
            <input type="text" placeholder='Աշխատակազմի քանակը'/>
            <div className="select-option">
                <div className='select' onClick={() => {
                    setOpenOptions(!openOptions)
                }}>
                    <p>Համագործակցության նպատակը</p>
                    {openOptions?<IoChevronUpOutline/>:<IoChevronDownOutline/>}
                </div>
                <div className='options' style={{display: openOptions?"flex":"none"}}>
                    <div><p>Ուսուցում</p></div>
                    <div><p>Պրակտիկայի հնարավորություն փոխադարձ</p></div>
                    <div><p>Աշխատանքի տրամադրում</p></div>
                    <div><p>Ծառայությունների պատվիրում</p></div>
                    <div><p>Գովազդ և առաջխաղացում</p></div>
                    <div><p>Այլ առաջարկ</p></div>
                </div>
            </div>
        </div>
        <SendReset/>
    </div>
  )
}

export default AuthBySchool