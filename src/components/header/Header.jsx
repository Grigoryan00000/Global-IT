import React from 'react'
import headerLogo from "../../assets/header/Group 73.svg"
import { CONFIG } from '../../config'
import Container from "../common/container/Container"
import "./Header.scss"
import { GoSearch } from 'react-icons/go';
import lang from "../../assets/header/Lang.png"
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setCloseAuth, setCloseAuthWindow, setCloseReg, setShowReg } from '../../redux/slices/authSlice'

const Header = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const closeAuth = useSelector((state) => state.auth.closeAuth)
    const closeAuthWindow = useSelector((state) => state.auth.closeAuthWindow)
    const closeReg = useSelector((state) => state.auth.closeReg)


  return (
    <header>
        <Container>
            <div className="row">
                <div className="logo">
                    <img src={headerLogo}/>
                </div>
                <ul className='nav'>
                    {CONFIG.headerConfig.map(({id,title}) => {
                        return (
                            <li
                            key={id}
                            onClick={() => {
                                navigate("/blog")
                            }}
                            >
                                {title}
                            </li>
                        )
                    })}
                </ul>
                <div className="options">
                    <GoSearch />
                    <span>
                        <img src={lang}/>
                    </span>
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
                    }}>Մուտք</button>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header