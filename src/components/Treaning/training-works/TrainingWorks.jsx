import React from 'react'
import { useSelector } from 'react-redux';
import Container from '../../common/container/Container';
import "./TrainingWorks.scss"

const TrainingWorks = ({worksData}) => {

    const langState = useSelector((state) => state.lang.lang)

  return (
    
    <Container>
        <div className='training-works'>
            <div className="training-works-title">
                <h2>{langState==="en"?"The works of our students":langState==="ru"?"Работы наших учеников":"Մեր ուսանողների աշխատանքները"}</h2>
                <p>{langState==="en"?"At the end of the course, our students have works that they put in their portfolio":langState==="ru"?"По окончанию курса у наших студентов остаются работы, которые они помещают в свое портфолио.":"Մեր ուսանողները կուրսի ավարտից հետո ունենում են աշխատանքներ որոնք նրանք տեղադրել են իրենց պարտֆոլիույում"}</p>
            </div>
            <div className="training-works-projects">
                {worksData.map(({id, pr_name_en,pr_name_ru,pr_name_hy, st_name_en,st_name_ru, st_name_hy, img, date}) => {
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