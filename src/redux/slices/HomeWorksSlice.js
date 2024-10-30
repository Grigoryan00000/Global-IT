import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchWorksData  = createAsyncThunk(
    'homeworks/fetchWorksData ',
    async () => {
        const response = await axios.get('https://globalitacademy.am/GIAcademyApi/works/');
        return response.data;
    }
);


const initialState = {
    homeWorks: [],
    status: "idle",
    error: null,
}


const HomeWorksSlice = createSlice({
    name: "homeWorks",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => { 
        builder
        .addCase(fetchWorksData.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchWorksData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.homeWorks = action.payload;
          })
        .addCase(fetchWorksData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
})

export default HomeWorksSlice.reducer;
