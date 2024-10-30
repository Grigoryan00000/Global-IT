import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../../common/container/Container';
import { fetchServiceInfoDescription } from '../../../../redux/slices/ServiceSlice';
import "../ServiceInfo.scss";
import ServiceForm from './service-form/ServiceForm';

const ServiceInfoDescription = () => {
  const dispatch = useDispatch();
  const { activeItem, items, status, error } = useSelector((state) => state.service);
  const [open, setOpen] = useState(false)
  const [logo, setLogo] = useState("")




  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchServiceInfoDescription());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }  


  return (
    <div>
      {status === 'succeeded' && items ? (
        items.map(({ id, show, name, text, but_name1, but_name2, logo }) =>
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
          ) : (
            <React.Fragment key={id}></React.Fragment>
          )
        )
      ) : (
        <div>No items available</div>
      )}
      <ServiceForm open={open} setOpen={setOpen} logo={logo} />
    </div>
  );
  
};

export default ServiceInfoDescription;
