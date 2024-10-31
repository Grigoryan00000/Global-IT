import React, { useEffect, useState } from 'react'
import "./TrainingReg.scss"
import doneImg from "../../../assets/treaning/training-reg/done.png"
import TrainingForm from '../training-form/TrainingForm'

const TrainingReg = ({open, setOpen, priceLang, priceType, priceConnect, openForm, setOpenForm}) => {
    const [checkLang, setCheckLang] = useState(null)
    const [checkType, setCheckType] = useState(null)
    const [checkConnect, setCheckConnect] = useState(null)

    const [langPrice, setLangPrice] = useState(null)
    const [typePrice, setTypePrice] = useState(null)
    const [connectPrice, setConnectPrice] = useState(null)

    const[groupType, setGroupType] = useState("Խմբային դասընթացներ")
    const[language, setLanguage] = useState("Հայերեն")
    const[sessionType, setSessionType] = useState("Վիդեո դասեր")

    const [allPrice, setAllPrice] = useState(null)


    useEffect(() => {

        setAllPrice(langPrice + typePrice + connectPrice)

    }, [langPrice, typePrice, connectPrice])


  return (
    <>

    <div className='training-registration' style={{display: open?"block":"none"}}>
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
                <p>{allPrice*6} դրամ</p> <del>{allPrice*6 + 60000}</del>  
            </div>
        </div>
        <div>
            <p>Ամսեկան Վճարման դեպքում</p>
            <div className='price'>
                <p>{allPrice} դրամ</p> <del>{allPrice + 10000}</del>
            </div>
        </div>
        <div className="button" onClick={() => {
            setOpenForm(true)
            setOpen(false)
        }}>
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
    <TrainingForm openForm={openForm} setOpenForm={setOpenForm} groupType={groupType} language={language} sessionType={sessionType}/>
    </>
  )
}

export default TrainingReg;