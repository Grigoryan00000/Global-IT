import { useSelector } from "react-redux"
import homeTeamItemImg from "../../../assets/home/home-team/home-team-item-img.png"
import "./HomeTeam.scss"
import Container from "../../common/container/Container"
import { Link, Navigate, useNavigate } from "react-router-dom"

const HomeTeam = ({teamData}) => {

  const langState = useSelector((state) => state.lang.lang);
  const navigate = useNavigate()

  return (
    <div className='home-team'>
        <Container>
            <h2 className="home-team-title">{langState === "hy"? "Մեր Թիմը": langState === "ru" ? "Наша команда": "Our Team"}</h2>
            <div className="home-team-items">
                {teamData.map(({id, user_name_hy, user_name_ru, user_name_en, user_img, fc, tw, ins, linked, fc_link, ins_link, tw_link, linked_link}) => {
                    return(
                        <div className="home-team-items-item" key={id}>
                            <div className="home-team-items-item-text">
                                <h4>{langState === "hy"? user_name_hy: langState === "ru" ? user_name_ru: user_name_en}</h4>
                            </div>
                            <div className="home-team-items-item-icons">
                                <a href={fc_link}>
                                    <img src={fc} onClick={() => {
                                        navigate(fc_link)
                                    }}></img>
                                </a>
                                {/* <Link href={fc_link}/> */}
                                <a href={ins_link}>
                                    <img src={ins}></img>
                                </a>
                                <a href={linked_link}>
                                    <img src={linked}></img>
                                </a>
                                
                                
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