import { useSelector } from "react-redux";
import Container from "../../common/container/Container";
import "./HomeFriends.scss";
import { useState } from "react";
import { A11y, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";

const HomeFriends = ({ friendData }) => {
  const langState = useSelector((state) => state.lang.lang);
  const [a, setA] = useState(false);


  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    // 1200: {
    //   slidesPerView: 5,
    //   spaceBetween: 50
    // }
  };


  return (
    <div className="home-friends">
      <h2 className="home-friends-title">
        {langState === "hy"
          ? "Մեր Գործընկերները"
          : langState === "ru"
          ? "Наши партнеры"
          : "Our Partners"}
      </h2>
      <div className="home-friends-slider">
        <Container>
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          loop={true}
          grabCursor
          autoplay={{ delay: 1000 }}
          breakpoints={breakpoints}
        >
          {friendData.map(({ id, logo, name }) => (
            <SwiperSlide key={id}>
                <img
                  src={logo}
                  alt={`${name} logo`}
                  onClick={() => setA((prev) => !prev)}
                />
            </SwiperSlide>
          ))}
        </Swiper>
          </Container>
      </div>
    </div>
  );
};

export default HomeFriends;
