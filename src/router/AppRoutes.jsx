import { Route, Routes } from "react-router";
import { ROUTER } from "./router";
import HomePage from "../pages/HomePage"
import BlogPage from "../pages/BlogPage";
import BlogItemPage from "../pages/BlogItemPage";
import AuthPage from "../pages/AuthPage";
import FacultetPage from "../pages/FacultetPage";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage/>} />
      <Route path={ROUTER.SERVICES_PAGE_ROUTE} element={""} />
      <Route path={ROUTER.COURSES_PAGE_ROUTE} element={""} />
      <Route path={ROUTER.WORK_PAGE_ROUTE} element={""} />
      <Route path={ROUTER.CONTACT_PAGE_ROUTE} element={""} />
      <Route path={ROUTER.AUTH_PAGE_ROUTE} element={<AuthPage/>} />
      <Route path={ROUTER.BLOG_PAGE_ROUTE} element={<BlogPage />} />
      <Route path={ROUTER.BLOG_ITEM_PAGE_ROUTE} element={<BlogItemPage />} />
      <Route path={ROUTER.FACULTET_PAGE_ROUTE} element={<FacultetPage />} />
    </Routes>
  )
}

export default AppRoutes;