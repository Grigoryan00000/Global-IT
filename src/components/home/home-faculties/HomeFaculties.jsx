import Container from "../../common/container/Container"
import "./HomeFaculties.scss"
import homeFacultiesItemBottomImg from "../../../assets/home/home-faculties/home-services-item-bottom-item-img.png"

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { setFacultiesItemId, setFacultiesItemName } from "../../../redux/slices/HomeFacultiesSlices"
import { setFacultiesId } from "../../../redux/slices/FacultetSlice"

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
                                    <img src={item.fac_img} alt="facultet"/>
                                </div>
                                <h3>{langState==="hy"?item.fac_name_hy:langState==="en"?item.fac_name_en:item.fac_name_ru}</h3>
                            </div>
                            <div className="global-item-div">

                                <div className="home-faculties-items-item-bottom">
                                    {facultiesItemData.map(({id,item_name_hy, item_name_ru,item_name_en, faculties}) => {
                                        if(faculties === item.id){
                                            return(
                                                <div className="home-faculties-items-item-bottom-item" 
                                                    key={id} 
                                                    onClick={() => {
                                                        dispatch(setFacultiesItemId(id));
                                                        dispatch(setFacultiesItemName(item_name_hy));
                                                        navigate(`training/${item_name_en}`);
                                                    }}>
                                                    <h4>{langState === "hy" ? item_name_hy : langState === "en" ? item_name_en : item_name_ru}</h4>
                                                    <button>{langState === "hy" ? "Ընդունելություն" : langState === "en" ? "Reception" : "Прием"}</button>
                                                    <img src={homeFacultiesItemBottomImg} alt="" />
                                                </div>

                                            )
                                        } else {
                                        return null
                                        }
                                    })}
                                </div>
                                <div className="btn">
                                    <button className="home-faculties-items-item-bottom-button" onClick={() => {
                                        dispatch(setFacultiesId(item.id))
                                        navigate(`/facultet`)
                                    }}>{langState==="hy"?item.but_name_hy:langState==="en"?item.but_name_en:item.but_name_ru}</button>
                                </div>
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