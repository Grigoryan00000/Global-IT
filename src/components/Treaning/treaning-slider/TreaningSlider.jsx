import React, { useEffect, useState } from 'react'

import { Typewriter } from 'react-simple-typewriter';
import Container from "../../common/container/Container"
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./TreaningSlider.scss"
import { useSelector } from 'react-redux';
import TrainingReg from '../training-registration/TrainingReg';

const TreaningSlider = ({sliderData}) => {

    const langState = useSelector((state) => state.lang.lang);
    const [open, setOpen] = useState(false)

    useEffect(() => {
      if (open) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = 'auto';
      }
  }, [open]);

    const treaningTyper = sliderData;
    const titlesArr= []
    if(langState === "hy"){
      treaningTyper.forEach(({name_hy}) => {
        titlesArr.push(name_hy)
      })
    }else if(langState === "ru"){
      treaningTyper.forEach(({name_ru}) => {
        titlesArr.push(name_ru)
      })
    }else{
      treaningTyper.forEach(({name_en}) => {
        titlesArr.push(name_en)
      })
    }
  return (
    <div className='treaning-slider'>
        <Swiper
        modules={[Navigation, Pagination , A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination = {{clickable: true}}
        loop={true}
        grabCursor
        autoplay={{
          delay: 3000000,
        }}
      >
        {sliderData.map(({id, name, name_hy, name_ru, name_en, but_name, but_name_hy, but_name_ru, but_name_en, text_en, text_ru, text_hy,img}) => {
            return(
              <SwiperSlide key={id}>
                <Container>
                <div className="treaning-slider-title">
                  <h1>
                    <Typewriter
                        words={titlesArr}
                        loop={5}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </h1>
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
              </SwiperSlide>
            )
        } )}
      </Swiper>
      <TrainingReg open={open} setOpen={setOpen}/>
    </div>
  )
}

export default TreaningSlider