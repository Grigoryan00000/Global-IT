import React, { useState } from 'react'
import "./HomeSlider.scss"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CONFIG } from '../../../config';
import { Typewriter } from 'react-simple-typewriter';
import Container from "../../common/container/Container"
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSelector } from 'react-redux';



const HomeSlider = ({sliderData}) => {
  
  const langState = useSelector((state) => state.lang.lang);

  const homeTyper = sliderData;
  const titlesArr= []
  if(langState === "hy"){
    homeTyper.forEach(({name_hy}) => {
      titlesArr.push(name_hy)
    })
  }else if(langState === "ru"){
    homeTyper.forEach(({name_ru}) => {
      titlesArr.push(name_ru)
    })
  }else{
    homeTyper.forEach(({name_en}) => {
      titlesArr.push(name_en)
    })
  }




  return (
    <div className='home-slider'>
      <Swiper
        modules={[Navigation, Pagination , A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination = {{clickable: true}}
        loop={true}
        grabCursor
        autoplay={{
          delay: 500000,
        }}
      >
        {sliderData.map(({id, name, name_hy, name_ru, name_en, but_name1, but_name1_hy, but_name1_ru, but_name1_en, but_name2, but_name2_hy, but_name2_ru, but_name2_en, call_logo, img}) => {
            return(
              <SwiperSlide key={id}>
                <Container>
                <div className="home-slider-title">
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
                    <div className="home-slider-title-button">
                      <button>{langState==="hy"?but_name1_hy:langState==="en"?but_name1_en:but_name1_ru}</button>
                      <button>{langState==="hy"?but_name2_hy:langState==="en"?but_name2_en:but_name2_ru}</button>
                    </div>
                </div>
                <div className="home-slider-img" >
                  <img src={img} alt="" />
                </div>
              </Container>
              </SwiperSlide>
            )
        } )}
      </Swiper>
    </div>
  )
}

export default HomeSlider


