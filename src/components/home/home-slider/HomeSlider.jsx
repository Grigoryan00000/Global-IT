import React, { useState } from 'react'
import "./HomeSlider.scss"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CONFIG } from '../../../config';
import { Typewriter } from 'react-simple-typewriter';
import Container from "../../common/container/Container"



const HomeSlider = () => {
  const homeTyper = CONFIG.home_slider_data;
  const titlesArr= []
  homeTyper.forEach(({title}) => {
    titlesArr.push(title)
  })
  return (
    <div className='home-slider'>
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
                // onLoopDone={handleDone}
                // onType={handleType}
              />
            </h1>
        </div>
        <div className="home-slider-rightPart" >
          
        </div>
      </Container>
    </div>
  )
}

export default HomeSlider