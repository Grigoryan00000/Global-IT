import React from 'react'
import Container from '../../common/container/Container'
import "./HomeContact.scss"

const HomeContact = () => {
  return (
    <div className='home-contact'>
        <Container>
            <h2 className='home-contact-title'>Կապ մեզ հետ</h2>
            <div className="home-contact-item">
                <div className="home-contact-item-send">
                    <input type="text" placeholder='Թեմա'className='home-contact-item-send-topic'/>
                    <input type="text" placeholder='Նկարագրություն' className='home-contact-item-send-desc'/>
                    <button>Ուղարկել</button>
                </div>
                <div className="home-contact-item-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1523.4605883243535!2d44.50202193868345!3d40.210816291203685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd58e0816601%3A0xbcb962a8687b1007!2sGlobal%20IT%20Company!5e0!3m2!1sru!2sam!4v1700247939677!5m2!1sru!2sam" style={{width: "500px", height: "400px",border: "0",borderRadius: "20px", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade"}}></iframe>                    
                </div>
            </div>
        </Container>
    </div>
  )
}

export default HomeContact