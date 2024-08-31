import React from 'react';
import './FacultetPopup.scss'

export const FacultetPopup = ({show, setShow, facultetTitleImg}) => {
    if(show){
        return (
          <div className='facultet-popup'>
            <div className="facultet-popup-item">
              <div className="facultet-popup-item-title">
                  <img src={facultetTitleImg} alt="" />
                  <h4>Անվճար խորhրդատվություն</h4>
              </div>
              <div className="facultet-popup-item-registr">
                  <input type="text" placeholder='Անուն Ազգանուն'/>
                  <input type="email" placeholder='Email'/>
                  <input type="phone" placeholder='+374'/>
                  <input type="text" placeholder='Հարմար ժամեր'/>
              </div>
              <button className='facultet-popup-item-button'>Ուղարկել</button>
              <button className='close' onClick={() => {
                setShow(false)
              }}>X</button>
            </div>
          </div>
        )
    }
}
