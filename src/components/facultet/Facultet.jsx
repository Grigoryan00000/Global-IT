import "./Facultet.scss"
import facultetTitleImg from "../../assets/facultet/facultet-title-img.png"
import facultetProfessionItemBackimgHover from "../../assets/facultet/facultet-profession-item-backImg-hover-.png"
import facultetProfessionItemimgHover from "../../assets/facultet/facultet-profession-iytem-img-hover.png"
import Container from "../common/container/Container"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import { setFacultiesItemId, setFacultiesItemName } from "../../redux/slices/HomeFacultiesSlices"
import { setFacultiesId } from "../../redux/slices/FacultetSlice"

const Facultet = () => {
  const activeFaculties = useSelector((state) => state.facultet.facultiesId)
  const [facultiesData, setFacultiesData] = useState([]);
  const [facultiesProdactData, setFacultiesProdactData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const langState = useSelector((state) => state.lang.lang);
  const currentId = useSelector((state) => state.homeFaculties.facultiesItemId);

  useEffect(() => {
    async function getData() {
      try {
        const facultiesData = await axios.get("https://globalitacademy.am/GIAcademyApi/faculties/");
        const facultiesProdactData = await axios.get("https://globalitacademy.am/GIAcademyApi/facultet_product/");
        setFacultiesData(facultiesData.data);
        setFacultiesProdactData(facultiesProdactData.data);
      } catch (error) {
        console.log("Error", error);
      }
    }
    getData();
  }, []);

  // useEffect to filter data when activeFaculties changes
  useEffect(() => {
    if (activeFaculties) {
      const filtered = facultiesProdactData.filter((item) => item.fac_name === activeFaculties);
      setFilteredData(filtered);
    } else {
      setFilteredData(facultiesProdactData); // If no filter is active, show all data
    }
  }, [activeFaculties, facultiesProdactData]);

  return (
    <div className="facultet">
      <Container>
        <div className="facultet-title">
          <img src={facultetTitleImg} alt="" />
          <div className="facultet-title-desc">
            <p>
              {langState === "hy"
                ? "Մենք կօգնենք ձեզ"
                : langState === "ru"
                ? "Мы поможем вам"
                : "We will help you"}
              <p>ընտրել ձեր ապագա մասնագիտությունը</p>
            </p>
          </div>
          <button>
            {langState === "hy"
              ? "Պատվիրել խորհրդատվություն"
              : langState === "ru"
              ? "Мы поможем вам"
              : "We will help you"}
          </button>
        </div>
        <div className="facultet-professions">
          <div className="facultet-professions-left">
            {facultiesData.map(({ id, fac_img, fac_name_hy, fac_name_ru, fac_name_en }) => {
              return (
                <div
                  className="facultet-professions-left-item"
                  key={id}
                  onClick={() => {
                    if (id !== activeFaculties) {
                      dispatch(setFacultiesId(id));
                    }
                  }}
                  style={{
                    backgroundColor: activeFaculties === id ? "var(--light-red)" : "#2F2F2F",
                  }}
                >
                  <div>
                    <img src={fac_img} alt="" />
                    <h4>
                      {langState === "hy"
                        ? fac_name_hy
                        : langState === "ru"
                        ? fac_name_ru
                        : fac_name_en}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="facultet-professions-items">
            {filteredData.map(
              ({
                id,
                back_img,
                logo,
                name_hy,
                name_ru,
                name_en,
                date_start_start,
                date_start_end,
                duration_hy,
                duration_ru,
                duration_en,
                online_logo,
                online_name,
                offline_logo,
                offline_name,
                individual_logo,
                individual_name_hy,
                individual_name_ru,
                individual_name_en,
                group_logo,
                group_name_hy,
                group_name_ru,
                group_name_en,
                but_name_hy,
                but_name_ru,
                but_name_en,
              }) => {
                return (
                  <div
                    className="facultet-professions-items-item"
                    key={id}
                    onClick={() => {
                      dispatch(setFacultiesItemId(id));
                      dispatch(setFacultiesItemName(name_hy));
                      navigate(`training/${name_en}`);
                    }}  
                  >
                    <img
                      src={back_img}
                      alt=""
                      className="facultet-professions-items-item-backimg"
                    />
                    <img
                      src={facultetProfessionItemBackimgHover}
                      alt=""
                      className="facultet-professions-items-item-backimg-hover"
                    />

                    <div className="facultet-professions-items-item-title">
                      <img src={logo} alt="" />
                      <img
                        src={facultetProfessionItemimgHover}
                        alt=""
                        className="facultet-professions-items-item-title-img-hover"
                      />
                      <p>
                        {langState === "hy"
                          ? name_hy
                          : langState === "ru"
                          ? name_ru
                          : name_en}
                      </p>
                    </div>
                    <div className="facultet-professions-items-item-desc">
                      <p>Ընդունելություն</p>
                      <span>
                        {date_start_start} - <span>{date_start_end}</span>
                      </span>
                      <p>
                        {langState === "hy"
                          ? duration_hy
                          : langState === "ru"
                          ? duration_ru
                          : duration_en}
                      </p>
                    </div>
                    <div className="facultet-professions-items-item-about">
                      <span>
                        <img src={online_logo} alt="" /> {online_name}
                      </span>
                      <span>
                        <img src={offline_logo} alt="" /> {offline_name}
                      </span>
                      <span>
                        <img src={individual_logo} alt="" />{" "}
                        {langState === "hy"
                          ? individual_name_hy
                          : langState === "ru"
                          ? individual_name_ru
                          : individual_name_en}
                      </span>
                      <span>
                        <img src={group_logo} alt="" />{" "}
                        {langState === "hy"
                          ? group_name_hy
                          : langState === "ru"
                          ? group_name_ru
                          : group_name_en}
                      </span>
                    </div>
                    <button className="facultet-professions-items-item-button">
                      {langState === "hy"
                        ? but_name_hy
                        : langState === "ru"
                        ? but_name_ru
                        : but_name_en}
                    </button>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Facultet;
