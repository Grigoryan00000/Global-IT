import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import Container from '../../common/container/Container'
import "./TrainingExpect.scss"

const TrainingExpect = ({expectationData}) => {

    const langState = useSelector((state) => state.lang.lang)

  return (
    <div className='expectations'>
        <svg className='up' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0B0316" fill-opacity="1" d="M0,160L48,154.7C96,149,192,139,288,117.3C384,96,480,64,576,53.3C672,43,768,53,864,74.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>                                
        <Container>
                <h1 style={{color: "#fff"}}>{expectationData?"Ինչ է ձեզ սպասվում": ""}</h1>
                <div className="expectations-items">
                    {expectationData.map(({id, img, name_en, name_ru, name_hy, text_en, text_ru, text_hy}) => {
                        return (                
                            <div className='expectations-item' key={id}>
                                
                                <div className="expectations-item-img">
                                    <img src={img} alt="" />
                                </div>
                                <h6>{langState==="hy"?name_hy:langState==="ru"?name_ru:name_en}</h6>
                                <p>{langState==="hy"?text_hy:langState==="ru"?text_ru:text_en}</p>
                            </div>
                        )
                    })}
                </div>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0B0316" fill-opacity="1" d="M0,160L48,154.7C96,149,192,139,288,117.3C384,96,480,64,576,53.3C672,43,768,53,864,74.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>  
    </div>
  )
}

export default TrainingExpect