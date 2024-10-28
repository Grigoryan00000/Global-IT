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
        <div className='table'>
            {priceType.map(({teraning_price, treaning_name_hy,treaning_name_ru, treaning_name_en, id}) => {
                return(
                    <div key={id} className='block' style={{backgroundColor: id===checkType?"#A35BFF":"transparent"}} onClick={() => {
                        setCheckType(id)
                        setTypePrice(teraning_price)
                        setGroupType(treaning_name_hy)
                    }}>
                        <img src={doneImg} alt='doneImg'/>
                        <p>{treaning_name_hy}</p>
                    </div>                
                    )
            })}
        </div>
        <div className='table'>
            {priceConnect.map(({teraning_price, treaning_name_hy,treaning_name_ru, treaning_name_en, id}) => {
                return(
                    <div key={id} className='block' style={{backgroundColor: id===checkConnect?"#A35BFF":"transparent"}} onClick={() => {
                        setCheckConnect(id)
                        setConnectPrice(teraning_price)
                        setSessionType(treaning_name_hy)
                    }}>
                        <img src={doneImg} alt='doneImg'/>
                        <p>{treaning_name_hy}</p>
                    </div>
                )
            })}
        </div>
        <div className='table'>
            {priceLang.map(({teraning_price, treaning_name_hy,treaning_name_ru, treaning_name_en, id}) => {
                return(
                    <div key={id} className='block' style={{backgroundColor: id===checkLang?"#A35BFF":"transparent"}} onClick={() => {
                        setCheckLang(id)
                        setLangPrice(teraning_price)
                        setLanguage(treaning_name_hy)
                    }}>
                        <img src={doneImg} alt='doneImg'/>
                        <p>{treaning_name_hy}</p>
                    </div>
                )
            })}
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