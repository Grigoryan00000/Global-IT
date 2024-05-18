import { useSelector } from "react-redux"
import Container from "../../common/container/Container"
import "./HomeFriends.scss"
import { useState } from "react";
const HomeFriends = ({friendData}) => {

  const langState = useSelector((state) => state.lang.lang);
  const [a, setA] = useState(false)

  return (
    <div className="home-friends">
        <Container>
            <h2 className="home-friends-title">{langState === "hy"? "Մեր Գործընկերները": langState === "ru" ? "Наши партнеры": "Our Partners"}</h2>
            <div className="home-friends-items">
                {friendData.map(({id, logo}) => {
                    return(
                        <img src={logo} alt="" key={id} onClick={() => {
                            setA((prev) => !prev)
                        }}/>
                    )
                })}
            </div>
        </Container>
    </div>
  )
}

export default HomeFriends