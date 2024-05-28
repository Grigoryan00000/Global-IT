import React, { useEffect, useState } from 'react'
import HomeSlider from './home-slider/HomeSlider'
import HomeFaculties from './home-faculties/HomeFaculties'
import HomeServices from './home-services/HomeServices'
import HomeTeam from './home-team/HomeTeam'
import HomeWorks from './home-works/HomeWorks'
import HomeFriends from './home-friends/HomeFriends'
import HomeContact from './home-contact/HomeContact'
import axios from 'axios'
import { HomeAbout } from './home-about/HomeAbout'

const Home = () => {

  const [sliderData,setSliderData] = useState([]);
  const [facultiesData,setFacultiesData] = useState([]);
  const [serviceData,setServiceData] = useState([]);
  const [otherServiceData,setOtherServiceData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [friendData, setFriendData] = useState([]);
  const [workData, setWorkData] = useState([]);
  const [aboutData, setAboutData] = useState([]);
  const [aboutItemData, setAboutItemData] = useState([]);

  useEffect(() => {
      async function getData() {
          try {
              const headerData = await axios.get("https://globalitacademy.am/GIAcademyApi/header/");
              const sliderData = await axios.get("https://globalitacademy.am/GIAcademyApi/slayder/");
              const serviceData = await axios.get("https://globalitacademy.am/GIAcademyApi/service/");
              const otherServiceData = await axios.get("https://globalitacademy.am/GIAcademyApi/other_service/");
              const facultiesData = await axios.get("https://globalitacademy.am/GIAcademyApi/faculties/");
              const teamData = await axios.get("https://globalitacademy.am/GIAcademyApi/team/");
              const friendData = await axios.get("https://globalitacademy.am/GIAcademyApi/partners/");
              const workData = await axios.get("https://globalitacademy.am/GIAcademyApi/works/");
              const aboutData = await axios.get("https://globalitacademy.am/GIAcademyApi/aboutus/");
              const aboutItemData = await axios.get("https://globalitacademy.am/GIAcademyApi/aboutusitems/");
              
              
              setSliderData(sliderData.data);
              setFacultiesData(facultiesData.data);
              setServiceData(serviceData.data);
              setOtherServiceData(otherServiceData.data);
              setTeamData(teamData.data);
              setWorkData(workData.data);
              setAboutData(aboutData.data);
              setAboutItemData(aboutItemData.data);
              setFriendData(friendData.data);

          } catch (error) {
              console.log("Error")
          }
      }
      getData();
  }, []);

  console.log(otherServiceData);

  return (
    <div className='home' style={{backgroundColor: "var(--global-homePage-color)"}}>
      <HomeSlider sliderData={sliderData}/>
      <HomeFaculties facultiesData={facultiesData}/>
      <HomeServices serviceData={serviceData} otherServiceData={otherServiceData}/>
      <HomeTeam teamData={teamData}/>
      <HomeWorks workData={workData}/>
      {/* <HomeAbout aboutData={aboutData} aboutItemData={aboutItemData}/> */}
      <HomeFriends friendData={friendData}/>
      <HomeContact />
    </div>
  )
}

export default Home