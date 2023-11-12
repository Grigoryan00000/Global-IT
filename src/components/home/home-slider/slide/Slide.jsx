import React from 'react'
import Container from '../../../common/container/Container'

const Slide = ({id, titleFirstPart,titleSecondPart, titleThirdPart, img, btn1,btn2, icon}) => {
  return (
    <Container key={id}>
      <div className="home-slider-item">
        <div className="home-slider-item-title">
            <h2><span>{titleFirstPart}</span>{titleSecondPart}{titleThirdPart}</h2>
            <div className="home-slider-item-title-buttons">
                <button>{btn1}</button>
                <button>{btn2}</button>
            </div>
            <button className='home-slider-item-title-icon'>{icon}</button>
        </div>
      </div>
    </Container>
  )
}

export default Slide