import React, { useEffect, useState } from 'react'
import Container from "../../common/container/Container"

import "./TreaningSlider.scss"
import { useSelector } from 'react-redux';
import TrainingReg from '../training-registration/TrainingReg';


const TreaningSlider = ({sliderData, currentId, priceLang, priceType, priceConnect}) => {

    const langState = useSelector((state) => state.lang.lang);
    const [open, setOpen] = useState(false)
    const [openForm, setOpenForm] = useState(false)


    useEffect(() => {
      if (open || openForm) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = 'auto';
      }
  }, [open, openForm]);


  return (
    <div className='treaning-slider'>
       
       {sliderData.map(({id, faculties_Items, name_hy, name_ru, name_en, but_name_hy, but_name_ru, but_name_en, text_en, text_ru, text_hy,img}) => {
          if(faculties_Items === currentId) {
            return (
              <div key={id}>
                <Container>
                  <div className="treaning-slider-title">
                    <h1 style={{color: "white"}}>{langState==="hy"?name_hy:langState==="ru"?name_ru:name_en}</h1>
                    <p className='p'>{langState==="hy"?text_hy:langState==="ru"?text_ru:text_en}</p>
                    <div className="treaning-slider-title-button">
                      <button onClick={(() => {
                        setOpen(true)
                      })}>{langState==="hy"?but_name_hy:langState==="en"?but_name_en:but_name_ru}</button>
                    </div>
                  </div>
                  <div className="treaning-slider-img" >
                    <img src={img} alt="" />
                  </div>
                </Container>
              </div>
            );
          }
          return null; 
        })}


      <TrainingReg open={open} setOpen={setOpen} openForm={openForm} setOpenForm={setOpenForm} priceLang={priceLang} priceType={priceType} priceConnect={priceConnect}/>

    </div>
  )
}

export default TreaningSlider