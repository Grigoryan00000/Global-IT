import React from 'react'

import ServiceInfoDescription from './service-info-description/ServiceInfoDescription'
import WebsiteTypes from './website-types/WebsiteTypes'

import "./ServiceInfo.scss"
import LandingSite from './website-types/landing-site/LandingSite'
import HomeWorks from '../../home/home-works/HomeWorks'
import Portfolio from './Portfolio'
const ServiceInfo = () => {

  

  return (
    <>
        <ServiceInfoDescription/>
        <WebsiteTypes/>
        {/* <LandingSite/> */}
        <Portfolio/>
    </>
    )
}

export default ServiceInfo