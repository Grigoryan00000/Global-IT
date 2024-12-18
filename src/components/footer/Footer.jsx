import Container from '../common/container/Container'
import footerLogo from "../../assets/header/logowhite.png"

import "./Footer.scss"
import { CONFIG } from '../../config'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFacultiesId } from '../../redux/slices/FacultetSlice';


const Footer = () => {
    const langState = useSelector((state) => state.lang.lang);

    const location = useLocation().pathname;
    const navigate = useNavigate()
    const dispatch = useDispatch()

  let d = new Date();
  let year = d.getFullYear();
  console.log(year);

  
    
  


  return (
    <footer style={{marginTop: location==="/service"? "20px": location==="/service-info" ? "20px": "0px"}}>
        <Container>
            <div className="footer-top">
                <div className="footer-top-about">
                    <img src={footerLogo} alt="" />
                    <p>{langState==="hy"?"Առաջարկում ենք ծրագրային տարատեսակ լուծումներ։ Իրականացնում ենք աշխատաշուկայի պահանջներին համապատասխան ՏՏ ոլորտի դասընթացներ:":langState==="en"?"We offer various software solutions. We conduct IT training courses in line with the demands of the labor market.":"Мы предлагаем различные программные решения. Мы проводим IT-курсы в соответствии с требованиями рынка труда."}</p>
                </div>
                <div className="footer-top-firstList" >
                    {CONFIG.footerFirstListConfig.map(({id,title,title_ru, title_en,text,text_ru,text_en}) => {
                        return(
                            <div className="footer-top-firstList-item" key={id}>
                                <h4>{langState==="hy"?title:langState==="en"?title_en:title_ru}</h4>
                                <p onClick={()=> {
                                    dispatch(setFacultiesId(id))
                                    navigate("/facultet")
                                }}>{langState==="hy"?text:langState==="en"?text_en:text_ru}</p>
                            </div> 
                        )
                    })}
                </div>
                <div className="footer-top-secondList">
                    {CONFIG.footerSecondListConfig.map(({id, text,text_ru,text_en}) => {
                        return(
                            <div className="footer-top-secondList-item" key={id}>
                                <p>{langState==="hy"?text:langState==="en"?text_en:text_ru}</p>
                            </div> 
                        )
                    })}
                </div>
                <div className="footer-top-thirdList">
                    {CONFIG.footerThirdListConfig.map(({id, text1,text1_ru,text1_en, text2, text3}) => {
                        return(
                            <div className="footer-top-thirdList-item" key={id}>
                                <p>{langState==="hy"?"Հասցե՝ ":langState==="en"?"Address:   ":"Адрес: "}   </p>
                                <p>{langState==="hy"?"Հեռախոսահամար՝ ":langState==="en"?"Phone number:  ":"Номер телефона:  "} <a href="tel:+79001111111">{text2}</a></p>
                                <p>{langState==="hy"?"Էլ. փոստ : ":langState==="en"?"Address:  ":"Эл. почта:  "} <a href="mailto:mail@htmlacademy.ru">{langState==="hy"?text1:langState==="en"?text1_en:text1_ru}</a></p>
                            </div> 
                        )
                    })}
                </div>
            </div>
            <div className="footer-bottom">
                <p>{langState === "hy"? `Copyright ©${year} Բոլոր հեղինակային իրավունքները պաշտպանված են: 
                Կայքը պատրաստված է "ԳԼՈԲԱԼ ԱՅ ԹԻԱ"-ի կողմից, որը հանդիսանում է ընկերության Պաշտոնական կայքէջը: Կայքից նույթ տեղադրելիս հղումը globalitacademy.am-ին պարտադիր է:`:langState ==="ru" ? `© 2024. Все права защищены.
                Сайт создан компанией «ГЛОБАЛ ИТ» (ООО), которая является официальным сайтом компании. Ссылка на globalitacademy.am обязательна при размещении материала с сайта.`: `Copyright ©2024 All rights reserved.
                The website is made by "GLOBAL IT" (LLC), which is the official website of the company. A link to globalitacademy.am is mandatory when posting an item from the site.`}</p>
                <p className='responsive-text'>Copyright ©2023 Կայքից նույթ տեղադրելիս հղումը globalitc.am-ին պարտադիր է:</p>
            </div>
        </Container>
    </footer>
  )
}

export default Footer

