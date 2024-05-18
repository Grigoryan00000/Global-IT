import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaCheck } from "react-icons/fa";
import { changeActive } from '../../../../redux/slices/ServiceSlice';
import Container from '../../../common/container/Container';


const WebsiteTypes = () => {

    const typesData = useSelector((state) => state.service.serviceTypes)
    const dispatch = useDispatch()

  return (
    <div className='website-types'>
        <Container>
        <h1>Կայքի տեսակները</h1>
        <div className="website-types-items">
            {typesData.map(({id, title, active}) => {
                return (
                    <div className='website-types-item' style={{backgroundColor: active?"#00A21A":"inherit"}} onClick={() => {
                        dispatch(changeActive(id))
                    }}>
                        <FaCheck style={{color: active?"#007C05":"#B1B2B1"}}/>
                        <p>{title}</p>
                    </div>    
                )
            })}
        </div>
        </Container>
    </div>
  )
}

export default WebsiteTypes