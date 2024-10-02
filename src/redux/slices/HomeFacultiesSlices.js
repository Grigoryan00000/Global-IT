import { createSlice } from "@reduxjs/toolkit"
import homeFacultiesItemBottomImg from "../../assets/home/home-faculties/home-services-item-bottom-item-img.png"

const initialState = {
    facultiesItemId: 0
}


const HomeFacultiesSlice = createSlice({
    name: "homeFaculties",
    initialState,
    reducers: {
        setFacultiesItemId: (state, {payload}) => {
            state.facultiesItemId = payload
        }
    }
})

export const { setFacultiesItemId } = HomeFacultiesSlice.actions;
export default HomeFacultiesSlice.reducer;
