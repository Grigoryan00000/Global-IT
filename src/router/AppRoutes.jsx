import { Route, Routes } from "react-router";
import { ROUTER } from "./router";
import HomePage from "../pages/HomePage"
import BlogPage from "../pages/BlogPage";
import BlogItemPage from "../pages/BlogItemPage";
import AuthPage from "../pages/AuthPage";
import ServicePage from "../pages/ServicePage";
import ServiceInfoPage from "../pages/ServiceInfoPage";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage/>} />
      <Route path={ROUTER.SERVICE_PAGE_ROUTE} element={<ServicePage/>} />
      <Route path={ROUTER.COURSES_PAGE_ROUTE} element={""} />
      <Route path={ROUTER.WORK_PAGE_ROUTE} element={""} />
      <Route path={ROUTER.CONTACT_PAGE_ROUTE} element={""} />
      <Route path={ROUTER.AUTH_PAGE_ROUTE} element={<AuthPage/>} />
      <Route path={ROUTER.BLOG_PAGE_ROUTE} element={<BlogPage />} />
      <Route path={ROUTER.BLOG_ITEM_PAGE_ROUTE} element={<BlogItemPage />} />
      <Route path={ROUTER.SERVICE_INFO_PAGE_ROUTE} element={<ServiceInfoPage/>} />
    </Routes>
  )
}

export default AppRoutes;