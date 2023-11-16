import { useSelector } from "react-redux"
import Container from "../../common/container/Container"
import "./HomeFriends.scss"
const HomeFriends = () => {
    const homeFriends = useSelector((state) => state.homeFriends.homeFriends)
  return (
    <div className="home-friends">
        <Container>
            <h2 className="home-friends-title">Մեր  Գործընկերները</h2>
            <div className="home-friends-items">
                {homeFriends.map(({id,img}) => {
                    return(
                        <img src={img} alt="" key={id}/>
                    )
                })}
            </div>
        </Container>
    </div>
  )
}

export default HomeFriends