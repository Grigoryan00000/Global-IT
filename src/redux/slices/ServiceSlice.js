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
export const fetchServiceFormSiteTypesData = createAsyncThunk(
    'service/fetchServiceFormData',
    async () => {
        const res = await axios.get("https://globalitacademy.am/GIAcademyApi/services_sitetype/");
        return res.data
    }
)
export const fetchServiceFormBudjet = createAsyncThunk(
    'service/fetchServiceFormBudjet',
    async () => {
        const res = await axios.get("https://globalitacademy.am/GIAcademyApi/services_prices/");
        return res.data
    }
)

const ServiceSlice = createSlice({
    name: "service",
    initialState : {
        items: [],
        websiteTypes: [],
        websiteInfo: [],
        serviceFormBudjet: [],
        serviceFormSiteTypes: [], 
        status: "idle",
        error: null,
        activeItem: 1,
        activeItemName: ""
    }, 
    reducers: {
        changeActiveItem: (state, {payload}) => {
            state.activeItem = payload
        },
        changeActiveItemName: (state, {payload}) => {
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


        builder
        .addCase(fetchServiceFormSiteTypesData.pending, (state) => {
            state.status = "loading"
        })
        .addCase(fetchServiceFormSiteTypesData.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.serviceFormSiteTypes = action.payload
        })
        .addCase(fetchServiceFormSiteTypesData.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        })

        // budjet

        builder
        .addCase(fetchServiceFormBudjet.pending, (state) => {
            state.status = "loading"
        })
        .addCase(fetchServiceFormBudjet.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.serviceFormBudjet = action.payload
        })
        .addCase(fetchServiceFormBudjet.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }

})

export default ServiceSlice.reducer;
export const {changeActiveItem, changeActiveItemName} = ServiceSlice.actions;
