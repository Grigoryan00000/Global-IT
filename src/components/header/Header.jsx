import React, { useEffect, useState } from 'react'
import { CONFIG } from '../../config'
import Container from "../common/container/Container"
import "./Header.scss"
import arm from "../../assets/header/armenia.png"
import ru from "../../assets/header/russia.png"
import en from "../../assets/header/united-states.png"
import { setCloseAuth, setCloseAuthWindow, setCloseReg, setShowReg } from '../../redux/slices/authSlice'
import axios from 'axios'
import { selectEn, selectHy, selectRu } from '../../redux/slices/LangSlice';
import {  } from 'react-router'
import { useNavigate, useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { GoSearch } from 'react-icons/go';
import { DropDown } from './dropdown/DropDown'
// import lang from "../../assets/header/Lang.png"

const Header = () => {
    
    const navigate = useNavigate()

    const location = useLocation();
    const path = location.pathname

    const [headerData,setHeaderData] = useState([]);
    const [open,setOpen] = useState(false);
    

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

    const options = [
        {id: 1,image: arm, lang: "hy" },
        {id: 2,image: ru, lang: "ru"},
        {id:3, image: en, lang: "en"}
      ];



    const [lang, setLang] = useState("hy")
  
  
  const langState = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (lang === "en") {
      dispatch(selectEn())
    } else if (lang === "ru") {
      dispatch(selectRu())
    } else {
      dispatch(selectHy())
    }
  }, [lang]);


  function addNav(){
    let nav = document.querySelector(".nav")
    let options = document.querySelector(".options")
    nav.style.display= (nav.style.display === "block") ? "none" : "block"
    options.style.display= (options.style.display === "flex") ? "none" : "flex";
  }

  function changeLanguage(event){
    setLang(event.target.value)
  }

  useEffect(() => {
    // Adding the scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        // Removing listener
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

const [isScrolled, setScrolled] = useState(false);

// Handler when page is scrolled
const handleScroll = () => {
  if(window.pageYOffset > 0) {
    setScrolled(true)
  } else {
    setScrolled(false)
  }
}

  
  return (
    <header class="header header-scrolled"style={{backgroundColor: path==="/service"||path==="/service-info"?"#2f2f2f":"rgba(0, 0, 0, 0.5)"}}>
        <Container>
            {headerData.map(({id, logo, page1_hy, page1_ru, page1_en, page2_hy, page2_ru, page2_en, page3_hy, page3_ru, page3_en, page4_hy, page4_ru, page4_en, page5_hy, page5_ru, page5_en, login_hy, login_ru, login_en}) => {
                return(
                    <div className="row" key={id}>
                        <div className="logo">
                            <img src={logo} onClick={() => {
                                navigate("/")
                            }}/>
                        </div>
                        <ul className='nav' style={{fontSize: langState === "en" || langState === "ru"? "20px" : "16px"}}>
                            <li onClick={() => navigate("/")}>{langState==="hy"?page1_hy:langState==="en"?page1_en:page1_ru}</li>
                            <li onClick={() => navigate("/facultet")}>{langState==="hy"?page2_hy:langState==="en"?page2_en:page2_ru}</li>
                            <li onClick={() => navigate("/service")}>{langState==="hy"?page3_hy:langState==="en"?page3_en:page3_ru}</li>
                            <li onClick={() => navigate("/blog")}>{langState==="hy"?page4_hy:langState==="en"?page4_en:page4_ru}</li>
                            <li>{langState==="hy"?page5_hy:langState==="en"?page5_en:page5_ru}</li>
                        </ul>
                        <div className="options">
                            {/* <select name="" id="" value={lang} onChange={changeLanguage}>
                                <option value="hy"></option>
                                <option value="ru"></option>
                                <option value="en">

                                </option>
                            </select> */}
                            <DropDown options={options} lang={lang} setLang={setLang} changeLanguage={changeLanguage}/>

                            {/* <button onClick={() => {
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
                            }}>{langState==="hy"?login_hy:langState==="en"?login_en:login_ru}</button> */}
                        </div>

                        <div className="burger" onClick={() => {
                            addNav()
                        }}>
                            <input class="checkbox" type="checkbox" name="" id="" />
                            <div class="hamburger-lines">
                                <span class="line line1">
                                </span>
                                <span class="line line2"></span>
                                <span class="line line3"></span>
                            </div>  
                        </div>
                    </div>
                )
            })}
            
        </Container>
    </header>
    
  )
}

export default Header