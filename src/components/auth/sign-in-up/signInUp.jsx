import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActive } from '../../../redux/slices/authSlice'

import "../Auth.scss"

const SignInUp = () => {

    const authData = useSelector((state) => state.auth.auth)
    const dispatch = useDispatch()

    return (
        <div className='sign-in-up'>
            {authData.map((item) => {
                return (
                    <div key={item.id} style={{ backgroundColor: item.active ? "#442697" : "inherit", color: item.active ? "#fff" : "#000" }} onClick={() => {
                        dispatch(setActive({ id: item.id }))
                    }}>
                        <p>{item.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SignInUp;