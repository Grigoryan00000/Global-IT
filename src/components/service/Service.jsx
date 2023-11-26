import React from 'react'
import Container from '../common/container/Container'
import ServiceItem from './service-item/ServiceItem'


import "./Service.scss"

const Service = () => {

  return (
    <div className='service'>
      <Container>
        <h1>Ծառայություններ</h1>
        <div className='service-items'>
          <ServiceItem/>
        </div>
      </Container>
    </div>
  )
}

export default Service