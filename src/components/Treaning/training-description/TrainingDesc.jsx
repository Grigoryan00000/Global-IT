import React from 'react'
import "./TrainingDesc.scss"
import time from "../../../assets/treaning/training-description/time.png"
import timeBottom from "../../../assets/treaning/training-description/time-bottom.png"
import offline from "../../../assets/treaning/training-description/offline.png"
import online from "../../../assets/treaning/training-description/online.png"
import group from "../../../assets/treaning/training-description/group.png"
import alone from "../../../assets/treaning/training-description/alone.png"
import langHy from "../../../assets/treaning/training-description/lang-hy.png"
import langRu from "../../../assets/treaning/training-description/lang-ru.png"
import langEn from "../../../assets/treaning/training-description/lang-en.png"

const TrainingDesc = () => {
  return (
    <div className='training-description'>
        <div className='training-description-time'>
            <div className='training-description-time-top'>
                <div className='training-description-time-img'>
                    <img src={time} alt="" />
                </div>
                <p>4 - 6 ամիս <br/> Շաբաթական 3 անգամ</p>
            </div>
            <div className='training-description-time-bottom'>
                <div className='training-description-time-img'>
                    <img src={timeBottom} alt="" />
                </div>
                <p>1 ԴԱՍԸ` <br/>1.5-2ժ տևողությամբ</p>
            </div>  
        </div>
        <div className='training-description-method border'>
            <div className="training-description-method-top">
                <div className='training-description-method-top-img'>
                    <img src={offline} alt="" />
                </div>
                <p>Offline</p>
            </div>
            <div className="training-description-method-bottom">
                <div className="training-description-method-bottom-img">
                    <img src={online} alt="" />
                </div>
                <p>Online</p>
            </div>
        </div>
        <div className='training-description-lang border'>
            <div className="training-description-lang-left">
                <div className='training-description-lang-left-top'>
                    <img src={group} alt="" />
                    <p>Խմբային</p>
                </div>
                <div className='training-description-lang-left-bottom'>
                    <p>Լեզուներ`</p>
                </div>
            </div>
            <div className="training-description-lang-right">
                <div className="training-description-lang-right-top">
                    <img src={alone} alt="" />
                    <p>Անհատական</p>
                </div>
                <div className="training-description-lang-right-bottom">
                    <img src={langHy} alt="" />
                    <img src={langRu} alt="" />
                    <img src={langEn} alt="" />
                </div>
            </div>
        </div>
        <div className='training-description-reg border'>
            <div className="training-description-reg-left">
                <div className="training-description-reg-left-top">
                    <p>ՄՆԱՑ`</p>
                </div>
                <div className="training-description-reg-left-bottom">
                    <p><span>3</span>/ 5</p>
                    <p>ԳՐԱՆՑՈՒՄ</p>
                </div>
            </div>
            <div className="training-description-reg-right">
                <div className="training-description-reg-right-top">
                    <p>ՄՈՏԱԿԱ ԴԱՍԸՆԹԱՑ</p>
                </div>
                <div className="training-description-reg-right-bottom">
                    <div className="training-description-reg-right-bottom-day">
                        <p>28</p>
                        <p>ՕՐ</p>
                    </div>
                    <div className="training-description-reg-right-bottom-hour">
                        <p>11</p>
                        <p>ԺԱՄ</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrainingDesc