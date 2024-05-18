import Container from '../common/container/Container'
import "./Footer.scss"
import { CONFIG } from '../../config'
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Footer = () => {
    const [footerData, setFooterData] = useState([])
    const location = useLocation();

    useEffect(() => {
      async function getData() {
          try {
              const footerData = await axios.get("https://globalitacademy.am/GIAcademyApi/footer/");
              setFooterData(footerData.data);
          } catch (error) {
            
              console.log("Error")
          }
      }
      getData();
  }, []);


  if (location.pathname === '/auth') {

    // location = useLocation().pathname;
    
  if (location === '/auth') {
    return null;
  }



  return (
    <footer style={{marginTop: location==="/service-info"?"100px":"0px"}}>
        <Container>
            {footerData.map(({id, logo, text_hy, text_ru, text_en, fc, tw, ins, linked, address_hy, address_ru, addrees_en, phone, mail, back_text_hy, back_text_ru, back_text_en}) => {
                return(
                    <div className="footer-row" key={id}>
                        <div className="footer-top">
                            <div className="footer-top-about">
                                <img src={logo} alt="" />
                                <p>{text_hy}</p>
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
                                <p>Հասցե՝   {address_hy}</p>
                                <p>Հեռախոսահամար՝  {phone}</p>
                                <p>Էլ․ հասցե՝  {mail}</p>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>{back_text_hy}</p>
                        </div>
                    </div>
                )
            })}
            
        </Container>
    </footer>
  )
}
}

export default Footer

