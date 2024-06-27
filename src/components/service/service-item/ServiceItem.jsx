import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { setShow } from '../../../redux/slices/ServiceSlice'




const ServiceItem = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()  
    const serviceData = useSelector((state) => state.service.services)

  return (
    serviceData.map(({id, title1, title2, color, bgi, icon}) => {
        return(
            <div className='service-item' key={id} style={{color}}>
                <div className='for-img'>
                    <img src={bgi} alt="" />
                    <div className='round' style={{border: `2px solid ${color}`}}>
                        <img src={icon} alt="" />
                    </div>
                </div>
                <div className='text-side'>
                    <h2>{title1}</h2>
                    <h2>{title2}</h2>
                </div>   
                <button onClick={() => {
                    dispatch(setShow(id))
                    navigate(`/service-info/${id}`)
                }}>Դիմել</button>
            </div>
        )
    })
    
  )
}

export default ServiceItem