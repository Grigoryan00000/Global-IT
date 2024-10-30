import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { changeActiveItem } from '../../../redux/slices/ServiceSlice'




const ServiceItem = ({serviceData}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()  


  return (
    serviceData.map(({id, back_img, logo, ser_name_hy, ser_mame_ru, ser_name_en, but_name_hy, but_name_ru, but_name_en }) => {
        return(
            <div className='service-item' key={id} >
                <div className='for-img'>
                    <img src={back_img} alt="" />
                    <div className='round' style={{border: `2px solid `}}>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className='text-side'>
                    <h2>{ser_name_hy}</h2>
                </div>   
                <button onClick={() => {
                    dispatch(changeActiveItem(id))  
                    navigate("/service-info")
                }}>{but_name_hy}</button>
                    {/* dispatch(setShow(id))
                    navigate(`/service-info/${id}`)
                }}>Դիմել</button> */}
            </div>
        )
    })
    
  )
}

export default ServiceItem