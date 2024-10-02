import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    facultiesId: 1
}
const FacultetSlice = createSlice({
    name: "facultet",
    initialState,
    reducers: {
        setFacultiesId: (state, {payload}) => {
            state.facultiesId = payload
        }
    }
    
})


export const {setFacultiesId} = FacultetSlice.actions;
export default FacultetSlice.reducer;