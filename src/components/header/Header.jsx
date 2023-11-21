import React from 'react'
import headerLogo from "../../assets/header/Group 73.svg"
import { CONFIG } from '../../config'
import Container from "../common/container/Container"
import "./Header.scss"
import { GoSearch } from 'react-icons/go';
import lang from "../../assets/header/Lang.png"
import { useNavigate } from 'react-router'

const Header = () => {
    const navigate = useNavigate()
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
                    <button>Մուտք</button>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header