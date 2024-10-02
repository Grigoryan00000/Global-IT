import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Container from '../../common/container/Container';
import "./TrainingWorks.scss"

const TrainingWorks = ({worksData, currentId}) => {

    const [baseName,setBaseName] = useState("")
    const [baseText,setBaseText] = useState("")
    

    const langState = useSelector((state) => state.lang.lang)

  return (
    
    <Container>
        <div className='training-works'>
            <div className="training-works-title">
                <h2>{baseName}</h2>
                <p>{baseText}</p>
            </div>
            <div className="training-works-projects">
                {worksData.map(({id, pr_name_en,pr_name_ru,pr_name_hy, st_name_en,st_name_ru, st_name_hy, img, date, name_hy, name_ru, name_en, text_hy, text_ru, text_en}) => {
                    if(!baseName&&!baseText){
                        langState==="hy"?setBaseName(name_hy):langState==="ru"?setBaseName(name_ru):setBaseName(name_en)
                        langState==="hy"?setBaseText(text_hy):langState==="ru"?setBaseText(text_ru):setBaseText(text_en)
                    }
                    return(
                        <div className='training-works-projects-item' key={id}>
                            <h4>{langState==="en"?pr_name_en:langState==="ru"?pr_name_ru:pr_name_hy}</h4>
                            <p>{langState==="en"?st_name_en:langState==="ru"?st_name_ru:st_name_hy}</p>
                            <p>{date}</p>
                            <div className="training-works-projects-item-img">
                                <img src={img} alt=""/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </Container>
  )
}

export default TrainingWorks