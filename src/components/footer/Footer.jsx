import Container from '../common/container/Container'
import footerLogo from "../../assets/footer/footer-logo.svg"
import "./Footer.scss"
import { CONFIG } from '../../config'
import { useLocation } from 'react-router-dom';


const Footer = () => {

    const location = useLocation().pathname;
    
  if (location === '/auth') {
    return null;
  }

  return (
    <footer style={{marginTop: location==="/service-info"?"100px":"0px"}}>
        <Container>
            <div className="footer-top">
                <div className="footer-top-about">
                    <img src={footerLogo} alt="" />
                    <p>ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ին: Մենք առաջարկում ենք ծրագրային տարատեսակ լուծումներ` վեբ կայքերի պատրաստումից մինչև մոբայլ հավելվածներ, խաղեր,արհեստական բանականություն, ավտոմատացման համակարգեր և այլն: Իրականացնում ենք նաև աշխատաշուկայի պահանջներին համապատասխան ՏՏ ոլորտի դասընթացներ:</p>
                </div>
                <div className="footer-top-firstList" >
                    {CONFIG.footerFirstListConfig.map(({id,title,text}) => {
                        return(
                            <div className="footer-top-firstList-item" key={id}>
                                <h4>{title}</h4>
                                <p>{text}</p>
                            </div> 
                        )
                    })}
                </div>
                <div className="footer-top-secondList">
                    {CONFIG.footerSecondListConfig.map(({id, text}) => {
                        return(
                            <div className="footer-top-secondList-item" key={id}>
                                <p>{text}</p>
                            </div> 
                        )
                    })}
                </div>
                <div className="footer-top-thirdList">
                    {CONFIG.footerThirdListConfig.map(({id, text1, text2, text3}) => {
                        return(
                            <div className="footer-top-thirdList-item" key={id}>
                                <p>Հասցե՝   {text1}</p>
                                <p>Հեռախոսահամար՝ {text2}</p>
                                <p>Էլ․ հասցե՝{text3}</p>
                            </div> 
                        )
                    })}
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright ©2023 Բոլոր հեղինակային իրավունքները պաշտպանված են:<br /> 
                Կայքը պատրաստված է "ԳԼՈԲԱԼ ԻՏ" (ՍՊԸ)-ի կողմից, որը հանդիսանում է ընկերության Պաշտոնական կայքէջը: Կայքից նույթ տեղադրելիս հղումը globalitc.am-ին պարտադիր է:</p>
                <p className='responsive-text'>Copyright ©2023 Կայքից նույթ տեղադրելիս հղումը globalitc.am-ին պարտադիր է:</p>
            </div>
        </Container>
    </footer>
  )
}

export default Footer

