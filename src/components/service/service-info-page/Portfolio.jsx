import { useSelector } from "react-redux"
import "../../home/home-works/HomeWorks.scss"

import Container from "../../common/container/Container"

const Portfolio = () => {
    const homeWorks = useSelector((state) => state.homeWorks.homeWorks)
  return (
    <div className="home-works">
        <Container>
            <h2 className="home-works-title">ՊՈՐՏՖՈԼԻՈ</h2>
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

export default Portfolio