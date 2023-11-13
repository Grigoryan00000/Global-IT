import HomeServicesItemImg from "../../../assets/home-services/home-services-item-img.png"
import Container from "../../common/container/Container"
import "./HomeServices.scss"
import homeServicesItemIcon from "../../../assets/home-services/home-services-item-icon.png"
import homeServicesItemBottomItemImg from "../../../assets/home-services/home-services-item-bottom-item-img.png"
import { useSelector } from "react-redux"



const HomeServices = () => {

    const homeServices = useSelector((state) => state.homeServices.homeServices)
    
    return (
    <div className='home-services'>
        <Container>
            <h2 className="home-services-title">ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</h2>
            <div className="home-services-items">
                <div className="home-services-items-item">
                    <div className="home-services-items-item-img">
                        <img src={HomeServicesItemImg} alt="" />
                    </div>
                    <div className="home-services-items-item-desc">
                        <h3>Վեբ կայքերի Պատրաստում</h3>
                        <button>Պատվիրել</button>
                    </div>
                </div>
                <div className="home-services-items-item">
                    <div className="home-services-items-item-img">
                        <img src={HomeServicesItemImg} alt="" />
                    </div>
                    <div className="home-services-items-item-desc">
                        <h3>Վեբ կայքերի Պատրաստում</h3>
                        <button>Պատվիրել</button>
                    </div>
                </div>
                <div className="home-services-items-item">
                    <div className="home-services-items-item-top">
                        <div>
                            <img src={homeServicesItemIcon}/>
                        </div>
                        <h3>Վեբ Ծրագրավորման Ֆակուլտետ</h3>
                    </div>
                    <div className="home-services-items-item-bottom">
                        {homeServices.map(({id,text, img}) => {
                            return(
                                <div className="home-services-items-item-bottom-item" key={id}>
                                    <h4>{text}</h4>
                                    <img src={img} alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default HomeServices