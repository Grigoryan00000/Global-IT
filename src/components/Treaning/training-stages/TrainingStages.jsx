import React from 'react'
// import Slider from 'react-slick';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import './TrainingStages.scss';  
import Container from '../../common/container/Container';

import { useSelector } from 'react-redux/es/exports';

const TrainingStages = ({stagesData}) => {

    const langState = useSelector((state) => state.lang.lang)

  return (
    <div className='training-stages'>
        <Container>
            <Swiper
                modules={[Navigation, Pagination , A11y, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination = {{clickable: true}}
                loop={true}
                grabCursor
                autoplay={{
                delay: 2000,
                }}
            >
                {stagesData.map(({id, img, name_en, name_ru, name_hy, stage_name_en, stage_name_ru, stage_name_hy, text_en, text_ru, text_hy}) => {
                    return(
                    <SwiperSlide key={id}>
                        <div key={id} className="training-stages-item">
                            <h3 className="training-stages-item-stage">{langState==="hy"?stage_name_hy:langState==="ru"?stage_name_ru:stage_name_en}</h3>
                            <div className='training-stages-item-desc'>
                                <img src={img} alt={name_en} className="training-stages-item-img" />
                                <h3 className='training-stages-item-name'>{langState==="hy"?name_hy:langState==="ru"?name_ru:name_en}</h3>
                                <p className='training-stages-item-text'>{langState==="hy"?text_hy:langState==="ru"?text_ru:text_en}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    )
                } )}
            </Swiper>
        </Container>
      </div>
  )
}

export default TrainingStages