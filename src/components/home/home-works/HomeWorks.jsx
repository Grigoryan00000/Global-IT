import { useSelector } from "react-redux"
import "./HomeWorks.scss"
import homeWorksImg1 from "../../../assets/home/home-works/home-works-img1.png"
import homeWorksImg2 from "../../../assets/home/home-works/home-works-img2.png"
import homeWorksImg3 from "../../../assets/home/home-works/home-works-img3.png"
import Container from "../../common/container/Container"

const HomeWorks = ({workData}) => {
  const langState = useSelector((state) => state.lang.lang);
    
  return (
    <div className="home-works">
        <Container>
            <h2 className="home-works-title">{langState === "hy"? "Մեր Աշխատանքները": langState === "ru" ? "Наши работы": "Our Works"}</h2>
            
            <div className="home-works-items">
                {workData.map(({id,name_hy,name_ru,name_en, dev_name_hy, dev_name_ru, dev_name_en, works_img, works_name, works_txt_hy, works_txt_ru, works_txt_en}) => {
                    return(
                        <div className="home-works-items-item" key={id} style={{background: {works_img}}}>
                            <div className="home-works-items-item-deck">
                                <button>{langState === "hy"? dev_name_hy: langState === "ru" ? dev_name_ru: dev_name_en}</button>
                            </div>
                            <div className="home-works-items-item-title">
                                <h3>{works_name}</h3>
                                <p style={{fontSize: langState === "ru" || langState === "en" ? "18px" : "15px"}}>{langState === "hy"? works_txt_hy: langState === "ru" ? works_txt_ru: works_txt_en}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>    
    </div>
  )
}

export default HomeWorks