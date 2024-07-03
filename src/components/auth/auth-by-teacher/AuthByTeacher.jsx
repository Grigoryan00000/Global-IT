import React, { useState } from 'react'
import SuccessSignInUp from "../success/success-sign-in-up/SuccessSignInUp"
import SendReset from "../send-reset/SendReset"
import { useSelector } from 'react-redux'

import axios from "axios"

import "../Auth.scss"

const AuthByTeacher = () => {

  const activeItem = useSelector((state) => state.authItem.activeItem)
  const closeAuth = useSelector(state => state.auth.closeAuth) 
  const closeReg = useSelector(state => state.auth.closeReg) 

  const [data, setData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    profession: 'teacher'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://globalitacademy.am/register/", data);
      console.log('Response:', response.data);
      setData(response.data)
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className='auth-by-teacher reg-form' style={{display: !closeReg&&closeAuth&&activeItem===3?"flex":"none"}}>
        <SuccessSignInUp/>
        <form className='form' onSubmit={handleSubmit}>
            <input type="text" placeholder='Անուն' name="username" value={data.username || ''} onChange={handleChange}/>
            <input type="text" placeholder='Ազգանուն'/>
            <input type="telephone" placeholder='Հեռախոսահամար' name="phone" value={data.phone || ''} onChange={handleChange}/>
            <input type="email" placeholder='E-mail' name="email" value={data.email || ''} onChange={handleChange}/>
            <input type="password" placeholder='Գաղտնաբառ' name="password" value={data.password || ''} onChange={handleChange}/>
            <input type="password" placeholder='Գաղտնաբառի կրկնություն' name="passwordConfirm"/>
            <button>send</button>
        </form>
        <SendReset/>
    </div>
  )
}

export default AuthByTeacher;