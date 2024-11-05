// import React, { useEffect, useRef, useState } from "react";
// import "../../ServiceInfo.scss";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchServiceFormBudjet,
//   fetchServiceFormSiteTypesData,
// } from "../../../../../redux/slices/ServiceSlice";
// import Loading from "../../../../loading/Loading";
// import axios from "axios";
// import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// const ServiceForm = ({ open, setOpen, logo }) => {
//   const dispatch = useDispatch();
//   const {
//     serviceFormSiteTypes,
//     serviceFormBudjet,
//     status,
//     error,
//     activeItemName,
//     activeItem,
//   } = useSelector((state) => state.service);
//   const langState = useSelector((state) => state.lang.lang);

//   const [checkedbudget, setCheckedbudget] = useState("");
//   const [active, setActive] = useState(null);
//   const [openSelect, setOpenSelect] = useState(false);
//   const [activeSelect, setActiveSelect] = useState("");
//   const selectRef = useRef(null);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [desc, setDesc] = useState("");

//   const title_hy = activeItem === 1 ? "Web կայք" : activeItem === 2 ? "Մոբայլ հավելված" : "Վեբ և Գրաֆիկ Դիզայն";
//   const title_ru = activeItem === 1 ? "Веб сайт" : activeItem === 2 ? "Mobile приложения" : "Веб и графический дизайн";
//   const title_en = activeItem === 1 ? "Web site" : activeItem === 2 ? "Mobile application" : "Web and Graphic Design";

//   const sendForm = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !phone || !activeItemName || !activeSelect || !checkedbudget) {
//       toast.error(
//         langState === "hy" ? "Լրացրեք բոլոր դաշտերը" :
//         langState === "ru" ? "Заполните все поля" :
//         "Fill in all fields"
//       );
//       return;
//     }

//     const requestData = {
//       name,
//       email,
//       phone,
//       description: desc,
//       serviceType: activeItemName,
//       siteType: activeSelect,
//       budget: checkedbudget,
//     };

//     try {
//       await toast.promise(
//         axios.post("https://globalitacademy.am/GIAcademyApi/service_request/", requestData),
//         {
//           pending: langState === "hy" ? "Դիմումը ուղարկվում է..." :
//                    langState === "ru" ? "Заявка отправляется..." :
//                    "Request sending...",
//           success: langState === "hy" ? "Դիմումը ուղղարկված է!" :
//                    langState === "ru" ? "Заявка отправлено!" :
//                    "Request sent!",
//           error: langState === "hy" ? "Խնդիր, դիմումն ուղղարկելիս. Խնդրում ենք կրկին փորձեք." :
//                  langState === "ru" ? "Ошибка при отправлении заявки. Пожалуйста, попробуйте еще раз." :
//                  "Error sending request. Please try again."
//         }
//       );
//       setName("");
//       setEmail("");
//       setPhone("");
//       setDesc("");
//       setCheckedbudget("");
//       setActiveSelect("");
//       setActive(null);
//     } catch (error) {
//       console.error("Error sending form:", error);
//     }
//   };

//   useEffect(() => {
//     if (status.serviceFormSiteTypes === "idle") {
//       dispatch(fetchServiceFormSiteTypesData());
//     }
//     if (status.serviceFormBudjet === "idle") {
//       dispatch(fetchServiceFormBudjet());
//     }
//   }, [status, dispatch]);

//   if (status.serviceFormSiteTypes === "loading" || status.serviceFormBudjet === "loading") {
//     return <Loading />;
//   }

