import Container from "../../common/container/Container"
import "./HomeFaculties.scss"
import homeFacultiesIcon1 from "../../../assets/home/home-faculties/home-faculties-item-icon1.png"
import homeFacultiesIcon2 from "../../../assets/home/home-faculties/home-faculties-item-icon2.png"
import homeFacultiesIcon3 from "../../../assets/home/home-faculties/home-faculties-item-icon3.png"
import homeFacultiesitem from "../../../assets/home/home-faculties/home-faculties-item.png"
import homeFacultiesItemBottomImg from "../../../assets/home/home-faculties/home-services-item-bottom-item-img.png"

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { setFacultiesItemId } from "../../../redux/slices/HomeFacultiesSlices"

const HomeFaculties = ({facultiesData, facultiesItemData}) => {


    const langState = useSelector((state) => state.lang.lang);
   const dispatch = useDispatch();
   const navigate = useNavigate()
  return (
    <section className='home-faculties'>
        <Container>
            <h2 className="home-faculties-title">{langState==="hy"?"ՖԱԿՈՒԼՏԵՏՆԵՐ":langState==="en"?"FACULTIES":"ФАКУЛЬТЕТЫ"}</h2>
            <div className="home-faculties-items">
                {facultiesData.map((item) => {
                    return(
                        
                        <div className="home-faculties-items-item" key={item.id}>
                            <div className="home-faculties-items-item-top">
                                <div>
                                    <img src={item.fac_img}/>
                                </div>
                                <h3>{langState==="hy"?item.fac_name_hy:langState==="en"?item.fac_name_en:item.fac_name_ru}</h3>
                            </div>
                            <div className="home-faculties-items-item-bottom">
                                {facultiesItemData.map(({id,item_name_hy, item_name_ru,item_name_en, faculties}) => {
                                    if(faculties === item.id){
                                        return(
                                            <div className="home-faculties-items-item-bottom-item" 
                                                key={id} 
                                                onClick={async () => {
                                                    try {
                                                    await dispatch(setFacultiesItemId(id)); // Ensure dispatch is completed
                                                    navigate(`training/${item_name_en}`);   // Navigate after dispatch
                                                    } catch (error) {
                                                    console.error("Navigation error:", error);
                                                    }
                                                }}>
                                                <h4>{langState === "hy" ? item_name_hy : langState === "en" ? item_name_en : item_name_ru}</h4>
                                                <button>{langState === "hy" ? "Ընդունելություն" : langState === "en" ? "Reception" : "Прием"}</button>
                                                <img src={homeFacultiesItemBottomImg} alt="" />
                                            </div>

                                        )
                                    }
                                })}
                            <button className="home-faculties-items-item-bottom-button" onClick={() => {
                                navigate(`/facultet`)
                            }}>{langState==="hy"?item.but_name_hy:langState==="en"?item.but_name_en:item.but_name_ru}</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>
    </section>
  )
}

export default HomeFaculties