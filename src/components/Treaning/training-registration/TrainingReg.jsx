import React, { useEffect, useState } from 'react'
import "./TrainingReg.scss"
import doneImg from "../../../assets/treaning/training-reg/done.png"
import TrainingForm from '../training-form/TrainingForm'
import { useSelector } from 'react-redux'

import { TbCurrencyDram } from "react-icons/tb";


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

    const langState = useSelector(state => state.lang.lang) 


    useEffect(() => {

        setAllPrice(langPrice + typePrice + connectPrice)

    }, [langPrice, typePrice, connectPrice])


  return (
    <div className={`training-container ${openForm ? 'flipped' : ''}`}>
        <div className="training-front">
            <div className='training-registration' style={{display: open?"block":"none"}}>
                <p style={{fontSize: "26px", textAlign:"center"}}>{langState==="hy"?"Դասընթացների անցկացման տարբերակները":langState==="ru"?"Варианты обучения":"Training options"}</p>
                <div className='table'>
                    {priceType.map(({teraning_price, treaning_name_hy, treaning_name_ru, treaning_name_en, id }, index) => {
                        // Check if it's the first or last item
                        const isFirstItem = index === 0;
                        const isLastItem = index === priceType.length - 1;

                        return (
                            <div 
                                key={id} 
                                className='block' 
                                style={{
                                    backgroundColor: id === checkType ? "#A35BFF" : "transparent",
                                    borderRadius: isFirstItem ? "16px 0 0 16px" : isLastItem ? "0 16px 16px 0" : "0"
                                }}
                                onClick={() => {
                                    setCheckType(id);
                                    setTypePrice(teraning_price);
                                    setGroupType(treaning_name_hy);
                                }}
                            >
                                <img src={doneImg} alt='doneImg' />
                                <p>{langState==="hy"?treaning_name_hy:langState==="ru"?treaning_name_ru:treaning_name_en}</p>
                            </div>
                        );
                    })}

                </div>
                <div className='table'>
                    {priceConnect.map(({teraning_price, treaning_name_hy, treaning_name_ru, treaning_name_en, id }, index) => {
                        // Check if it's the first or last item
                        const isFirstItem = index === 0;
                        const isLastItem = index === priceConnect.length - 1;

                        return (
                            <div 
                                key={id} 
                                className='block' 
                                style={{
                                    backgroundColor: id === checkConnect ? "#A35BFF" : "transparent",
                                    borderRadius: isFirstItem ? "16px 0 0 16px" : isLastItem ? "0 16px 16px 0" : "0"
                                }}
                                onClick={() => {
                                    setCheckConnect(id);
                                    setConnectPrice(teraning_price);
                                    setSessionType(treaning_name_hy);
                                }}
                            >
                                <img src={doneImg} alt='doneImg' />
                                <p>{langState==="hy"?treaning_name_hy:langState==="ru"?treaning_name_ru:treaning_name_en}</p>
                            </div>
                        );
                    })}

                </div>
                <div className='table'>
                    {priceLang.map(({teraning_price, treaning_name_hy, treaning_name_ru, treaning_name_en, id }, index) => {
                        // Check if it's the first or last item
                        const isFirstItem = index === 0;
                        const isLastItem = index === priceLang.length - 1;

                        return (
                            <div 
                                key={id} 
                                className='block' 
                                style={{
                                    backgroundColor: id === checkLang ? "#A35BFF" : "transparent",
                                    borderRadius: isFirstItem ? "16px 0 0 16px" : isLastItem ? "0 16px 16px 0" : "0"
                                }}
                                onClick={() => {
                                    setCheckLang(id);
                                    setLangPrice(teraning_price);
                                    setLanguage(treaning_name_hy);
                                }}
                            >
                                <img src={doneImg} alt='doneImg' />
                                <p>{langState==="hy"?treaning_name_hy:langState==="ru"?treaning_name_ru:treaning_name_en}</p>
                            </div>
                        );
                    })}
                </div>
                <p style={{textAlign:"center"}}>{langState==="hy"?"Դասընթացի արժեքը կազմում է`":langState==="ru"?"Стоимость курса составляет":"The cost of the course is"}</p>
                <div>
                    <p>{langState==="hy"?"Ընդհանուր Գումար`":langState==="ru"?"Общая сумма":"Total Amount"}</p>
                    <div className='price'>
                        <div><p>{allPrice*6}</p><TbCurrencyDram style={{fontSize: "40px"}}/></div> <del>{allPrice*6 + 60000}</del>  
                    </div>
                </div>
                <div>
                <p>{langState==="hy"?"Ամսեկան Վճարման դեպքում`":langState==="ru"?"При ежемесячном платеже":"With monthly payment"}</p>
                <div className='price'>
                    <div><p>{allPrice}</p><TbCurrencyDram style={{fontSize: "40px"}}/></div> <del>{allPrice + 10000}</del>  
                </div>
                </div>
                <div className="button" onClick={() => {
                    setOpenForm(true)
                    setOpen(false)
                }}>
                    <p>{langState==="hy"?"Գրանցվել":langState==="ru"?"Зарегистрироваться":"Register"}</p>
                </div>

                <div className='close-window' onClick={() => {
                    setOpen(false)
                }}>
                    <div className="close-reg">
                        <p>x</p>
                    </div>
                </div>

            </div>
        </div>
    
        <div className='training-back'>
            <TrainingForm openForm={openForm} setOpenForm={setOpenForm} groupType={groupType} language={language} sessionType={sessionType}/>
        </div>
    </div>
  )
}

export default TrainingReg;