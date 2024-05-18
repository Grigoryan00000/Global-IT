import React from 'react'
import "./HomeAbout.scss"
import Container from '../../common/container/Container'
import a from "../../../assets/home/home-about/icon1.png"
import { useSelector } from 'react-redux'

export const HomeAbout = ({aboutData, aboutItemData}) => {

  const langState = useSelector((state) => state.lang.lang);
    
  return (
    <div className='home-about'>
        <Container>
            {aboutData.map(({id, name_hy, name_ru, name_en, text_hy, text_en, text_ru, but_name_hy, but_name_ru, but_name_en}) => {
                return(
                    <div className="home-about-title" key={id}>
                        <h2>{langState === "hy"? name_hy: langState === "ru" ? name_ru: name_en}</h2>
                        <p style={{fontSize: langState === "ru" || langState === 'en' ? "21px" : "18px"}}>{langState === "hy"? text_hy: langState === "ru" ? text_ru: text_en}</p>
                        <button>{langState === "hy"? but_name_hy: langState === "ru" ? but_name_ru: but_name_en}</button>
                    </div>
                )
            })}
            <div className="home-about-img">
                {aboutItemData.map(({id, img, name_hy, name_ru, name_en}) => {
                    return(
                        <div className='home-about-img-item' key={id}>
                            <img src={img} alt="" />
                            <p>{langState === "hy"? name_hy: langState === "ru" ? name_ru: name_en}</p>
                        </div>
                    )
                })}
            </div>
        </Container>
    </div>
  )
}
