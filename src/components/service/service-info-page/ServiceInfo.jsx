// ServiceInfo.js
import React, { useEffect, useState } from 'react';
import ServiceInfoDescription from './service-info-description/ServiceInfoDescription';
import WebsiteTypes from './website-types/WebsiteTypes';
import HomeWorks from '../../home/home-works/HomeWorks';
import Loading from '../../loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServiceInfoDescription, fetchWebsiteInfo, fetchWebsiteTypes } from '../../../redux/slices/ServiceSlice';
import "./ServiceInfo.scss";

const ServiceInfo = () => {
  const dispatch = useDispatch();
  const { activeItem, items, websiteTypes, websiteInfo, status, error } = useSelector((state) => state.service);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (status.items === 'idle') {
      dispatch(fetchServiceInfoDescription());
    }
    if (status.websiteTypes === 'idle') {
      dispatch(fetchWebsiteTypes());
    }
    if (status.websiteInfo === 'idle') {
      dispatch(fetchWebsiteInfo());
    }
  }, [status.items, status.websiteTypes, status.websiteInfo, dispatch]);

  if (status.items === 'loading' || status.websiteTypes === 'loading' || status.websiteInfo === "loading") {
    return <Loading />;
  }

  if (status.items === 'failed' || status.websiteTypes === 'failed' || status.websiteInfo === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='service-info'>
      <ServiceInfoDescription items={items} activeItem={activeItem} open={open} setOpen={setOpen} />
      <WebsiteTypes websiteTypes={websiteTypes} websiteInfo={websiteInfo} />
      <HomeWorks />
    </div>
  );
};

export default ServiceInfo;
