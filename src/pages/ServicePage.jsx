import React from 'react'
import Service from '../components/service/Service'
import Layout from '../layout/Layout'

import "../components/service/Service.scss"

const ServicePage = () => {
  return (
    <div className='service-page'>
      <Layout>
        <Service/>
      </Layout>
    </div>
  )
}

export default ServicePage;