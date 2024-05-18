import React, { useEffect, useState } from 'react'
import { CONFIG } from '../../config'
import Container from "../common/container/Container"
import "./Header.scss"
import language from "../../assets/header/Lang.png"
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setCloseAuth, setCloseAuthWindow, setCloseReg, setShowReg } from '../../redux/slices/authSlice'
import axios from 'axios'
import { selectEn, selectHy, selectRu } from '../../redux/slices/LangSlice';


const Header = () => {
    
    const navigate = useNavigate()
    const closeAuth = useSelector((state) => state.auth.closeAuth)
    const closeAuthWindow = useSelector((state) => state.auth.closeAuthWindow)
    const closeReg = useSelector((state) => state.auth.closeReg)


    const [headerData,setHeaderData] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const headerData = await axios.get("https://globalitacademy.am/GIAcademyApi/header/");
                setHeaderData(headerData.data);
            } catch (error) {
                console.log("Error")
            }
        }
        getData();
    }, []);




    const [lang, setLang] = useState("hy")
  
  
  const langState = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (lang === "en") {
      dispatch(selectEn())
    } else if (lang === "ru") {
      dispatch(selectRu())
    } else {
      dispatch(selectHy())
    }
  }, [lang]);

  function changeLanguage(event){
    // i18n.changeLanguage(event.target.value)
    setLang(event.target.value)
  }
  return (
    <header>
        <Container>
            {headerData.map(({id, logo, page1_hy, page1_ru, page1_en, page2_hy, page2_ru, page2_en, page3_hy, page3_ru, page3_en, page4_hy, page4_ru, page4_en, page5_hy, page5_ru, page5_en, login_hy, login_ru, login_en}) => {
                return(
                    <div className="row" key={id}>
                        <div className="logo">
                            <img src={logo}/>
                        </div>
                        <ul className='nav' style={{fontSize: langState === "en" || langState === "ru"? "20px" : "16px"}}>
                            <li onClick={() => navigate("/")}>{langState==="hy"?page1_hy:langState==="en"?page1_en:page1_ru}</li>
                            <li onClick={() => navigate("/services")}>{langState==="hy"?page2_hy:langState==="en"?page2_en:page2_ru}</li>
                            <li onClick={() => navigate("/training")}>{langState==="hy"?page3_hy:langState==="en"?page3_en:page3_ru}</li>
                            <li onClick={() => navigate("/blog")}>{langState==="hy"?page4_hy:langState==="en"?page4_en:page4_ru}</li>
                            <li>{langState==="hy"?page5_hy:langState==="en"?page5_en:page5_ru}</li>
                        </ul>
                        <div className="options">
                            {/* <span>
                                <img src={language} onClick={() => setLang("hy")}/>
                                <button onClick={() => setLang("ru")}>ru</button>
                                <button >en</button>
                            </span> */}
                            <select name="" id="" value={lang} onChange={changeLanguage}>
                                <option value="hy"></option>
                                <option value="ru"></option>
                                <option value="en">

                                <img src={language} alt="" />
                                </option>
                            </select>
                            <button onClick={() => {
                                navigate("/auth")
                                if(closeAuth){
                                    dispatch(setCloseAuth())
                                }
                                if(closeReg){
                                    dispatch(setCloseReg())
                                }
                                if(!closeAuthWindow){
                                    dispatch(setCloseAuthWindow())
                                }
                            }}>{langState==="hy"?login_hy:langState==="en"?login_en:login_ru}</button>
                        </div>
                    </div>
                )
            })}
            
        </Container>
    </header>
    
  )
}

export default Header