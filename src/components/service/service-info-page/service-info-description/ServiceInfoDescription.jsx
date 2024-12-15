// ServiceInfoDescription.js
import React, { useEffect, useState } from 'react';
import Container from '../../../common/container/Container';
import ServiceForm from './service-form/ServiceForm';
import "../ServiceInfo.scss";

const ServiceInfoDescription = ({ items, activeItem, open, setOpen }) => {
  const [logo, setLogo] = useState("");

  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  return (
    <div>
      {items ? (
        items.map(({ id, name, text, but_name1, logo }) =>
          activeItem === id ? (
            <div className="service-info" key={id}>
              <Container>
                <div className="service-info-description">
                  <div className="text-side">
                    <h1 style={{ color: id === 1 ? "#98DAFF" : id === 2 ? "#FF5942" : "#A1FF8F" }}>{name}</h1>
                    <p>{text}</p>
                    <div className="text-side-buttons">
                      <button
                        className="button"
                        onClick={() => {
                          setOpen(true);
                          setLogo(logo);
                        }}
                      >
                        {but_name1}
                      </button>
                    </div>
                  </div>
                  <div className="icon-side">
                    <img src={logo} alt="" />
                  </div>
                </div>
              </Container>
            </div>
          ) : null
        )
      ) : (
        <div>No available data</div>
      )}
      <ServiceForm open={open} setOpen={setOpen} logo={logo} />
    </div>
  );
};

export default ServiceInfoDescription;
