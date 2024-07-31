import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../../common/container/Container';
import { fetchData } from '../../../../redux/slices/ServiceSlice';
import "../ServiceInfo.scss";

const ServiceInfoDescription = () => {
  const dispatch = useDispatch();
  const { activeItem, items, status, error } = useSelector((state) => state.service);

  console.log('====================================');
  console.log(activeItem);
  console.log('====================================');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
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
      {status === 'succeeded' && items? (
        items.map(({ id, show, name, text, but_name1, but_name2, logo}) => (
            activeItem===id?
           (
            <div className='service-info' key={id}>
              <Container>
                <div className="service-info-description">
                  <div className="text-side">
                    <h1 style={{color: id===1?"#98DAFF":id===2?"#FF5942":"#A1FF8F"}}>{name}</h1>
                    <p>{text}</p>
                    <div className='text-side-buttons'>
                      <div className='button'>{but_name1}</div>
                      <div className='button'>{but_name2}</div>
                    </div>
                  </div>
                  <div className='icon-side'>
                    <img src={logo} alt="" />
                  </div>
                </div>
              </Container>
            </div>
          )
          :
          <></>
        ))
      ) : (
        <div>No items available</div>
      )}
    </div>
  );
};

export default ServiceInfoDescription;
