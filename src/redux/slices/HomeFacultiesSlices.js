// HomeFacultiesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    facultiesItemId: JSON.parse(localStorage.getItem('facultiesItemId')) || 1,
    facultiesItemName: JSON.parse(localStorage.getItem('facultiesItemName')) || "Չընտրված",
};

const HomeFacultiesSlice = createSlice({
    name: "homeFaculties",
    initialState,
    reducers: {
        setFacultiesItemId: (state, { payload }) => {
            state.facultiesItemId = payload;
            localStorage.setItem('facultiesItemId', JSON.stringify(payload)); // Save to localStorage
        },
        setFacultiesItemName: (state, {payload}) => {
            state.facultiesItemName = payload
            localStorage.setItem("facultiesItemName", JSON.stringify(payload))
        }
    }
});

export const { setFacultiesItemId, setFacultiesItemName} = HomeFacultiesSlice.actions;
export default HomeFacultiesSlice.reducer;
