import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchServiceInfoDescription  = createAsyncThunk(
    'service/fetchServiceInfoDescription ',
    async () => {
        const response = await axios.get('https://globalitacademy.am/GIAcademyApi/services_info/');
        return response.data;
    }
);

export const fetchWebsiteTypes = createAsyncThunk(
    'service/fetchWebsiteTypes',
    async () => {
        const response = await axios.get('https://globalitacademy.am/GIAcademyApi/site_types/');
        return response.data
    }
)

export const fetchWebsiteInfo = createAsyncThunk(
    'service/fetchWebsiteInfo',
    async () => {
        const res = await axios.get("https://globalitacademy.am/GIAcademyApi/site_info/");
        return res.data
    }
)

const ServiceSlice = createSlice({
    name: "service",
    initialState : {
        items: [],
        websiteTypes: [],
        websiteInfo: [],
        status: "idle",
        error: null,
        activeItem: 1
    }, 
    reducers: {
        changeActiveItem: (state, {payload}) => {
            state.activeItem = payload
        }
        
    },
    extraReducers: (builder) => {

        // items
        builder
        .addCase(fetchServiceInfoDescription.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchServiceInfoDescription.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
          })
        .addCase(fetchServiceInfoDescription.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });

        // websiteTypes
        builder
        .addCase(fetchWebsiteTypes.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchWebsiteTypes.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.websiteTypes = action.payload
        })
        .addCase(fetchWebsiteTypes.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        })

        //websiteInfo
        builder
        .addCase(fetchWebsiteInfo.pending, (state) => {
            state.status = "loading"
        })
        .addCase(fetchWebsiteInfo.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.websiteInfo = action.payload
        })
        .addCase(fetchWebsiteInfo.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }

})

export default ServiceSlice.reducer;
export const {setShow,changeActive, changeActiveItem} = ServiceSlice.actions;
