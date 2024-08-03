import React from 'react'
import "./TrainingReg.scss"
import doneImg from "../../../assets/treaning/training-reg/done.png"

const TrainingReg = ({open, setOpen}) => {
  return (
    <div className='training-registration' style={{display: open?"block":"none"}}>
        <h1>Գրանցվել Դասընթացին</h1>
        <p>Դասընթացների անցկացման տարբերակները</p>
        <div className='training-registration-group-alone table'>
            <div className="training-registration-group-alone-item left block" style={{borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px"}}>
                <img src={doneImg} alt="" />
                <p>Խմբային դասընթացներ</p>
            </div>
            <div className="training-registration-group-alone-item rigth block">
                <img src={doneImg} alt="" />
                <p>Անհատական դասընթացներ</p>
            </div>
        </div>
        <div className="training-registration-method table">
            <div className="training-registration-method-item left block">
                <img src={doneImg} alt="" />
                <p>Վիդեո դասեր</p>
            </div>
            <div className="training-registration-method-item block">
                <img src={doneImg} alt="" />
                <p>Ուղիղ միացմամբ</p>
            </div>
            <div className="training-registration-method-item rigth block">
                <img src={doneImg} alt="" />
                <p>Դասասենյակում</p>
            </div>
        </div>
        <div className="training-registration-lang table">
            <div className="training-registration-lang-item left block">
                <img src={doneImg} alt="" />
                <p>Հայերեն</p>
            </div>
            <div className="training-registration-lang-item block">
                <img src={doneImg} alt="" />
                <p>Ռուսերեն</p>
            </div>
            <div className="training-registration-lang-item rigth block">
                <img src={doneImg} alt="" />
                <p>Անգլերեն</p>
            </div>
        </div>
        <p>Դասընթացի արժեքը կազմում է`</p>
        <div>
            <p>Ընդհանուր Գումար</p>
            <div className='price'>
                <p>230 000 դրամ</p> <del>270 000</del>  
            </div>
        </div>
        <div>
            <p>Ամսեկան Վճարման դեպքում</p>
            <div className='price'>
                <p>38 000 դրամ</p> <del>45 000</del>
            </div>
        </div>
        <div className="button">
            <p>Գրանցվել</p>
        </div>

        <div className='close-window' onClick={() => {
            setOpen(false)
        }}>
            <div className="close-reg">
                <p>x</p>
            </div>
        </div>

    </div>
  )
}

export default TrainingReg;