import Container from '../common/container/Container'
import footerLogo from "../../assets/footer/footer-logo.svg"
import { CONFIG } from '../../config'

const Footer = () => {
  return (
    <footer>
        <Container>
            <div className="footer-top">
                <div className="footer-top-about">
                    <img src={footerLogo} alt="" />
                    <p>ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ին: Մենք առաջարկում ենք ծրագրային տարատեսակ լուծումներ` վեբ կայքերի պատրաստումից մինչև մոբայլ հավելվածներ, խաղեր,արհեստական բանականություն, ավտոմատացման համակարգեր և այլն: Իրականացնում ենք նաև աշխատաշուկայի պահանջներին համապատասխան ՏՏ ոլորտի դասընթացներ:</p>
                </div>
                {/* <div className="footer-top-firstList" >
                    {CONFIG.footerFirstListConfig.map(({id,title,text}) => {
                        return(

                            
                        )
                    })}
                </div> */}
                <div className="footer-top-secondList"></div>
                <div className="footer-top-contact"></div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer

