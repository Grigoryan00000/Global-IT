import React, { useState } from 'react';
import Container from '../../../common/container/Container';
import "../ServiceInfo.scss";
import ServiceForm from './service-form/ServiceForm';

const ServiceInfoDescription = ({items, activeItem}) => {

  
  const [open, setOpen] = useState(false);
  const [logo, setLogo] = useState("");

  console.log(logo);
  


  return (
    <div>
      { items ? (
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
        <div>Нет доступных данных</div>
      )}
      <ServiceForm open={open} setOpen={setOpen} logo={logo} />
    </div>
  );
};

export default ServiceInfoDescription;
