import { Route, Routes, useNavigate } from "react-router";
import { ROUTER } from "./router";
import HomePage from "../pages/HomePage"
import BlogPage from "../pages/BlogPage";
import BlogItemPage from "../pages/BlogItemPage";
import AuthPage from "../pages/AuthPage";
import FacultetPage from "../pages/FacultetPage";
import ServicePage from "../pages/ServicePage";
import ServiceInfoPage from "../pages/ServiceInfoPage";
import React, { useEffect } from 'react'
import AuthWindowItem from "../components/auth/auth-window/auth-window-item/AuthWindowItem";
import TreaningPage from "../pages/TreaningPage";
import ScrollToTop from "../components/scroll-to-up/ScrollToUp";



const AppRoutes = ({show, setShow}) => {

  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage/>} />
      <Route path={ROUTER.SERVICE_PAGE_ROUTE} element={<ServicePage/>} />
      <Route path={ROUTER.COURSES_PAGE_ROUTE} element={""} />
      <Route path={ROUTER.WORK_PAGE_ROUTE} element={""} />
      <Route path={ROUTER.CONTACT_PAGE_ROUTE} element={""} />
      <Route path={ROUTER.AUTH_PAGE_ROUTE} element={<AuthPage/>} />
      <Route path={ROUTER.AUTH_PAGE_ITEM_ROUTE} element={<AuthWindowItem/>} />
      <Route path={ROUTER.BLOG_PAGE_ROUTE} element={<BlogPage show={show} setShow={setShow}/>} />
      <Route path={ROUTER.BLOG_ITEM_PAGE_ROUTE} element={<BlogItemPage show={show}/>} />
      <Route path={ROUTER.FACULTET_PAGE_ROUTE} element={<FacultetPage />} />
      <Route path={ROUTER.SERVICE_INFO_PAGE_ROUTE} element={<ServiceInfoPage/>} />
      <Route path={ROUTER.TREANING_PAGE_ROUTE} element={<TreaningPage/>} />
      <Route path={ROUTER.FACULTET_TREANING_PAGE_ROUTE} element={<TreaningPage/>} />
      <Route path={ROUTER.ERROR_PAGE} element={<RedirectToHome />} />
    </Routes>
    </>
  )
}

const RedirectToHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
};

export default AppRoutes;