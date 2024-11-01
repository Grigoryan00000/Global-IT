import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../../common/container/Container';
import { fetchServiceInfoDescription, fetchWebsiteTypes } from '../../../../redux/slices/ServiceSlice';
import "../ServiceInfo.scss";
import ServiceForm from './service-form/ServiceForm';

const ServiceInfoDescription = () => {
  const dispatch = useDispatch();
  const { activeItem, items, websiteTypes, status, error } = useSelector((state) => state.service);
  console.log(activeItem);
  
  const [open, setOpen] = useState(false);
  const [logo, setLogo] = useState("");

  useEffect(() => {
    if (status.items === 'idle') {
      dispatch(fetchServiceInfoDescription());
    }
    if (status.websiteTypes === 'idle') {
      dispatch(fetchWebsiteTypes());
    }
  }, [status.items, status.websiteTypes, dispatch]);

  if (status.items === 'loading' || status.websiteTypes === 'loading') {
    return <div>Загрузка...</div>;
  }

  if (status.items === 'failed' || status.websiteTypes === 'failed') {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div>
      {status.items === 'succeeded' && items ? (
        items.map(({ id, show, name, text, but_name1, logo: itemLogo }) =>
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
                          setLogo(itemLogo);
                        }}
                      >
                        {but_name1}
                      </button>
                    </div>
                  </div>
                  <div className="icon-side">
                    <img src={itemLogo} alt="" />
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
