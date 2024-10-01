import React, { useEffect } from 'react'
import { useState } from 'react'
import Container from '../../common/container/Container'

import logo from "../../../assets/treaning/training_program/logo.png"
import { IoIosArrowUp } from "react-icons/io";

import "./TrainingProgram.scss"
import { useSelector } from 'react-redux';

const TrainingProgram = ({programClassData, programData, programDescData}) => {

    const langState = useSelector((state) => state.lang.lang)
    
    const [openId, setOpenId] = useState(1)

    const handleDownload = () => {
        // Replace the path with the actual file path in the public folder
        const link = document.createElement('a');
        link.href = '/sample2.pdf'; // The file path, assuming it's in the public folder
        link.setAttribute('download', 'sample2.pdf'); // Set the file name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up the DOM
      };

  return (
    <div className='training-program'>
        <Container>
            <div className="training-program-title">
                <img src={logo} alt="" />
                <h1>{langState==="hy"?"Ուսումնական ծրագիր":langState==="ru"?"Учебный план":"Syllabus"}</h1>
            </div>
            <div className="training-program-parts">
                <div className='training-program-parts-first'>

                {programData.map(({id, name_hy, name_ru, name_en}) => {
                    return (
                            <div className="training-program-stages" key={id}>
                                <div  className='training-program-stages-stage' onClick={() => {
                                    if(openId!==id){
                                        setOpenId(id)
                                    }else{
                                        setOpenId(null)
                                    }
                                }}>
                                    <p>{langState==="hy"?name_hy:langState==="ru"?name_ru:name_en}</p>
                                    <div className={`toggle-button ${openId !== id ? 'open' : ''}`}>
                                        <IoIosArrowUp/>
                                    </div>
                                </div>
                                <div className='training-program-stages-classes'>
                                    {id === openId?
                                    (
                                        programClassData.map(({id, name_hy, name_ru, name_en, treaning_program}) => {
                                            if (treaning_program === openId) {
                                                return(
                                                    <div key={id} className="class">
                                                        <p>{langState==="hy"?name_hy:langState==="ru"?name_ru:name_en}</p>    
                                                    </div>
                                                )
                                            }else{
                                                return""
                                            }
                                        })       
                                    )
                                    :
                                    (
                                        ""
                                    )}
                                </div>

                            </div>
                    )
                })}
                <div className='training-program-button'>
                <p onClick={handleDownload}>{langState==="hy"?"Տեսնել փուլի բոլոր թեմաները":langState==="ru"?"Посмотреть все темы":"See all round topics"}</p>
            </div>
                </div>
                <div className="training-program-description">
                    {programDescData
                    .filter(({ treaning_program }) => treaning_program === openId)
                    .map(({ id, name_en, name_ru, name_hy, logo, text1_en, text1_ru, text1_hy, text2_en, text2_ru, text2_hy, text3_en, text3_ru, text3_hy, img,but_name_en,but_name_ru, but_name_hy}) => (
                    <div key={id} className="training-program-description-item">
                        <h1>{langState==="en"?name_en:langState==="ru"?name_ru:name_hy}</h1>
                        <img src={logo} alt="" />
                        <p className='first-text'>{langState==="en"?text1_en:langState==="ru"?text1_ru:text1_hy}</p>
                        <p>{langState==="en"?text2_en:langState==="ru"?text2_ru:text2_hy}</p>
                        <p>{langState==="en"?text3_en:langState==="ru"?text3_ru:text3_hy}</p>
                        <img className='image' src={img} alt="" />
                        <div className="button">
                            <p>{langState==="en"?but_name_en:langState==="ru"?but_name_ru:but_name_hy}</p>
                        </div>
                    </div>
                    ))}              
                </div>
            </div>
            
        </Container>
    </div>
  )
}

export default TrainingProgram