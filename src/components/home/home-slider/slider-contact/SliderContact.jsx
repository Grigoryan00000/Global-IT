import React from "react";
import "./SliderContact.scss"

export const SliderContact = ({open, setOpen}) => {
    if(open){

        return (
          <div className="contact">
            <div className="contact-social">
              <div className="contact-social-item phone">
                <span>
                  <img src="" alt="" />
                  <label htmlFor="phone">09145433</label>
                  <input type="phone" id="phone" style={{display: "none"}}/>
                </span>
              </div>
              <div className="contact-social-item whatsapp" >
                <span>
                  <img src="" alt="" />
                  <p>Whatsapp</p>
                </span>
              </div>
              <div className="contact-social-item viber">
                <span>
                  <img src="" alt="" />
                  <p>Viber</p>
                </span>
              </div>
              <div className="contact-social-item telegram">
                <span>
                  <img src="" alt="" />
                  <p>Telegram</p>
                </span>
              </div>
            </div>
            <div className="contact-form">
              <h3>Պատվիրել զանգ</h3>
              <form>
                  <input type="text" />
                  <input type="date" />
                  <input type="phone" />
                  <button>Պատվիրել</button>
              </form>
            </div>
          </div>
        );
    }
    else{
        return null
    }
};
