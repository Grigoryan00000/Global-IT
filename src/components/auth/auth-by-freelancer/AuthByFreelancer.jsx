// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AuthByFreelancer = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     profession: 'freelancer',
//     phone: '',
//     register_freelancer: [],
//     profile_picture: null,
//   });

//   const [professions, setProfessions] = useState([]);

//   useEffect(() => {
//     // Fetch freelancer professions from the API
//     axios.get('https://globalitacademy.am/GIAcademyApi/register_freelancer/')
//       .then(response => {
//         setProfessions(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the freelancer professions!', error);
//       });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleProfessionChange = (e) => {
//     const { options } = e.target;
//     const values = [];
//     for (let i = 0, l = options.length; i < l; i++) {
//       if (options[i].selected) {
//         const selectedProfession = professions.find(profession => profession.id === parseInt(options[i].value));
//         if (selectedProfession) {
//           values.push(selectedProfession);
//         }
//       }
//     }
//     setFormData({
//       ...formData,
//       register_freelancer: values,
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       profile_picture: e.target.files[0],
//     });
//   };

//   console.log(professions);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form_data = new FormData();
//     for (const key in formData) {
//       if (key === 'register_freelancer') {
//         formData[key].forEach(item => form_data.append('register_freelancer', JSON.stringify(item)));
//       } else {
//         form_data.append(key, formData[key]);
//       }
//     }

//     try {
//       const response = await axios.post('https://globalitacademy.am/GIAcademyApi/users/', form_data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Registration successful', response.data);
//     } catch (error) {
//       console.error('There was an error with the registration!', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="username"
//         placeholder="Username"
//         value={formData.username}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="phone"
//         placeholder="Phone"
//         value={formData.phone}
//         onChange={handleChange}
//         required
//       />
//       <select
//         multiple
//         name="register_freelancer"
//         value={formData.register_freelancer.map(profession => profession.id)}
//         onChange={handleProfessionChange}
//         required
//       >
//         {professions.map(profession => (
//           <option key={profession.id} value={profession.id}>
//             {profession.name}
//           </option>
//         ))}
//       </select>
//       <input type="file" name="profile_picture" onChange={handleFileChange} />
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default AuthByFreelancer;

// import SuccessSignInUp from "../success/success-sign-in-up/SuccessSignInUp";
// import SendReset from "../send-reset/SendReset";
// import { useSelector } from 'react-redux';
// import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
// import "../Auth.scss";
// import axios from 'axios';

// const AuthByFreelancer = () => {
//     const [optionData, setOptionData] = useState([]);
//     const [openOptions, setOpenOptions] = useState(false);
//     const [registerFreelancer, setRegisterFreelancer] = useState({ id: null, name: "Մասնագիտություն" });
//     const activeItem = useSelector((state) => state.authItem.activeItem);
//     const closeAuth = useSelector(state => state.auth.closeAuth);
//     const closeReg = useSelector(state => state.auth.closeReg);

//     const [data, setData] = useState({
//         username: '',
//         email: '',
//         phone: '',
//         password: '',
//         profession: 'freelancer',
//         register_freelancer: []
//     });

//     useEffect(() => {
//         async function getData() {
//             try {
//                 const response = await axios.get("https://globalitacademy.am/GIAcademyApi/register_freelancer/");
//                 setOptionData(response.data);
//             } catch (error) {
//                 console.log("Error");
//             }
//         }
//         getData();
//     }, []);

//     const changeValue = (e) => {
//         const { name, value } = e.target;
//         setData({
//             ...data,
//             [name]: value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("https://globalitacademy.am/register/", data);
//             console.log(data);
//             console.log('Response:', response.data);
//             setData(response.data);
//             console.log(response);
//         } catch (error) {
//             console.error('There was an error!', error);
//         }
//     };

//     const ProfessionChange = (profession) => {
//         setRegisterFreelancer(profession);
//         setData(prevData => ({
//             ...prevData,
//             register_freelancer: profession
//         }));
//         setOpenOptions(false);
//     };

//     console.log(data);

//     return (
//         <div className='auth-by-freelancer reg-form' style={{ display: !closeReg && closeAuth && activeItem === 4 ? "flex" : "none" }}>
//             <SuccessSignInUp />
//             <form className='form' onSubmit={handleSubmit}>
//                 <input type="text" placeholder='Անուն' name="username" value={data.username || ''} onChange={changeValue} />
//                 <input type="text" placeholder='Ազգանուն' />
//                 <input type="telephone" placeholder='Հեռախոսահամար' name="phone" value={data.phone || ''} onChange={changeValue} />
//                 <input type="email" placeholder='E-mail' name="email" value={data.email || ''} onChange={changeValue} />
//                 <input type="password" placeholder='Գաղտնաբառ' name="password" value={data.password || ''} onChange={changeValue} />
//                 <input type="password" placeholder='Գաղտնաբառի կրկնություն' name="passwordConfirm" />
//                 <div className="select-option">
//                     <div className='select' onClick={() => setOpenOptions(!openOptions)}>
//                         <p>{registerFreelancer.name}</p>
//                         {openOptions ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
//                     </div>
//                     <div className='options' style={{ display: openOptions ? "flex" : "none" }}>
//                         {optionData.map(({ id, name }) => (
//                             <div key={id} onClick={() => ProfessionChange(name)}>
//                                 {name}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <button type="submit">send</button>
//             </form>
//             <SendReset />
//         </div>
//     );
// };

// export default AuthByFreelancer;


import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import SuccessSignInUp from "../success/success-sign-in-up/SuccessSignInUp";
import SendReset from "../send-reset/SendReset";
import "../Auth.scss";

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
        register_freelancer: []
    });

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch("https://globalitacademy.am/GIAcademyApi/register_freelancer/");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setOptionData(data);
            } catch (error) {
                console.log("Error fetching data:", error);
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
            console.log(data);
            const response = await fetch("https://globalitacademy.am/register/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            console.log('Response:', responseData);
            setData(responseData);
        } catch (error) {
            console.error('There was an error!', error);
        }
        console.log(data);
    };

    const ProfessionChange = (profession) => {
        setRegisterFreelancer(profession);
        setData(prevData => ({
            ...prevData,
            register_freelancer: [profession]
        }));
        setOpenOptions(false);
    };

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
                            <div key={id} onClick={() => ProfessionChange({ id, name })}>
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

