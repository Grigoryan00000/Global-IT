import React, { useState } from 'react';
import SuccessSignInUp from '../success/success-sign-in-up/SuccessSignInUp';
import { useSelector } from 'react-redux';
import axios from 'axios';

const AuthByGuest = () => {
    const activeItem = useSelector((state) => state.authItem.activeItem);
    const closeAuth = useSelector((state) => state.auth.closeAuth);
    const closeReg = useSelector((state) => state.auth.closeReg);

    const [data, setData] = useState({
        username: '',
        phone: '',
        email: '',
        password: '',
        password1: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://globalitacademy.am/register/', data);
            console.log('Response:', response.data);
            // Handle response according to your requirement
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div className="auth-by-guest reg-form" style={{ display: !closeReg && closeAuth && activeItem === 6 ? 'flex' : 'none' }}>
            <SuccessSignInUp />
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" value={data.username} onChange={handleChange} name="username" placeholder="Անուն" />
                <input type="phone" value={data.phone} onChange={handleChange} name="phone" placeholder="Հեռախոսահամար" />
                <input type="email" value={data.email} onChange={handleChange} name="email" placeholder="E-mail" />
                <input type="password" value={data.password} onChange={handleChange} name="password" placeholder="Գաղտնաբառ" />
                <input type="password" value={data.password1} onChange={handleChange} name="password1" placeholder="Գաղտնաբառի կրկնություն" />
                <button type="submit">send</button>
            </form>
        </div>
    );
};

export default AuthByGuest;