//   if (status.serviceFormSiteTypes === "failed" || status.serviceFormBudjet === "failed") {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <>
//     <div className="service-form" style={{ display: open ? "block" : "none" }}>
//       <h2>
//         {langState === "hy" ? "Պատվիրել " : langState === "ru" ? "Заказать " : "Order "}
//         <span className={activeItem === 1 ? "span-blue" : activeItem === 2 ? "span-orange" : "span-green"}>
//           {langState === "hy" ? title_hy : langState === "ru" ? title_ru : title_en}
//         </span>
//       </h2>
//       <div className="container">
//         <div className="service-form-type">
//           <p>{langState === "hy" ? "տեսակը" : langState === "ru" ? "Тип" : "Type"}:</p>
//           {status.serviceFormSiteTypes === "succeeded" && serviceFormSiteTypes ? (
//             <div
//               onClick={() => setOpenSelect(!openSelect)}
//               className="service-form-type-select box"
//               ref={selectRef}
//             >
//               <p>{activeSelect || (langState === "hy" ? "Ընտրեք Տեսակը՝" : langState === "ru" ? "Выберите тип:" : "Select type:")}</p>
//               {openSelect ? <GoTriangleUp style={{ fontSize: "20px" }} /> : <GoTriangleDown style={{ fontSize: "20px" }} />}
//               <div className={`options-list ${openSelect ? "open" : ""}`}>
//                 {serviceFormSiteTypes.map(({ id, site_type_hy, site_type_ru, site_type_en, services_items }) =>
//                   services_items === activeItem ? (
//                     <div
//                       className="option"
//                       key={id}
//                       onClick={() => {
//                         setActiveSelect(langState === "hy" ? site_type_hy : langState === "ru" ? site_type_ru : site_type_en);
//                         setOpenSelect(false);
//                       }}
//                     >
//                       {langState === "hy" ? site_type_hy : langState === "ru" ? site_type_ru : site_type_en}
//                     </div>
//                   ) : null
//                 )}
//               </div>
//             </div>
//           ) : (
//             <div>not available</div>
//           )}
//         </div>
//         <div className="service-form-budget">
//           <p>{langState === "hy" ? "Բյուջե`" : langState === "ru" ? "Бюджет:" : "Budget:"}</p>
//           <div className="service-form-budget-items">
//             {status.serviceFormBudjet === "succeeded" && serviceFormBudjet ? (
//               serviceFormBudjet.map(({ id, budget_hy, budget_ru, budget_en }) => (
//                 <button
//                   className="service-form-budget-item box"
//                   key={id}
//                   onClick={() => {
//                     setCheckedbudget(langState === "hy" ? budget_hy : langState === "ru" ? budget_ru : budget_en);
//                     setActive(id);
//                   }}
//                   style={{ background: active === id ? "#A35BFF" : "transparent" }}
//                 >
//                   <span>{langState === "hy" ? budget_hy : langState === "ru" ? budget_ru : budget_en}</span>
//                 </button>
//               ))
//             ) : (
//               <div>not available</div>
//             )}
//           </div>
//         </div>
//         <div className="send-form">
//           <p>{langState === "hy" ? "Կոնտակտային տվյալներ`" : langState === "ru" ? "Контактная информация:" : "Contact information:"}</p>
//           <form onSubmit={sendForm}>
//             <input
//               type="text"
//               value={name}
//               placeholder={langState === "hy" ? "Անուն" : langState === "ru" ? "Имя" : "Name"}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//             <input
//               type="email"
//               value={email}
//               placeholder={langState === "hy" ? "Էլ․ փոստ" : langState === "ru" ? "Эл. почта" : "Email"}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               value={phone}
//               placeholder={langState === "hy" ? "Հեռախոսահամար" : langState === "ru" ? "Номер телефона" : "Phone number"}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//             <textarea
//               className="textarea"
//               value={desc}
//               placeholder={langState === "hy" ? "Նկարագրություն" : langState === "ru" ? "Описание" : "Description"}
//               onChange={(e) => setDesc(e.target.value)}
//             />
//             <button type="submit">
//               {langState === "hy" ? "Ուղղարկել" : langState === "ru" ? "Отправить" : "Send"}
//             </button>
//           </form>
//           <img src={logo} alt="Logo" />
//         </div>
//       </div>
//       <div className="close-window" onClick={() => setOpen(false)}>
//         <div className="close-reg">
//           <p>x</p>
//         </div>
//       </div>
//     </div>
//       <ToastContainer theme="dark" autoClose={3000} />
//     </>
//   );
// };

// export default ServiceForm;
import React, { useEffect, useRef, useState } from "react";
import "../../ServiceInfo.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchServiceFormBudjet,
  fetchServiceFormSiteTypesData,
} from "../../../../../redux/slices/ServiceSlice";

import Loading from "../../../../loading/Loading";

