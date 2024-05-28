import "./Facultet.scss"
import facultetTitleImg from "../../assets/facultet/facultet-title-img.png"
import facultetProfessionItemBackimg from "../../assets/facultet/facultet-profession-item-backImg.png"
import facultetProfessionItemBackimgHover from "../../assets/facultet/facultet-profession-item-backImg-hover-.png"
import facultetProfessionItemimgHover from "../../assets/facultet/facultet-profession-iytem-img-hover.png"
import Container from "../common/container/Container"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"
import { FacultetPopup } from "./facultet-popup/FacultetPopup"

const Facultet = () => {
  const [active, setActive] = useState(1);
  const [facultiesData, setFacultiesData] = useState([]);
  const [facultiesProdactData, setFacultiesProdactData] = useState([]);
  const [filter, setFilter] = useState(1);

  const[show, setShow] = useState(false)






  useEffect(() => {
    async function getData() {
        try {
            const facultiesData = await axios.get("https://globalitacademy.am/GIAcademyApi/faculties/");
            const facultiesProdactData = await axios.get("https://globalitacademy.am/GIAcademyApi/facultet_product/");
            setFacultiesData(facultiesData.data);
            setFacultiesProdactData(facultiesProdactData.data)
        } catch (error) {
            console.log("Error")
        }
    }
    getData();
  }, []);

  const langState = useSelector((state) => state.lang.lang);

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredData = filter
  ? facultiesProdactData.filter((item) => item.fac_name === filter)
  : facultiesProdactData;
  // console.log(filteredData);


  return (
    <div className="facultet" >
      <Container>
        <div className="facultet-title">
            <img src={facultetTitleImg} alt="" />
            <div className="facultet-title-desc">
              <p>Մենք կօգնենք ձեզ <p>ընտրել ձեր ապագա մասնագիտությունը</p></p>
            </div>
            <button>Պատվիրել խորհրդատվություն</button>
        </div>
        <div className="facultet-professions">
          <div className="facultet-professions-left">
            {facultiesData.map(({id,fac_img, fac_name_hy, fac_name_ru, fac_name_en}) => {
              return(
                <div className="facultet-professions-left-item" key={id}
                onClick={() => {
                  if(id !== active){
                    setActive(id);
                    handleFilterChange(id)
                  }
                }} style={{backgroundColor: active === id ? "var(--light-red)" : "#2F2F2F"}}>
                  <img src={fac_img} alt="" />
                  <h4>{langState === "hy"? fac_name_hy: langState === "ru" ? fac_name_ru: fac_name_en}</h4>
                </div>
              )
            })}
          </div>

          <div className="facultet-professions-items">
            {filteredData.map(({id, back_img, logo, name_hy, name_ru, name_en, date_start_start, date_start_end, duration_hy, duration_ru, duration_en, online_logo, online_name, offline_logo, offline_name, individual_logo, individual_name_hy, individual_name_ru, individual_name_en, group_logo, group_name_hy, group_name_ru, group_name_en, but_name_hy, but_name_ru, but_name_en}) => {
              return(
              <div className="facultet-professions-items-item" key={id} onClick={() => {
                setShow((prev) => !prev)
              }}>
                <img src={back_img} alt="" className="facultet-professions-items-item-backimg"/>
                <img src={facultetProfessionItemBackimgHover} alt="" className="facultet-professions-items-item-backimg-hover"/>

                <div className="facultet-professions-items-item-title">
                  <img src={logo} alt="" />
                  <img src={facultetProfessionItemimgHover} alt="" className="facultet-professions-items-item-title-img-hover"/>
                  <p>{langState === "hy"? name_hy: langState === "ru" ? name_ru: name_en}</p>
                </div>
                <div className="facultet-professions-items-item-desc">
                  <p>Ընդունելություն</p>
                  <span>{date_start_start} - <span>{date_start_end}</span></span>
                  <p>{langState === "hy"? duration_hy: langState === "ru" ? duration_ru: duration_en}</p>
                </div>
                <div className="facultet-professions-items-item-about">
                  <span><img src={online_logo} alt="" /> {online_name}</span>
                  <span><img src={online_logo} alt="" /> {offline_name}</span>
                  <span><img src={individual_logo} alt="" /> {langState === "hy"? individual_name_hy: langState === "ru" ? individual_name_ru: individual_name_en}</span>
                  <span><img src={group_logo} alt="" /> {langState === "hy"? group_name_hy: langState === "ru" ? group_name_ru: group_name_en}</span>
                </div>
                  <button className="facultet-professions-items-item-button">{langState === "hy"? but_name_hy: langState === "ru" ? but_name_ru: but_name_en}</button>
              </div>
              )
            })}
          </div>
          <FacultetPopup show={show} setShow={setShow} facultetTitleImg={facultetTitleImg}/>
        </div>
      </Container>    
    </div>
  )
}

export default Facultet