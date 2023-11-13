import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import authItemReducer from "./slices/AuthItemSlice"
import homeFacultiesReducer from "./slices/HomeFacultiesSlices"
import homeServicesReducer from "./slices/HomeServicesSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        authItem: authItemReducer,
        homeFaculties: homeFacultiesReducer,
        homeServices: homeServicesReducer
    }
})

export default store;