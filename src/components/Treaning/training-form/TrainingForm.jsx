import React, { useState } from 'react';
import './TrainingForm.scss';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const TrainingForm = ({ openForm, setOpenForm, groupType, language, sessionType }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    
    const treaningType = useSelector((state) => state.homeFaculties.facultiesItemName);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(''); // Clear previous message
    
    const treaningType = useSelector((state) => state.homeFaculties.facultiesItemName)
    const langState = useSelector((state) => state.lang.lang)

    const handleSubmit = async (e) => {
        e.preventDefault(); // Предотвращает перезагрузку страницы

        if (!name || !email || !phone) {
            toast.error(langState==="hy"?"Լրացրեք բոլոր դաշտերը":langState==="ru"?"Заполните все поля":"Fill in all fields");
            return;
          }

        const requestData = {
            name,
            email,
            phone,
            groupType,
            language,
            sessionType,
            treaningType
        };

        try {
            const response = await axios.post("https://globalitacademy.am/GIAcademyApi/treaning_request/", requestData);
            setMessage('The request has been successfully sent!');
            sessionType ,
            treaningType
        };

        

        console.log(requestData);
        

        try {
            toast.promise(
                axios.post("https://globalitacademy.am/GIAcademyApi/treaning_request/", requestData),
                {
                    pending: langState==="hy"?"Դիմումը ուղարկվում է...":langState==="ru"?"Заявка отправляется...":"Request sending...",
                    success: langState==="hy"?"Դիմումը ուղղարկված է!":langState==="ru"?"Заявка отправлено!":"Request sent!",
                    error: langState==="hy"?"Խնդիր, դիմումն ուղղարկելիս. Խնդրում ենք կրկին փորձեք.":langState==="ru"?"Ошибка при отправлении заявки. Пожалуйста, попробуйте еще раз.":"Error sending request. Please try again."
                }
            )
            setName('');
            setEmail('');
            setPhone('');
        } catch (error) {
            if (error.response) {
                // Server responded with a status other than 200 range
                if (error.response.status === 400) {
                    setMessage('Invalid data provided. Please check the form fields and try again.');
                } else if (error.response.status === 500) {
                    setMessage('Server error. Please try again later.');
                } else {
                    setMessage(`Unexpected error: ${error.response.status}. Please try again.`);
                }
            } else if (error.request) {
                // No response was received from the server
                setMessage('Network error. Please check your internet connection and try again.');
            } else {
                // Something else went wrong in setting up the request
                setMessage(`An error occurred: ${error.message}`);
            }
            console.error(error);
        } finally {
            setLoading(false);
            console.error(error);
        }
    };

    return (
        <>

        <div className='training-form' style={{ display: openForm ? "block" : "none" }}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
=======
            <h2>{langState==="hy"?"Գրանցվել Դասընթացին":langState==="ru"?"Зарегистрироваться на курс":"Register for the course"}</h2>
            <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        required
                    />
                </label>
                <label>
                    Email:
                        placeholder={langState==="hy"?"Անուն":langState==="ru"?"Имя":"Name"}
                        />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        required
                    />
                </label>
                <label>
                    Phone:
                        placeholder={langState==="hy"?"Էլ․ փոստ":langState==="ru"?"Эл. почта":"Email"}
                        />

                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Your phone"
                        required
                    />
                </label>
                <div className='btn'>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send'}

                        placeholder={langState==="hy"?"Հեռախոսահամար":langState==="ru"?"Номер телефона":"Phone number"}
                        />
                <div className='btn'>
                    <button type="submit">
                    {langState==="hy"?"Ուղղարկել":langState==="ru"?"Отправить":"Send"}

                    </button>
                </div>
            </form>


            {message && <p className='message'>{message}</p>}



            <div className='close-window' onClick={() => setOpenForm(false)}>
                <div className="close-reg">
                    <p>x</p>
                </div>
            </div>
        </div>
        <ToastContainer 
            theme='dark'
            autoClose={3000}/>
        </>
    );
};

export default TrainingForm;
