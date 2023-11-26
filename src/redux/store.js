import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice"
import authItemReducer from "./slices/AuthItemSlice"
import homeFacultiesReducer from "./slices/HomeFacultiesSlices"
import homeServicesReducer from "./slices/HomeServicesSlice"
import homeTeamReducer from "./slices/HomeTeamSlice"
import homeWorksReducer from "./slices/HomeWorksSlice"
import homeFriendsReducer from "./slices/HomeFriendsSlice"
import blogReducer from "./slices/BlogSlice"
import serviceReducer from "./slices/ServiceSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        authItem: authItemReducer,
        homeFaculties: homeFacultiesReducer,
        homeServices: homeServicesReducer,
        homeTeam: homeTeamReducer,
        homeWorks: homeWorksReducer,
        homeFriends: homeFriendsReducer,
        blog: blogReducer,
        service: serviceReducer

    }
})

export default store;