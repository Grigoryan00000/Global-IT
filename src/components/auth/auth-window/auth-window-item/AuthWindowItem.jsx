import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveItem } from '../../../../redux/slices/AuthItemSlice'

import "./AuthWindowItem.scss"
import { useNavigate } from 'react-router'

const AuthWindowItem = () => {

    const authItemData = useSelector((state) => state.authItem.authItemData)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        authItemData.map(({title, id, active, icon}) => {
            return(
                <div className='AuthWindowItem' key={id} style={{background: active?"#864DE3":"",border: active?"1px solid #864DE3": "1px solid #FFF"}} onClick={() => {
                    dispatch(setActiveItem({id}))
                    // navigate(`/auth_item/${id}`)

                }}>
                    <img src={icon} alt="" />
                    <p>{title}</p>
                </div>
            )
        })
  )
}

export default AuthWindowItem