import axios from "axios";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceForm = ({ open, setOpen, logo }) => {
  const dispatch = useDispatch();
  const {
    serviceFormSiteTypes,
    serviceFormBudjet,
    status,
    error,
    activeItemName,
    activeItem,
  } = useSelector((state) => state.service);
  const langState = useSelector((state) => state.lang.lang);

  const [checkedbudget, setCheckedbudget] = useState("");
  const [active, setActive] = useState(null);
  const [openSelect, setOpenSelect] = useState(false);
  const [activeSelect, setActiveSelect] = useState("");
  const selectRef = useRef(null);

  console.log("====================================");
  console.log(activeSelect);
  console.log("====================================");
  console.log('====================================');
  console.log(activeSelect);
  console.log('====================================');

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const title_hy =
    activeItem === 1
      ? "Web կայք"
      : activeItem === 2
        ? "Մոբայլ հավելված"
        : "Վեբ և Գրաֆիկ Դիզայն";
  const title_ru =
    activeItem === 1
      ? "Веб сайт"
      : activeItem === 2
        ? "Mobile приложения"
        : "Веб и графический дизайн";
  const title_en =
    activeItem === 1
      ? "Web site"
      : activeItem === 2
        ? "Mobile application"
        : "Web and Graphic Design";

  const sendForm = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !phone ||
      !activeItemName ||
      !activeSelect ||
      !checkedbudget
    ) {
      toast.error(
        langState === "hy"
          ? "Լրացրեք բոլոր դաշտերը"
          : langState === "ru"
            ? "Заполните все поля"
            : "Fill in all fields"
      );
      return;
    }

    const requestData = {
      name,
      email,
      phone,
      description: desc,
      serviceType: activeItemName,
      siteType: activeSelect,
      budget: checkedbudget,
    };

    // Using toast.promise for pending, success, and error states
    toast
      .promise(
        axios.post(
          "https://globalitacademy.am/GIAcademyApi/service_request/",
          requestData
        ),
        {
          pending:
            langState === "hy"
              ? "Դիմումը ուղարկվում է..."
              : langState === "ru"
                ? "Заявка отправляется..."
                : "Request sending...",
          success:
            langState === "hy"
              ? "Դիմումը ուղղարկված է!"
              : langState === "ru"
                ? "Заявка отправлено!"
                : "Request sent!",
          error:
            langState === "hy"
              ? "Խնդիր, դիմումն ուղղարկելիս. Խնդրում ենք կրկին փորձեք."
              : langState === "ru"
                ? "Ошибка при отправлении заявки. Пожалуйста, попробуйте еще раз."
                : "Error sending request. Please try again.",
        }
      )
      .then(() => {
        setName("");
        setEmail("");
        setPhone("");
        setDesc("");
        setCheckedbudget("");
        setActiveSelect("");
        setActive(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (status.serviceFormSiteTypes === "idle") {
      dispatch(fetchServiceFormSiteTypesData());
    }
    if (status.serviceFormBudjet === "idle") {
      dispatch(fetchServiceFormBudjet());
    }
  }, [status, dispatch]);

  if (
    status.serviceFormSiteTypes === "loading" ||
    status.serviceFormBudjet === "loading"
  ) {
    return <Loading />;
  }

  if (
    status.serviceFormSiteTypes === "failed" ||
    status.serviceFormBudjet === "failed"
  ) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div
        className="service-form"
        style={{ display: open ? "block" : "none" }}
      >
        <h2>
          {langState === "hy"
            ? "Պատվիրել "
            : langState === "ru"
              ? "Заказать "
              : "Order "}{" "}
          <span
            className={
              activeItem === 1
                ? "span-blue"
                : activeItem === 2
                  ? "span-orange"
                  : "span-green"
            }
          >
            {langState === "hy"
              ? title_hy
              : langState === "ru"
                ? title_ru
                : title_en}
          </span>
        </h2>
        <div className="container">
          <div className="service-form-type">
            <p className="service-form-type-name">
              {" "}
              {langState === "hy"
                ? "տեսակը"
                : langState === "ru"
                  ? "Тип"
                  : "Type:"}
            </p>
            {status.serviceFormSiteTypes === "succeeded" &&
            serviceFormSiteTypes ? (
              <div
                onClick={() => setOpenSelect(!openSelect)}
                className="service-form-type-select box"
                ref={selectRef}
              >
                <p>
                  {activeSelect
                    ? activeSelect
                    : langState === "hy"
                      ? "Ընտրեք Տեսակը՝"
                      : langState === "ru"
                        ? "Выберите тип:"
                        : "Select type:"}{" "}
                </p>
                {openSelect ? (
                  <GoTriangleUp style={{ fontSize: "20px" }} />
                ) : (
                  <GoTriangleDown style={{ fontSize: "20px" }} />
                )}
                <div className={`options-list ${openSelect ? "open" : ""}`}>
                  {serviceFormSiteTypes.map(
                    ({
                      id,
                      site_type_hy,
                      site_type_ru,
                      site_type_en,
                      services_items,
                    }) =>
                      services_items === activeItem ? (
                        <div
                          className="option"
                          key={id}
                          onClick={() => {
                            setActiveSelect(site_type_hy);
                            setOpenSelect(false);
                          }}
                        >
                          {langState === "hy"
                            ? site_type_hy
                            : langState === "ru"
                              ? site_type_ru
                              : site_type_en}
                        </div>
                      ) : null
                  )}
                </div>
              </div>
            ) : (
              <div>not available</div>
            )}
          </div>
          <div className="service-form-budjet">
            <p>
              {langState === "hy"
                ? "Բյուջե`"
                : langState === "ru"
                  ? "Бюджет:"
                  : "Budget:"}
            </p>
            <div className="serivce-form-budjet-items">
              {status.serviceFormBudjet === "succeeded" && serviceFormBudjet ? (
                serviceFormBudjet.map(
                  ({ id, budget_hy, budget_ru, budget_en }) => (
                    <button
                      className="serivce-form-budjet-items-item box"
    <div className="service-form" style={{ display: open ? "block" : "none" }}>
      <h2>
        {langState==="hy"?"Պատվիրել ":langState==="ru"?"Заказать ":"Order "} <span className={activeItem===1?"span-blue":activeItem===2?"span-orange":"span-green"}>{langState==="hy"?title_hy:langState==="ru"?title_ru:title_en}</span>
      </h2>
      <div className="container">
        <div className="service-form-type">
          <p className="service-form-type-name"> {langState==="hy"?"տեսակը":langState==="ru"?"Тип":"Type:"}</p>
          {status.serviceFormSiteTypes === "succeeded" && serviceFormSiteTypes ? (
            <div
              onClick={() => setOpenSelect(!openSelect)}
              className="service-form-type-select box"
              ref={selectRef}
            >
              <p>{activeSelect?activeSelect:langState==="hy"?"Ընտրեք Տեսակը՝":langState==="ru"?"Выберите тип:":"Select type:"}{" "}</p>
              {openSelect ? <GoTriangleUp style={{ fontSize: "20px" }} /> : <GoTriangleDown style={{ fontSize: "20px" }} />}
              <div className={`options-list ${openSelect ? "open" : ""}`}>
              {serviceFormSiteTypes.map(({ id, site_type_hy, site_type_ru, site_type_en, services_items }) => (
                  services_items === activeItem ? (
                    <div
                      className="option"
                      key={id}
                      onClick={() => {
                        setCheckedbudget(budget_hy);
                        setActive(id);
                      }}
                      style={{
                        background: active === id ? "#A35BFF" : "transparent",
                      }}
                    >
                      <span>
                        {langState === "hy"
                          ? budget_hy
                          : langState === "ru"
                            ? budget_ru
                            : budget_en}
                      </span>
                    </button>
                  )
                )
              ) : (
                <div>not available</div>
              )}
            </div>
          </div>
          <div className="send-form">
            <p>
              {langState === "hy"
                ? "Կոնտակտային տվյալներ`"
                : langState === "ru"
                  ? "Контактная информация:"
                  : "Contact information:"}
            </p>
            <form onSubmit={sendForm}>
              <input
                type="text"
                value={name}
                placeholder={
                  langState === "hy"
                    ? "Անուն"
                    : langState === "ru"
                      ? "Имя"
                      : "Name"
                }
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                value={email}
                placeholder={
                  langState === "hy"
                    ? "Էլ․ փոստ"
                    : langState === "ru"
                      ? "Эл. почта"
                      : "Email"
                }
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                value={phone}
                placeholder={
                  langState === "hy"
                    ? "Հեռախոսահամար"
                    : langState === "ru"
                      ? "Номер телефона"
                      : "Phone number"
                }
                onChange={(e) => setPhone(e.target.value)}
              />
              <textarea
                type="text"
                value={desc}
                className="textarea"
                style={{width: "100%"}}
                placeholder={
                  langState === "hy"
                    ? "Նկարագրություն"
                    : langState === "ru"
                      ? "Описание"
                      : "Description"
                }
                onChange={(e) => setDesc(e.target.value)}
              />
              <button type="submit">
                {langState === "hy"
                  ? "Ուղղարկել"
                  : langState === "ru"
                    ? "Отправить"
                    : "Send"}
              </button>
            </form>
            <img src={logo} alt="" />
          </div>
        </div>
        <div
          className="close-window"
          onClick={() => {
            setOpen(false);
          }}
        >
          <div className="close-reg">
            <p>x</p>
          </div>
        </div>
        {/* Toast container to display notifications */}
      </div>
      <ToastContainer
        theme="dark"
        autoClose={3000} // Close after 5 seconds
      />
      {/* Toast container to display notifications */}
    </div>
    <ToastContainer 
      theme="dark"
      autoClose={3000} // Close after 5 seconds
    />
    </>
  );
};

export default ServiceForm;
