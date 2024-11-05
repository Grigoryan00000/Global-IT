import React, { useState } from 'react';
import './TrainingForm.scss';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TrainingForm = ({ openForm, setOpenForm, groupType, language, sessionType }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    
    const treaningType = useSelector((state) => state.homeFaculties.facultiesItemName);
    const langState = useSelector((state) => state.lang.lang);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents page reload
        setMessage(''); // Clear previous message

        if (!name || !email || !phone) {
            toast.error(
                langState === 'hy' ? "Լրացրեք բոլոր դաշտերը" :
                langState === 'ru' ? "Заполните все поля" :
                "Fill in all fields"
            );
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
            setLoading(true);
            await toast.promise(
                axios.post("https://globalitacademy.am/GIAcademyApi/treaning_request/", requestData),
                {
                    pending: langState === 'hy' ? "Դիմումը ուղարկվում է..." :
                            langState === 'ru' ? "Заявка отправляется..." :
                            "Request sending...",
                    success: langState === 'hy' ? "Դիմումը ուղարկված է!" :
                             langState === 'ru' ? "Заявка отправлено!" :
                             "Request sent!",
                    error: langState === 'hy' ? "Խնդիր, դիմումն ուղղարկելիս. Խնդրում ենք կրկին փորձեք." :
                            langState === 'ru' ? "Ошибка при отправлении заявки. Пожалуйста, попробуйте еще раз." :
                            "Error sending request. Please try again."
                }
            );
            setName('');
            setEmail('');
            setPhone('');
        } catch (error) {
            console.error(error);
            setMessage(
                error.response?.status === 400
                    ? 'Invalid data provided. Please check the form fields and try again.'
                    : error.response?.status === 500
                    ? 'Server error. Please try again later.'
                    : `An error occurred: ${error.message}`
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="training-form" style={{ display: openForm ? "block" : "none" }}>
                <h2>{langState === 'hy' ? "Գրանցվել Դասընթացին" : langState === 'ru' ? "Зарегистрироваться на курс" : "Register for the course"}</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        {langState === 'hy' ? "Անուն" : langState === 'ru' ? "Имя" : "Name"}:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={langState === 'hy' ? "Անուն" : langState === 'ru' ? "Имя" : "Name"}
                            required
                        />
                    </label>
                    <label>
                        {langState === 'hy' ? "Էլ․ փոստ" : langState === 'ru' ? "Эл. почта" : "Email"}:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={langState === 'hy' ? "Էլ․ փոստ" : langState === 'ru' ? "Эл. почта" : "Email"}
                            required
                        />
                    </label>
                    <label>
                        {langState === 'hy' ? "Հեռախոսահամար" : langState === 'ru' ? "Номер телефона" : "Phone number"}:
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder={langState === 'hy' ? "Հեռախոսահամար" : langState === 'ru' ? "Номер телефона" : "Phone number"}
                            required
                        />
                    </label>
                    <div className="btn">
                        <button type="submit" disabled={loading}>
                            {loading ? 
                                (langState === 'hy' ? "Ուղարկվում է..." : langState === 'ru' ? "Отправляется..." : "Sending...") :
                                (langState === 'hy' ? "Ուղղարկել" : langState === 'ru' ? "Отправить" : "Send")}
                        </button>
                    </div>
                </form>
                {message && <p className="message">{message}</p>}
                <div className="close-window" onClick={() => setOpenForm(false)}>
                    <div className="close-reg">
                        <p>x</p>
                    </div>
                </div>
            </div>
            <ToastContainer theme="dark" autoClose={3000} />
        </>
    );
};

export default TrainingForm;
