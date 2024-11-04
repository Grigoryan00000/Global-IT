import React, { useState } from 'react';
import './TrainingForm.scss';
import axios from 'axios';
import { useSelector } from 'react-redux';

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
        }
    };

    return (
        <div className='training-form' style={{ display: openForm ? "block" : "none" }}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
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
    );
};

export default TrainingForm;
