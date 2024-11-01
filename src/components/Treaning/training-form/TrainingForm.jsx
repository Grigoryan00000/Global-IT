import React, { useState } from 'react';
import './TrainingForm.scss';
import axios from 'axios';
import { useSelector } from 'react-redux';

const TrainingForm = ({ openForm, setOpenForm, groupType, language, sessionType }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState(''); // Для отображения сообщений об успехе или ошибке
    const [loading, setLoading] = useState(false); // Для управления состоянием загрузки
    
    const treaningType = useSelector((state) => state.homeFaculties.facultiesItemName)

    const handleSubmit = async (e) => {
        e.preventDefault(); // Предотвращает перезагрузку страницы
        setLoading(true); // Устанавливает состояние загрузки

        const requestData = {
            name,
            email,
            phone,
            groupType,
            language,
            sessionType ,
            treaningType
        };

        

        console.log(requestData);
        

        try {
            await axios.post("https://globalitacademy.am/GIAcademyApi/treaning_request/", requestData);
            setMessage('դիմումը ուղղարկված է!'); // Сообщение об успехе
            setName('');
            setEmail('');
            setPhone('');
        } catch (error) {
            setMessage('խնդիր, դիմումն ուղղարկելիս. խնդրում ենք կրկին փորձեք.');
            console.error(error);
        } finally {
            setLoading(false); // Сбрасывает состояние загрузки
        }
    };

    return (
        <div className='training-form' style={{ display: openForm ? "block" : "none" }}>
            <h1>contact us</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Имя:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ваше имя"
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ваш email"
                        required
                    />
                </label>
                <label>
                    Телефон:
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ваш телефон"
                        required
                    />
                </label>
                <div className='btn'>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Отправка...' : 'Отправить'}
                    </button>
                </div>
            </form>

            {message && <p className='message'>{message}</p>} {/* Отображает сообщение об успехе/ошибке */}

            <div className='close-window' onClick={() => setOpenForm(false)}>
                <div className="close-reg">
                    <p>x</p>
                </div>
            </div>
        </div>
    );
};

export default TrainingForm;