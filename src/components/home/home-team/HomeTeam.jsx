import { useSelector } from "react-redux"
import homeTeamItemImg from "../../../assets/home/home-team/home-team-item-img.png"
import "./HomeTeam.scss"
import Container from "../../common/container/Container"

const HomeTeam = ({teamData}) => {

  const langState = useSelector((state) => state.lang.lang);

  return (
    <div className='home-team'>
        <Container>
            <h2 className="home-team-title">{langState === "hy"? "Մեր Թիմը": langState === "ru" ? "Наша команда": "Our Team"}</h2>
            <div className="home-team-items">
                {teamData.map(({id, user_name_hy, user_name_ru, user_name_en, user_img, fc, tw, ins, linked}) => {
                    return(
                        <div className="home-team-items-item" key={id}>
                            <div className="home-team-items-item-text">
                                <h4>{langState === "hy"? user_name_hy: langState === "ru" ? user_name_ru: user_name_en}</h4>
                            </div>
                            <div className="home-team-items-item-icons">
                                <img src={fc}></img>
                                <img src={tw}></img>
                                <img src={ins}></img>
                                <img src={linked}></img>
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