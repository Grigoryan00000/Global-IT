import React from 'react'
import { useSelector } from 'react-redux'
import logo from "../../../../assets/auth/logogit.png"
import SignInUp from '../../sign-in-up/signInUp'

const SuccessSignInUp = ({handleSubmit}) => {

    const data = useSelector((state) => state.authItem.authItemData)

  return (
    data.map((item) => {
        if(item.active){
            return (
                <div className='success-sign-in-up' key={item.id} >
                    <div className='logo'>
                        <img src={logo} alt="" />
                        <h1>GLOBAL</h1>
                        <h1>IT</h1>
                    </div>
                      <SignInUp/>
                    <div className='text-side'>
                        <p>Գրանցվել որպես</p>
                        <p>{item.title}</p>
                    </div>
                </div>
            )
        } else {
            return null
        }
    })
  )
}

export default SuccessSignInUp