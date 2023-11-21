import { Route, Routes } from "react-router";
import { ROUTER } from "./router";
import HomePage from "../pages/HomePage"
import Auth from "../components/auth/Auth";
import BlogPage from "../pages/BlogPage";
import BlogItemPage from "../pages/BlogItemPage";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage/>} />
      <Route path={ROUTER.SERVICES_PAGE_ROUTE} element={""} />
      <Route path={ROUTER.COURSES_PAGE_ROUTE} element={""} />
      <Route path={ROUTER.WORK_PAGE_ROUTE} element={""} />
      <Route path={ROUTER.CONTACT_PAGE_ROUTE} element={""} />
      <Route path={ROUTER.AUTH_PAGE_ROUTE} element={<Auth/>} />
      <Route path={ROUTER.BLOG_PAGE_ROUTE} element={<BlogPage />} />
      <Route path={ROUTER.BLOG_ITEM_PAGE_ROUTE} element={<BlogItemPage />} />
    </Routes>
  )
}

export default AppRoutes;