import React from 'react'

import ServiceInfoDescription from './service-info-description/ServiceInfoDescription'
import WebsiteTypes from './website-types/WebsiteTypes'

import "./ServiceInfo.scss"
import HomeWorks from '../../home/home-works/HomeWorks'
const ServiceInfo = () => {


  

  return (
    <>
        <ServiceInfoDescription/>
        <WebsiteTypes/>
        {/* <LandingSite/> */}
        <HomeWorks/>
        
    </>
    )
}

export default ServiceInfo