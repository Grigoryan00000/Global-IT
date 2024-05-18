import Container from "../../common/container/Container"
import "./HomeFaculties.scss"
import homeFacultiesIcon1 from "../../../assets/home/home-faculties/home-faculties-item-icon1.png"
import homeFacultiesIcon2 from "../../../assets/home/home-faculties/home-faculties-item-icon2.png"
import homeFacultiesIcon3 from "../../../assets/home/home-faculties/home-faculties-item-icon3.png"
import homeFacultiesitem from "../../../assets/home/home-faculties/home-faculties-item.png"
import homeFacultiesItemBottomImg from "../../../assets/home/home-faculties/home-services-item-bottom-item-img.png"

import { useDispatch, useSelector } from "react-redux"

const HomeFaculties = ({facultiesData}) => {

    const langState = useSelector((state) => state.lang.lang);
   const dispatch = useDispatch();
  return (
    <section className='home-faculties'>
        <Container>
            <h2 className="home-faculties-title">{langState==="hy"?"ՖԱԿՈՒԼՏԵՏՆԵՐ":langState==="en"?"FACULTIES":"ФАКУЛЬТЕТЫ"}</h2>
            <div className="home-faculties-items">
                {facultiesData.map(({id,fac_img, fac_name_hy, fac_name_ru, fac_name_en, prod_name1_hy, prod_name1_ru, prod_name1_en, prod_name2_hy, prod_name2_ru, prod_name2_en, prod_name3_hy, prod_name3_ru, prod_name3_en, prod_name4_hy, prod_name4_ru, prod_name4_en, prod_name5_hy, prod_name5_ru, prod_name5_en, but_name_hy, but_name_ru, but_name_en}) => {
                    return(
                        <div className="home-faculties-items-item" key={id}>
                            <div className="home-faculties-items-item-top">
                                <div>
                                    <img src={fac_img}/>
                                </div>
                                <h3>{langState==="hy"?fac_name_hy:langState==="en"?fac_name_en:fac_name_ru}</h3>
                            </div>
                            <div className="home-faculties-items-item-bottom">
                                <div className="home-faculties-items-item-bottom-item">
                                    <h4>{langState==="hy"?prod_name1_hy:langState==="en"?prod_name1_en:prod_name1_ru}</h4>
                                    <button>{langState==="hy"?"Ընդունելություն":langState==="en"?"Reception":"Прием"}</button>
                                    <img src={homeFacultiesItemBottomImg} alt="" />
                                </div>
                                <div className="home-faculties-items-item-bottom-item">
                                    <h4>{langState==="hy"?prod_name2_hy:langState==="en"?prod_name2_en:prod_name2_ru}</h4>
                                    <button>{langState==="hy"?"Ընդունելություն":langState==="en"?"Reception":"Прием"}</button>
                                    <img src={homeFacultiesItemBottomImg} alt="" />
                                </div>
                                <div className="home-faculties-items-item-bottom-item">
                                    <h4>{langState==="hy"?prod_name3_hy:langState==="en"?prod_name3_en:prod_name3_ru}</h4>
                                    <button>{langState==="hy"?"Ընդունելություն":langState==="en"?"Reception":"Прием"}</button>
                                    <img src={homeFacultiesItemBottomImg} alt="" />
                                </div>
                                <div className="home-faculties-items-item-bottom-item">
                                    <h4>{langState==="hy"?prod_name4_hy:langState==="en"?prod_name4_en:prod_name4_ru}</h4>
                                    <button>{langState==="hy"?"Ընդունելություն":langState==="en"?"Reception":"Прием"}</button>
                                    <img src={homeFacultiesItemBottomImg} alt="" />
                                </div>
                                <div className="home-faculties-items-item-bottom-item">
                                    <h4>{langState==="hy"?prod_name5_hy:langState==="en"?prod_name5_en:prod_name5_ru}</h4>
                                    <button>{langState==="hy"?"Ընդունելություն":langState==="en"?"Reception":"Прием"}</button>
                                    <img src={homeFacultiesItemBottomImg} alt="" />
                                </div>
                                <button className="home-faculties-items-item-bottom-button">{langState==="hy"?but_name_hy:langState==="en"?but_name_en:but_name_ru}</button>
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