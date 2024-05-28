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
                  <input type="text" />
                  <input type="email" />
                  <input type="phone" />
                  <input type="text" />
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
