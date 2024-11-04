import React, { useEffect, useState } from "react";
import "../../ServiceInfo.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchServiceFormBudjet,
  fetchServiceFormSiteTypesData,
} from "../../../../../redux/slices/ServiceSlice";
import axios from "axios";

const ServiceForm = ({ open, setOpen, logo }) => {
  const dispatch = useDispatch();
  const {
    serviceFormSiteTypes,
    serviceFormBudjet,
    status,
    error,
    activeItemName,
  } = useSelector((state) => state.service);

  const [checkedSiteType, setCheckedSiteType] = useState("Օնլայն Խանութ");
  const [checkedbudget, setCheckedbudget] = useState("");
  const [active, setActive] = useState(null);


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");

  const sendForm = async (e) => {
    e.preventDefault(); // Предотвращает перезагрузку страницы
    setLoading(true); // Устанавливает состояние загрузки

    const requestData = {
      name,
      email,
      phone,
      description: desc,
      serviceType: activeItemName,
      siteType: checkedSiteType,
      budget: checkedbudget,
    };

    try {
      await axios.post(
        "https://globalitacademy.am/GIAcademyApi/service_request/",
        requestData
      );
      setMessage("դիմումը ուղղարկված է!"); // Сообщение об успехе
      setName("");
      setEmail("");
      setPhone("");
      setDesc("");
    } catch (error) {
      setMessage("խնդիր, դիմումն ուղղարկելիս. խնդրում ենք կրկին փորձեք.");
      console.error(error);
    } finally {
      setLoading(false); // Сбрасывает состояние загрузки
    }
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
    return <div>Loading...</div>;
  }

  if (
    status.serviceFormSiteTypes === "failed" ||
    status.serviceFormBudjet === "failed"
  ) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="service-form" style={{ display: open ? "block" : "none" }}>
      <h2>
        Պատվիրել <span>Վեբ Կայք</span>
      </h2>
      <div className="container">
        <div className="service-form-type">
          <p className="service-form-type-name">Կայքի տեսակը`</p>
          {status.serviceFormSiteTypes === "succeeded" &&
          serviceFormSiteTypes ? (
            <select
              onChange={(e) => {
                setCheckedSiteType(e.target.value);
              }}
              className="service-form-type-select box"
            >
              {serviceFormSiteTypes.map(({ id, site_type_hy }) => {
                return (
                  <option key={id} value={site_type_hy}>
                    {site_type_hy}
                  </option>
                );
              })}
            </select>
          ) : (
            <div>not available</div>
          )}
        </div>
        <div className="service-form-budjet">
          <p>Բյուջե`</p>
          <div className="serivce-form-budjet-items">
            {status.serviceFormBudjet === "succeeded" && serviceFormBudjet ? (
              serviceFormBudjet.map(({ id, budget_hy }) => {
                return (
                  <button
                    className="serivce-form-budjet-items-item box"
                    key={id}
                    onClick={() => {
                      setCheckedbudget(budget_hy);
                      setActive(id)
                    }}
                    style={{background: active === id ? "#A35BFF" : "transparent"}}
                  >
                    <span>{budget_hy}</span>
                  </button>
                );
              })
            ) : (
              <div>not available</div>
            )}
          </div>
        </div>
        {/* <img src={logo} alt="" /> */}
        <div className="send-form">
          <p>Կոնտակտային տվյալներ`</p>
          <form onSubmit={sendForm}>
            <input
              type="text"
              placeholder="Անուն Ազգանուն"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Էլ-փոստ"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Հեռ․ համար"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <input
              type="text"
              className="textare"
              placeholder="Նկարագրություն"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
            <button type="submit" disabled={loading}>
              {loading ? "ուղարկվում է..." : "Ուղարկել հայտ"}
            </button>
          </form>
          {/* Отображает сообщение об успехе/ошибке */}
          <img src={logo} alt="" />
        </div>
          {message && <p style={{textAlign: "center"}} className="message">{message}</p>}{" "}
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
    </div>
  );
};

export default ServiceForm;
