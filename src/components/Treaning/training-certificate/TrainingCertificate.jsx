import React from 'react'
import Container from '../../common/container/Container';
import "./TrainingCertificate.scss"

import { useSelector } from 'react-redux';


const TrainingCertificate = ({certificateData}) => {

    const langState = useSelector((state) => state.lang.lang)

  return (

    <Container>
        <div className='training-certificate'>
            <div className='training-certificate-image'>
                <img src={certificateData.img} alt="" />
            </div>
            <div className="training-certificate-text-side">
                <h1>{langState==="hy"?certificateData.name_hy:langState==="ru"?certificateData.name_ru:certificateData.name_en}</h1>
                <p>{langState==="hy"?certificateData.text1_hy:langState==="ru"?certificateData.text1_ru:certificateData.text1_en}</p>
                <p>{langState==="hy"?certificateData.text2_hy:langState==="ru"?certificateData.text2_ru:certificateData.text2_en}</p>
            </div>
        </div>
    </Container>

  )
}

export default TrainingCertificate