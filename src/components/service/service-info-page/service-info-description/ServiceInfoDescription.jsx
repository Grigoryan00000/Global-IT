import React from 'react'
import {useSelector} from "react-redux"
import Container from '../../../common/container/Container'

import "../ServiceInfo.scss"

const ServiceInfoDescription = () => {
    
    const serviceData = useSelector((state) => state.service.services)

    return (
      serviceData.map(({id, show, title1, title2, logo, icon, color, color2}) => {
          if (show) {
              return (
                  <div className='service-info' key={id}>
                      <Container>
                      <div className="service-info-description">
                          <div className="text-side">
                              <h1 style={{color: color2?color2:color}}>{title1} {title2}</h1>
                              <p>«Gloab IT» ըբգկերությունում առկան են երեք ֆակուլտետներ, վեբ ծրագրավորման, ծրագրավորման և մուլտիմեդիայի։ «ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ի հոկտեմբերի 19ին Գ. Քոսյանի կողմից: Մենք առաջարկում ենք ծրագրային տարատեսակ լուծումներ, որոնց նպատակն է մեծացնել ձեր բիզնեսի շահութաբերությունը և նպաստել աճին: Մեր ստեղծարար թիմը համատեղ ուժերով տալիս Է նորարարական լուծումներ, որոնք նպաստում են ձեր բիզնեսի թիրախային լսարանի ներգրավմանը:
                              «ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ի հոկտեմբերի 19ին Գ. Քոսյանի կողմից: Մենք առաջարկում ենք ծրագրային տարատեսակ լուծումներ, որոնց նպատակն է մեծացնել ձեր բիզնեսի շահութաբերությունը և նպաստել աճին: Մեր ստեղծարար թիմը համատեղ ուժերով տալիս Է նորարարական լուծումներ, որոնք նպաստում են ձեր բիզնեսի թիրախային լսարանի ներգրավմանը:
                              </p>
                              <div className='text-side-buttons'>
                                  <div className='button'>Հաշվել կայքի արժեքը</div>
                                  <div className='button'>Հաշվել կայքի արժեքը</div>
                              </div>
                          </div>
                          <div className='icon-side'>
                              <img src={logo} alt="" />
                              <div className="round" style={{border: `2px solid ${color}`}}>
                                  <img src={icon} alt="" />
                              </div>
                          </div>
                      </div>
                      </Container>
                  </div>
  
              )
          }else{
              return ""
          }
      })
    )
}

export default ServiceInfoDescription