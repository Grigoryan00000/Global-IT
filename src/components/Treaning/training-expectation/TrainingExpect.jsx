import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import Container from '../../common/container/Container'
import "./TrainingExpect.scss"

const TrainingExpect = ({expectationData}) => {

    const langState = useSelector((state) => state.lang.lang)

  return (
    <div className='expectations'>
                             
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

    </div>
  )
}

export default TrainingExpect