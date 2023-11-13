import React from 'react'
import HomeSlider from './home-slider/HomeSlider'
import HomeFaculties from './home-faculties/HomeFaculties'
import HomeServices from './home-services/HomeServices'

const Home = () => {
  return (
    <div className='name' style={{backgroundColor: "var(--global-homePage-color)"}}>
      <HomeSlider />
      <HomeFaculties />
      <HomeServices />
    </div>
  )
}

export default Home