import HomeServicesItemImg from "../../../assets/home/home-services/home-services-item-img.png"
import Container from "../../common/container/Container"
import "./HomeServices.scss"
import homeServicesItemIcon from "../../../assets/home/home-services/home-services-item-icon.png"
import homeServicesItemBottomItemImg from "../../../assets/home/home-services/home-services-item-bottom-item-img.png"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { changeActiveItem, changeActiveItemName } from "../../../redux/slices/ServiceSlice"



const HomeServices = ({serviceData, serviceItems}) => {

    const langState = useSelector((state) => state.lang.lang);

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    
    
    return (
    <div className='home-services'>
        <Container>
            <h2 className="home-services-title">{langState === "hy"? "Ծառայություններ": langState === "ru" ? "Услуги" : "Services"}</h2>
            <div className="home-services-items">
                {serviceData.map(({id, ser_name_hy, ser_name_ru, ser_name_en, ser_img, but_name_hy, but_name_ru, but_name_en}) => {
                    
                    return(
                        <div className="home-services-items-item" key={id}>
                            <div className="home-services-items-item-img">
                                <img src={ser_img} alt="" />
                            </div>
                            <div className="home-services-items-item-desc" >
                                <h3>{langState === "hy"? ser_name_hy: langState === "ru" ? ser_name_ru : ser_name_en}</h3>
                                <button onClick={() => {
                                    dispatch(changeActiveItem(id))  
                                    navigate(`/service-info`)
                                }}>{langState === "hy"? but_name_hy: langState === "ru" ? but_name_ru : but_name_en}</button>
                            </div>
                        </div>
                    )
                })}
                
                {/* <div className="home-services-items-item">
                    <div className="home-services-items-item-top">
                        <div>
                            <img src={homeServicesItemIcon}/>
                        </div>
                        <h3>{langState === "hy"? "Վեբ Ծրագրավորման Ֆակուլտետ": langState === "ru" ? "Факультет веб-программирования" : "Faculty of Web Programming"}</h3>
                    </div>
                    <div className="home-services-items-item-bottom">
                        {serviceItems.map(({id, ser_name_hy, }) => {
                         
                                return(
                                    <div className="home-services-items-item-bottom-item" key={id}>
                                        <p onClick={() => {
                                            console.log(id)
                                            dispatch(changeActiveItem(id)) 
                                            dispatch(changeActiveItemName(ser_name_hy))
                                            // navigate("/service-info")
                                        }}>{ser_name_hy}</p>
                                    </div>
                                )
                        })}
                    </div>
                </div> */}
            </div>
        </Container>
    </div>
  )
}

export default HomeServices