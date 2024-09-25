import React, { useState } from "react";
import "./HomeSlider.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CONFIG } from "../../../config";
import { Typewriter } from "react-simple-typewriter";
import Container from "../../common/container/Container";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const HomeSlider = ({ sliderData }) => {

  debugger;
  const langState = useSelector((state) => state.lang.lang);
  const navigate = useNavigate();

  let homeTyper = sliderData;
  
  let titlesArr = [];
  
  if (langState === "hy") {
    homeTyper.forEach(({ name_hy }) => {
      
      titlesArr.push(name_hy);
      console.log(titlesArr);
      
      
    });
  } else if (langState === "ru") {
    homeTyper.forEach(({ name_ru }) => {
      // titlesArr=[]
      titlesArr.push(name_ru);
      console.log(titlesArr);


    });
  } else {
    homeTyper.forEach(({ name_en }) => {
      // titlesArr=[]
      titlesArr.push(name_en);
      console.log(titlesArr);


    });
  }
  console.log(titlesArr);
  

  
  

  let a = [];
  let b = [];
  homeTyper.forEach(({ but_name1_hy, but_name2_hy }) => {
    a.push(but_name1_hy);
    b.push(but_name2_hy)
  });

  return (
    <div className="home-slider">
      <div className="home-slider-title">
        {/* <h1> */}
          {/* <Typewriter
            words={titlesArr}
            log
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1> */}
        <button>{a}</button>
        <button>{b}</button>
      </div>
      <div className="home-slider-img">

      </div>
    </div>
  );
};

export default HomeSlider;
