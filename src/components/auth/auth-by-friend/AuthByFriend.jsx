import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import SendReset from '../send-reset/SendReset'
import SuccessSignInUp from '../success/success-sign-in-up/SuccessSignInUp'

import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";

import "../Auth.scss"

const AuthByFriend = () => {

    const activeItem = useSelector(state => state.authItem.activeItem)
    const closeAuth = useSelector(state => state.auth.closeAuth) 
    const closeReg = useSelector(state => state.auth.closeReg) 
    const [openOptions, setOpenOptions] = useState(false)
    const [openOptions2, setOpenOptions2] = useState(false)

  return (
    <div className='auth-by-friend reg-form' style={{display: !closeReg&&closeAuth&&activeItem===5?"flex":"none"}}>
        <SuccessSignInUp/>
        <div className='form'>
            <input type="text" placeholder='Ընկերության անվանումը (ՍՊԸ)'/>
            <div className='friend-director form-section'>
              <h2>Ընկերության Տնօրեն</h2>
              <input type="text" placeholder='Անուն Ազգանուն Հայրանուն'/>
              <input type="telephone" placeholder='Հեռախոսահամար'/>
              <input type="email" placeholder='E-mail'/>
            </div>
            <div className='friend-director form-section'>
              <h2>Կցել պետ ռեգիստրի վկայական</h2>
              <input type="text" placeholder='ՀՎՀՀ'/>
              <input type="text" placeholder='Ընկերության հասցեն'/>
              <input type="telephone" placeholder='Հեռախոսահամար'/>
              <input type="email" placeholder='E-mail'/>
            </div>
            <div className="select-option">
                <div className='select' onClick={() => {
                    setOpenOptions(!openOptions)
                }}>
                    <p>Գործունեութայն ոլորտը</p>
                    {openOptions?<IoChevronUpOutline/>:<IoChevronDownOutline/>}
                </div>
                <div className='options' style={{display: openOptions?"flex":"none"}}>
                    <div><p>Տեղեկատվական տեխնոլոգիաներ</p></div>
                    <div><p>Տուրիստական կազմակերպություն</p></div>
                    <div><p>Մշակութային կազմակերպություն</p></div>
                    <div><p>Հասարակական կազմակերպություն (բարեգործական)</p></div>
                    <div><p>Առևտուր, վաճառք</p></div>
                </div>
            </div>
            <input type="text" placeholder='Ծառայություն'/>
            <div className="select-option">
                <div className='select' onClick={() => {
                    setOpenOptions2(!openOptions2)
                }}>
                    <p>Համագործակցության նպատակը</p>
                    {openOptions?<IoChevronUpOutline/>:<IoChevronDownOutline/>}
                </div>
                <div className='options' style={{display: openOptions2?"flex":"none"}}>
                    <div><p>Պրակտիկայի հնարավորություն փոխադարձ</p></div>
                    <div><p>Աշխատանքի տրամադրում</p></div>
                    <div><p>Ծառայությունների պատվիրում</p></div>
                    <div><p>Գովազդ և առաջխաղացում</p></div>
                    <div><p>Այլ առաջարկ</p></div>
                </div>
            </div>
            <input type="password" placeholder='Գաղտնաբառ'/>
            <input type="password" placeholder='Կրկնել գաղտնաբառը'/>
        </div>
        <SendReset/>
    </div>
  )
}

export default AuthByFriend;