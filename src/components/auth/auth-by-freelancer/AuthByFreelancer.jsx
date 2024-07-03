import React, { useEffect, useState } from 'react';
import SuccessSignInUp from "../success/success-sign-in-up/SuccessSignInUp";
import SendReset from "../send-reset/SendReset";
import { useSelector } from 'react-redux';
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import "../Auth.scss";
import axios from 'axios';

const AuthByFreelancer = () => {
    const [optionData, setOptionData] = useState([]);
    const [openOptions, setOpenOptions] = useState(false);
    const [registerFreelancer, setRegisterFreelancer] = useState({ id: null, name: "Մասնագիտություն" });
    const activeItem = useSelector((state) => state.authItem.activeItem);
    const closeAuth = useSelector(state => state.auth.closeAuth);
    const closeReg = useSelector(state => state.auth.closeReg);

    const [data, setData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        profession: 'freelancer',
        register_freelancer: ""
    });

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get("https://globalitacademy.am/GIAcademyApi/register_freelancer/");
                setOptionData(response.data);
            } catch (error) {
                console.log("Error");
            }
        }
        getData();
    }, []);

    const changeValue = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://globalitacademy.am/register/", data);
            console.log(data);
            console.log('Response:', response.data);
            setData(response.data);
            console.log(response);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    const ProfessionChange = (profession) => {
        setRegisterFreelancer(profession);
        setData(prevData => ({
            ...prevData,
            register_freelancer: profession
        }));
        setOpenOptions(false);
    };

    console.log(data);

    return (
        <div className='auth-by-freelancer reg-form' style={{ display: !closeReg && closeAuth && activeItem === 4 ? "flex" : "none" }}>
            <SuccessSignInUp />
            <form className='form' onSubmit={handleSubmit}>
                <input type="text" placeholder='Անուն' name="username" value={data.username || ''} onChange={changeValue} />
                <input type="text" placeholder='Ազգանուն' />
                <input type="telephone" placeholder='Հեռախոսահամար' name="phone" value={data.phone || ''} onChange={changeValue} />
                <input type="email" placeholder='E-mail' name="email" value={data.email || ''} onChange={changeValue} />
                <input type="password" placeholder='Գաղտնաբառ' name="password" value={data.password || ''} onChange={changeValue} />
                <input type="password" placeholder='Գաղտնաբառի կրկնություն' name="passwordConfirm" />
                <div className="select-option">
                    <div className='select' onClick={() => setOpenOptions(!openOptions)}>
                        <p>{registerFreelancer.name}</p>
                        {openOptions ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
                    </div>
                    <div className='options' style={{ display: openOptions ? "flex" : "none" }}>
                        {optionData.map(({ id, name }) => (
                            <div key={id} onClick={() => ProfessionChange(name)}>
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
                <button type="submit">send</button>
            </form>
            <SendReset />
        </div>
    );
};

export default AuthByFreelancer;
