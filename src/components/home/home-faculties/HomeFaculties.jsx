import Container from "../../common/container/Container"
import "./HomeFaculties.scss"
import homeFacultiesIcon1 from "../../../assets/home/home-faculties/home-faculties-item-icon1.png"
import homeFacultiesIcon2 from "../../../assets/home/home-faculties/home-faculties-item-icon2.png"
import homeFacultiesIcon3 from "../../../assets/home/home-faculties/home-faculties-item-icon3.png"
import homeFacultiesitem from "../../../assets/home/home-faculties/home-faculties-item.png"
import { useDispatch, useSelector } from "react-redux"

const HomeFaculties = () => {

   const homeFaculties = useSelector((state) => state.homeFaculties.homeFaculties);
   const dispatch = useDispatch()
  return (
    <section className='home-faculties'>
        <Container>
            <h2 className="home-faculties-title">ՖԱԿՈՒԼՏԵՏՆԵՐ</h2>
            <div className="home-faculties-items">
                <div className="home-faculties-items-item">
                    <div className="home-faculties-items-item-top">
                        <div>
                            <img src={homeFacultiesIcon1}/>
                        </div>
                        <h3>Վեբ Ծրագրավորման Ֆակուլտետ</h3>
                    </div>
                    <div className="home-faculties-items-item-bottom">
                     {homeFaculties.map(({id, text, btn,img}) => {
                        return(
                        <div className="home-faculties-items-item-bottom-item" key={id}>
                            <h4>{text}</h4>
                            <button>{btn}</button>
                            <img src={img} alt="" />
                         </div>
                        )
                     })}  
                        <button className="home-faculties-items-item-bottom-button">Դիտել բոլորը</button>
                    </div>
                </div>
                <div className="home-faculties-items-item">
                    <div className="home-faculties-items-item-top">
                        <div>
                            <img src={homeFacultiesIcon2}/>
                        </div>
                        <h3>Վեբ Ծրագրավորման Ֆակուլտետ</h3>
                    </div>
                    <div className="home-faculties-items-item-bottom">
                     {homeFaculties.map(({id, text, btn, img}) => {
                        return(
                        <div className="home-faculties-items-item-bottom-item" key={id}>
                            <h4>{text}</h4>
                            <button>{btn}</button>
                            <img src={img} alt="" />
                         </div>
                        )
                     })}
                        <button className="home-faculties-items-item-bottom-button">Դիտել բոլորը</button>
                    </div>
                </div>
                <div className="home-faculties-items-item">
                    <div className="home-faculties-items-item-top">
                        <div>
                            <img src={homeFacultiesIcon3}/>
                        </div>
                        <h3>Վեբ Ծրագրավորման Ֆակուլտետ</h3>
                    </div>
                    <div className="home-faculties-items-item-bottom">
                     {homeFaculties.map(({id, text, btn,img}) => {
                        return(
                        <div className="home-faculties-items-item-bottom-item" key={id}>
                            <h4>{text}</h4>
                            <button>{btn}</button>
                            <img src={img} alt="" />
                         </div>
                        )
                     })}
                        <button className="home-faculties-items-item-bottom-button">Դիտել բոլորը</button>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default HomeFaculties