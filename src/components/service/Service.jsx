import React, { useEffect, useState } from 'react'
import Container from '../common/container/Container'
import ServiceItem from './service-item/ServiceItem'
import axios from 'axios'


import "./Service.scss"

const Service = () => {

  const [serviceData,setServiceData] = useState([]);

  useEffect(() => {
    async function getData() {
        try {
            const serviceData = await axios.get("https://globalitacademy.am/GIAcademyApi/service_items/");
            setServiceData(serviceData.data)
        } catch (error) {
            console.log("Error")
        }
    }
    getData();
}, []);  


  return (
    <div className='service'>
      <Container>
        <h1>Ծառայություններ</h1>
        <div className='service-items'>
          <ServiceItem serviceData={serviceData}/>
        </div>
      </Container>
    </div>
  )
}

export default Service