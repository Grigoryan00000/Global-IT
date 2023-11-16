import { useSelector } from "react-redux"
import "./HomeWorks.scss"
import homeWorksImg1 from "../../../assets/home-works/home-works-img1.png"
import homeWorksImg2 from "../../../assets/home-works/home-works-img2.png"
import homeWorksImg3 from "../../../assets/home-works/home-works-img3.png"
import Container from "../../common/container/Container"

const HomeWorks = () => {
    const homeWorks = useSelector((state) => state.homeWorks.homeWorks)
  return (
    <div className="home-works">
        <Container>
            <h2 className="home-works-title">Մեր Աշխատանքները</h2>
            <div className="home-works-items">
                {homeWorks.map(({id,title,text,btn}) => {
                    return(
                        <div className="home-works-items-item" key={id}>
                            <div className="home-works-items-item-deck">
                                <button>{btn}</button>
                            </div>
                            <div className="home-works-items-item-title">
                                <h3>{title}</h3>
                                <p>{text}</p>
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