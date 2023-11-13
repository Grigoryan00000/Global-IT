import { Route, Routes } from "react-router-dom";
import { router } from "./router";
import HomePage from "../pages/HomePage"
import Auth from "../components/auth/Auth";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={router.HOME_PAGE_ROUTE} element={<HomePage/>} />
      <Route path={router.SERVICES_PAGE_ROUTE} element={""} />
      <Route path={router.COURSES_PAGE_ROUTE} element={""} />
      <Route path={router.WORK_PAGE_ROUTE} element={""} />
      <Route path={router.CONTACT_PAGE_ROUTE} element={""} />
      <Route path={router.AUTH_PAGE_ROUTE} element={<Auth/>} />

    </Routes>
  )
}

export default AppRoutes;