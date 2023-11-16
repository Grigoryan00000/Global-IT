import React from 'react'
import HomeSlider from './home-slider/HomeSlider'
import HomeFaculties from './home-faculties/HomeFaculties'
import HomeServices from './home-services/HomeServices'
import HomeTeam from './home-team/HomeTeam'
import HomeWorks from './home-works/HomeWorks'
import HomeFriends from './home-friends/HomeFriends'

const Home = () => {
  return (
    <div className='name' style={{backgroundColor: "var(--global-homePage-color)"}}>
      <HomeSlider />
      <HomeFaculties />
      <HomeServices />
      <HomeTeam />
      <HomeWorks />
      <HomeFriends />
    </div>
  )
}

export default Home