import React, { useEffect, useState } from 'react'
import "./Treaning.scss"

import { useSelector } from 'react-redux/es/hooks/useSelector'
import axios from "axios"
import TreaningSlider from './treaning-slider/TreaningSlider'
import TrainingExpect from './training-expectation/TrainingExpect'
import TrainingStages from './training-stages/TrainingStages'
import TrainingDesc from './training-description/TrainingDesc'
import TrainingProgram from './training-program/TrainingProgram'
import TrainingCertificate from './training-certificate/TrainingCertificate'
import TrainingInvestment from './training-investment/TrainingInvestment'
import TrainingWorks from './training-works/TrainingWorks'
import TrainingReg from './training-registration/TrainingReg'
import { useLocation } from 'react-router'

const Treaning = () => {
    const location = useLocation();
    // let currentId = +location.pathname[location.pathname.length - 1]; // Current path // bayc ete erknish tiv exav id-n chi ashxati !!!!

    const currentId = useSelector((state) => state.homeFaculties.facultiesItemId)

    


    const [sliderData,setSliderData] = useState([]);
    const [expectationData, setExpectationData] = useState([])
    const [stagesData, setStagesData] = useState([])
    const [programData, setProgramData] = useState([])
    const [programClassData, setProgramClassData] = useState([])
    const [certificateData, setCertificateData] = useState([])
    const [investmentData, setInvestmentData] = useState([])
    const [worksData, setWorksData] = useState([])
    const [programDescData, setProgramDescdata] = useState([])

    useEffect(() => {
        async function getData() {
            try {
                const sliderData = await axios.get("https://globalitacademy.am/GIAcademyApi/treaning_slayder/");
                const expectationData = await axios.get("https://globalitacademy.am/GIAcademyApi/treaning_expectations/")
                const stagesData = await axios.get("https://globalitacademy.am/GIAcademyApi/treaning_stages/")
                const programData = await axios.get("https://globalitacademy.am/GIAcademyApi/treaning_program/");
                const programClassData = await axios.get("https://globalitacademy.am/GIAcademyApi/treaning_program_class/");  
                const certificateData = await axios.get("https://globalitacademy.am/GIAcademyApi/treaning_certificate/");  
                const investmentData = await axios.get("https://globalitacademy.am/GIAcademyApi/treaning_investmen/");  
                const worksData = await axios.get("https://globalitacademy.am/GIAcademyApi/treaning_students_work/");  
                const programDescData = await axios.get("https://globalitacademy.am/GIAcademyApi/treaning_program_profile/");  


                setSliderData(sliderData.data)
                setExpectationData(expectationData.data)
                setStagesData(stagesData.data)
                setProgramData(programData.data);
                setProgramClassData(programClassData.data)
                setCertificateData(certificateData.data[0])
                setInvestmentData(investmentData.data[0])
                setWorksData(worksData.data)
                setProgramDescdata(programDescData.data)
  
            } catch (error) {
                console.log("Error")
            }
        }
        getData();
    }, []);  


  return (
    <div className='treaning'>
        <TreaningSlider sliderData={sliderData} currentId={currentId}/>
        {/* <TrainingDesc currentId={currentId}/> */}
        <TrainingExpect expectationData={expectationData} currentId={currentId}/>   
        <TrainingStages stagesData={stagesData} currentId={currentId}/>
        <TrainingProgram programData={programData} currentId={currentId} programClassData={programClassData} programDescData={programDescData}/>
        <TrainingCertificate certificateData={certificateData} currentId={currentId} />
        <TrainingInvestment investmentData={investmentData} currentId={currentId}/>
        <TrainingWorks worksData={worksData} currentId={currentId}/> 
    </div>
  )
}

export default Treaning