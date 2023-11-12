import React from 'react'
import "./HomeSlider.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CONFIG } from '../../../config';
import Slide from './slide/Slide';


const HomeSlider = () => {
  return (
    <div className='home-slider'>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        grabCursor
        autoplay={{
          delay: 5000,
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {CONFIG.home_slider_data.map(({ id, titleFirstPart,titleSecondPart,titleThirdPart, img, btn1, btn2, icon }) => {
          return (
            <SwiperSlide key={id}>
              <Slide
                id={id}
                titleFirstPart={titleFirstPart}
                titleSecondPart={titleSecondPart}
                titleThirdPart={titleThirdPart}
                img={img}
                btn1={btn1}
                btn2={btn2}
                icon={icon}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}

export default HomeSlider