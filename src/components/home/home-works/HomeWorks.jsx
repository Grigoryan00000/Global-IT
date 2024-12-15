import { useDispatch, useSelector } from "react-redux";
import "./HomeWorks.scss";

import Container from "../../common/container/Container";
import { fetchWorksData } from "../../../redux/slices/HomeWorksSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const HomeWorks = () => {
  const langState = useSelector((state) => state.lang.lang);
  const { homeWorks, status, error } = useSelector((state) => state.homeWorks);
  console.log(homeWorks);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchWorksData());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="home-works">
      <Container>
        <h2 className="home-works-title">
          {langState === "hy"
            ? "Մեր Աշխատանքները"
            : langState === "ru"
              ? "Наши работы"
              : "Our Works"}
        </h2>

        <div className="home-works-items">
          {status === "succeeded" && homeWorks ? (
            homeWorks.map(
              ({
                id,
                name_hy,
                name_ru,
                name_en,
                dev_name_hy,
                dev_name_ru,
                dev_name_en,
                works_img,
                works_name,
                works_txt_hy,
                works_txt_ru,
                works_txt_en,
              }) => {
                return (
                  <div
                    className="home-works-items-item"
                    key={id}
                    style={{ background: { works_img } }}
                    onClick={() => {
                      navigate("/https://car-bus-go.vercel.app/start-page/1")
                    }}
                  >
                    <div className="home-works-items-item-deck">
                      <button>
                        {langState === "hy"
                          ? dev_name_hy
                          : langState === "ru"
                            ? dev_name_ru
                            : dev_name_en}
                      </button>
                    </div>
                    <div className="home-works-items-item-title">
                      <h3>{works_name}</h3>
                      <p
                        style={{
                          fontSize:
                            langState === "ru" || langState === "en"
                              ? "18px"
                              : "15px",
                        }}
                      >
                        {langState === "hy"
                          ? works_txt_hy
                          : langState === "ru"
                            ? works_txt_ru
                            : works_txt_en}
                      </p>
                    </div>
                  </div>
                );
              }
            )
          ) : (
            <div>no availible</div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default HomeWorks;
