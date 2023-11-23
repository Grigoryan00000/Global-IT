import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCloseReg } from '../../../redux/slices/authSlice'

import "../Auth.scss"

const SendReset = () => {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.authItem.authItemData)
    

  return (
    data.map((item) => {
        if(item.active){
            return (
                <div className='send-reset' key={item.id} >
                    <div className='send' onClick={() => {
                        dispatch(setCloseReg())
                    }}>
                        <p>Գրանցվել որպես {item.title}</p>
                    </div>
                    <div className="reset">
                        <p>Չեղարկել</p>
                    </div>
                </div>
            )
        } else {
            return null
        }
    })
  )
}

export default SendReset