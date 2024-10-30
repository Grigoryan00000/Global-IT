import React, { useEffect, useState } from 'react';
import HomeSlider from './home-slider/HomeSlider';
import HomeFaculties from './home-faculties/HomeFaculties';
import HomeServices from './home-services/HomeServices';
import HomeTeam from './home-team/HomeTeam';
import HomeWorks from './home-works/HomeWorks';
import HomeFriends from './home-friends/HomeFriends';
import HomeContact from './home-contact/HomeContact';
import axios from 'axios';
import { HomeAbout } from './home-about/HomeAbout';

const Home = () => {
  const [sliderData, setSliderData] = useState([]);
  const [facultiesData, setFacultiesData] = useState([]);
  const [facultiesItemData, setFacultiesItemData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [otherServiceData, setOtherServiceData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [friendData, setFriendData] = useState([]);
  const [workData, setWorkData] = useState([]);
  const [aboutData, setAboutData] = useState([]);
  const [aboutItemData, setAboutItemData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const [
          sliderRes,
          serviceRes,
          otherServiceRes,
          facultiesRes,
          facultiesItemRes,
          teamRes,
          friendRes,
          workRes,
          aboutRes,
          aboutItemRes,
        ] = await Promise.all([
          axios.get('https://globalitacademy.am/GIAcademyApi/slayder/'),
          axios.get('https://globalitacademy.am/GIAcademyApi/service/'),
          axios.get('https://globalitacademy.am/GIAcademyApi/other_service/'),
          axios.get('https://globalitacademy.am/GIAcademyApi/faculties/'),
          axios.get('https://globalitacademy.am/GIAcademyApi/faculties_Items/'),
          axios.get('https://globalitacademy.am/GIAcademyApi/team/'),
          axios.get('https://globalitacademy.am/GIAcademyApi/partners/'),
          axios.get('https://globalitacademy.am/GIAcademyApi/works/'),
          axios.get('https://globalitacademy.am/GIAcademyApi/aboutus/'),
          axios.get('https://globalitacademy.am/GIAcademyApi/aboutusitems/'),
        ]);

        // Set data in state
        setSliderData(sliderRes.data);
        setServiceData(serviceRes.data);
        setOtherServiceData(otherServiceRes.data);
        setFacultiesData(facultiesRes.data);
        setFacultiesItemData(facultiesItemRes.data);
        setTeamData(teamRes.data);
        setFriendData(friendRes.data);
        setWorkData(workRes.data);
        setAboutData(aboutRes.data);
        setAboutItemData(aboutItemRes.data);

        setIsLoading(false); // Mark loading as done
      } catch (error) {
        console.error('Error fetching data: ', error);
        setError('There was an error fetching data.');
        setIsLoading(false); // Even if there's an error, stop the loading state
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Loading message, replace with a spinner if needed
  }

  if (error) {
    return <div>{error}</div>; // Display error message if data fetch fails
  }

  return (
    <div className='home' style={{ backgroundColor: 'var(--global-homePage-color)' }}>
      <HomeSlider sliderData={sliderData} />
      <HomeFaculties facultiesData={facultiesData} facultiesItemData={facultiesItemData} />
      <HomeServices serviceData={serviceData} otherServiceData={otherServiceData} />
      <HomeTeam teamData={teamData} />
      <HomeWorks workData={workData} />
      {/* <HomeAbout aboutData={aboutData} aboutItemData={aboutItemData} /> */}
      <HomeFriends friendData={friendData} />
      <HomeContact />
    </div>
  );
};

export default Home;
