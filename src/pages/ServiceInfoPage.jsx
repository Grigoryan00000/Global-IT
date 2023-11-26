import React from 'react'

import Layout from '../layout/Layout'
import ServiceInfo from '../components/service/service-info-page/ServiceInfo'


const ServiceInfoPage = () => {
  return (
    <div className='service-info-page'>
      <Layout>
        <ServiceInfo/>
      </Layout>
    </div>
  )
}

export default ServiceInfoPage;