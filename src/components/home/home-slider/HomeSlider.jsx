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
import contact from "../../../assets/home/home-slider/phone.png"
import { SliderContact } from "./slider-contact/SliderContact";

const HomeSlider = ({ sliderData }) => {

  const langState = useSelector((state) => state.lang.lang);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)

  // let homeTyper = sliderData;
  
  let titlesArr = [];
  
  if (langState === "hy") {
    sliderData.forEach(({ name_hy }) => {
      
      titlesArr.push(name_hy);
      console.log(titlesArr);
      
      
    });
  } else if (langState === "ru") {
    sliderData.forEach(({ name_ru }) => {
      // titlesArr=[]
      titlesArr.push(name_ru);
      console.log(titlesArr);


    });
  } else {
    sliderData.forEach(({ name_en }) => {
      // titlesArr=[]
      titlesArr.push(name_en);
      console.log(titlesArr);


    });
  }
  console.log(titlesArr);
  

  
  

  let a = [];
  let b = [];
  sliderData.forEach(({ but_name1_hy, but_name2_hy }) => {
    a.push(but_name1_hy);
    b.push(but_name2_hy)
  });

  return (
    <div className="home-slider">
      <div className="home-slider-title">
        <h1>
          <Typewriter
            words={titlesArr}
            log
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <div className="home-slider-title-contact" >
            <img src={contact} alt="phone" style={{cursor: 'pointer'}} onClick={() => {
              setOpen((prev) => !prev)
        }}/>
        </div>
      </div>
      <div className="home-slider-img">

      </div>
      <SliderContact open = {open} setOpen = {setOpen}/>
    </div>
  );
};

export default HomeSlider;
