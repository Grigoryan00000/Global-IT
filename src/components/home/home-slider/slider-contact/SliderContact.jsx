import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SliderContact.scss";

import emailjs from "@emailjs/browser";

import logo from "../../../../assets/logo/logo.png";

import { TbPhoneCall } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { SiViber } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

export const SliderContact = ({ open, setOpen }) => {
    const [selectedDate, setSelectedDate] = useState(null); // Состояние для выбранной даты
    const formRef = useRef(null); // Ссылка на форму

    const langstate = useSelector(state => state.lang.lang);

    const sendEmail = (e) => {
        e.preventDefault();

        const f_name = e.target.f_name.value.trim();
        const email_from = e.target.email_from.value.trim();
        const phone = e.target.phone.value.trim();
        const date = selectedDate;

        // Валидация: проверяем, что все поля заполнены
        if (!f_name || !email_from || !phone || !date) {
            toast.error(
                langstate === "hy"
                    ? "Խնդրում ենք լրացնել բոլոր դաշտերը"
                    : langstate === "ru"
                    ? "Пожалуйста, заполните все поля!"
                    : "Please fill in all fields!"
            );
            return; // Если хотя бы одно поле не заполнено, выходим из функции и не отправляем письмо
        }

        emailjs
            .sendForm(
                "service_tz672g6",
                "template_oiuga8e",
                e.target,
                "phrxLvqZXSjP8lzql"
            )
            .then(() => {
                // Очистка формы и состояния после успешной отправки
                formRef.current.reset(); // Сброс полей формы
                setSelectedDate(null); // Очистка выбранной даты
                toast.success(
                    langstate === "hy"
                        ? "Հաղորդագրությունը հաջողությամբ ուղարկվել է!"
                        : langstate === "ru"
                        ? "Сообщение успешно отправлено!"
                        : "Message sent successfully!"
                );
            })
            .catch(() => {
                toast.error(
                    langstate === "hy"
                        ? "Սխալ՝ հաղորդագրությունը ուղարկելու ժամանակ"
                        : langstate === "ru"
                        ? "Произошла ошибка при отправке сообщения."
                        : "An error occurred while sending the message."
                );
            });
    };

    if (open) {
        return (
            <>
                <div className="contact">
                    <div className="contact-header">
                        <img src={logo} alt="logo" />
                        <h1>GLOBAL IT</h1>
                    </div>
                    <div className="contact-social">
                        {/* Телефон */}
                        <a
                            href="tel:+37498960959"
                            className="contact-social-item"
                            style={{ backgroundColor: "#7A7A7A" }}
                        >
                            <TbPhoneCall />
                            <p>+374 98 960 959</p>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/37498960959"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-social-item"
                            style={{ backgroundColor: "#25D366CC" }}
                        >
                            <FaWhatsapp />
                            <p>WhatsApp</p>
                        </a>

                        {/* Viber */}
                        <p
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-social-item"
                        >
                            <SiViber />
                            <p>Viber</p>
                        </p>

                        {/* Telegram */}
                        <a
                            href="https://t.me/globalitacademy23"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-social-item"
                            style={{ backgroundColor: "#0088CCCC" }}
                        >
                            <FaTelegramPlane />
                            <p>Telegram</p>
                        </a>
                    </div>

                    <div className="contact-form">
                        <h3>
                            {langstate === "hy"
                                ? "Պատվիրել զանգ"
                                : langstate === "ru"
                                ? "Заказать звонок"
                                : "Order a call"}
                        </h3>
                        <form onSubmit={sendEmail} ref={formRef}>
                            <input
                                type="text"
                                placeholder={
                                    langstate === "hy"
                                        ? "Անուն ազգանուն"
                                        : langstate === "ru"
                                        ? "ФИО"
                                        : "Full Name"
                                }
                                name="f_name"
                            />
                            <input
                                type="email"
                                placeholder={
                                    langstate === "hy"
                                        ? "է-մայլ"
                                        : langstate === "ru"
                                        ? "Электронная почта"
                                        : "Email"
                                }
                                name="email_from"
                            />

                            {/* Компонент react-datepicker */}
                            <div className="date">
                                <DatePicker
                                    selected={selectedDate} // Привязка состояния к выбранной дате
                                    onChange={(date) => setSelectedDate(date)} // Устанавливаем дату в состояние
                                    dateFormat="dd/MM/yyyy" // Формат отображения
                                    placeholderText={
                                        langstate === "hy"
                                            ? "Oր/ժամ"
                                            : langstate === "ru"
                                            ? "Дата/время"
                                            : "Date/time"
                                    }
                                    className="custom-date-picker" // Кастомный класс для стилизации
                                    popperPlacement="right-start" // Можно использовать top, bottom, left, right и другие
                                    name="date"
                                />
                                <FaCalendarAlt className="date-picker-icon" />
                            </div>

                            <input
                                type="phone"
                                placeholder={
                                    langstate === "hy"
                                        ? "Հեռախոսահամար"
                                        : langstate === "ru"
                                        ? "Номер телефона"
                                        : "Phone number"
                                }
                                name="phone"
                            />
                            <button type="submit">
                                {langstate === "hy"
                                    ? "Պատվիրել"
                                    : langstate === "ru"
                                    ? "Заказать"
                                    : "Order"}
                            </button>
                        </form>
                    </div>
                    <div
                        className="close-contact"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        X
                    </div>
                </div>
                <ToastContainer />
            </>
        );
    } else {
        return null;
    }
};
