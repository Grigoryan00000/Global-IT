import React from 'react'
import HomeSlider from './home-slider/HomeSlider'

const Home = () => {
  return (
    <div className='name' style={{backgroundColor: "var(--global-homePage-color)"}}>
      <HomeSlider />
    </div>
  )
}

export default Home