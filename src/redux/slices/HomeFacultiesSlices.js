// HomeFacultiesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    facultiesItemId: JSON.parse(localStorage.getItem('facultiesItemId')) || 1
};

const HomeFacultiesSlice = createSlice({
    name: "homeFaculties",
    initialState,
    reducers: {
        setFacultiesItemId: (state, { payload }) => {
            state.facultiesItemId = payload;
            localStorage.setItem('facultiesItemId', JSON.stringify(payload)); // Save to localStorage
        }
    }
});

export const { setFacultiesItemId } = HomeFacultiesSlice.actions;
export default HomeFacultiesSlice.reducer;
