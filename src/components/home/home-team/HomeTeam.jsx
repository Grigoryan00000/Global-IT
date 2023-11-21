import { useSelector } from "react-redux"
import homeTeamItemImg from "../../../assets/home/home-team/home-team-item-img.png"
import "./HomeTeam.scss"
import Container from "../../common/container/Container"

const HomeTeam = () => {
    const homeTeam = useSelector((state) => state.homeTeam.homeTeam)
  return (
    <div className='home-team'>
        <Container>
            <h2 className="home-team-title">Մեր Թիմը</h2>
            <div className="home-team-items">
                {homeTeam.map(({id,text,icon1,icon2,icon3,icon4}) => {
                    return(
                        <div className="home-team-items-item" key={id}>
                            <div className="home-team-items-item-text">
                                <h4>{text}</h4>
                            </div>
                            <div className="home-team-items-item-icons">
                                <img src={icon1}></img>
                                <img src={icon2}></img>
                                <img src={icon3}></img>
                                <img src={icon4}></img>
                            </div>

                        </div>
                    )
                })}
            </div>
        </Container>    
    </div>
  )
}

export default HomeTeam