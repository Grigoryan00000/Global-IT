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
        serviceFormSiteTypes: [], 
        serviceFormBudjet: [],
        status: {
            items: "idle",
            websiteInfo: "idle",
            websiteTypes: 'idle',
            serviceFormSiteTypes: "idle",
            serviceFormBudjet: "idle",
        },
        error: null,
        activeItem: 1,
        activeItemName: "web kayqeri patrastum"
    }, 
    reducers: {
        changeActiveItem: (state, {payload}) => {
            state.activeItem = payload
        },
        changeActiveItemName: (state, {payload}) => {
            state.activeItemName = payload
        }
        
    },
    extraReducers: (builder) => {

        // items
        builder
        .addCase(fetchServiceInfoDescription.pending, (state) => {
            state.status.items = 'loading'
        })
        .addCase(fetchServiceInfoDescription.fulfilled, (state, action) => {
            state.status.items = 'succeeded';
            state.items = action.payload;
          })
        .addCase(fetchServiceInfoDescription.rejected, (state, action) => {
            state.status.items = 'failed';
            state.error = action.error.message;
        });

        // websiteTypes
        builder
        .addCase(fetchWebsiteTypes.pending, (state) => {
            state.status.websiteTypes = 'loading'
        })
        .addCase(fetchWebsiteTypes.fulfilled, (state, action) => {
            state.status.websiteTypes = "succeeded"
            state.websiteTypes = action.payload
        })
        .addCase(fetchWebsiteTypes.rejected, (state, action) => {
            state.status.websiteTypes = "failed"
            state.error = action.error.message
        })

        //websiteInfo
        builder
        .addCase(fetchWebsiteInfo.pending, (state) => {
            state.status.websiteInfo = "loading"
        })
        .addCase(fetchWebsiteInfo.fulfilled, (state, action) => {
            state.status.websiteInfo = "succeeded"
            state.websiteInfo = action.payload
        })
        .addCase(fetchWebsiteInfo.rejected, (state, action) => {
            state.status.websiteInfo = "failed"
            state.error = action.error.message
        })


        builder
        .addCase(fetchServiceFormSiteTypesData.pending, (state) => {
            state.status.serviceFormSiteTypes = "loading"
        })
        .addCase(fetchServiceFormSiteTypesData.fulfilled, (state, action) => {
            state.status.serviceFormSiteTypes = "succeeded"
            state.serviceFormSiteTypes = action.payload
        })
        .addCase(fetchServiceFormSiteTypesData.rejected, (state, action) => {
            state.status.serviceFormSiteTypes = "failed"
            state.error = action.error.message
        })

        // serviceFormBudjet

        builder
        .addCase(fetchServiceFormBudjet.pending, (state) => {
            state.status.serviceFormBudjet = "loading"
        })
        .addCase(fetchServiceFormBudjet.fulfilled, (state, action) => {
            state.status.serviceFormBudjet = "succeeded"
            state.serviceFormBudjet = action.payload
        })
        .addCase(fetchServiceFormBudjet.rejected, (state, action) => {
            state.status.serviceFormBudjet = "failed"
            state.error = action.error.message
        })
    }

})

export default ServiceSlice.reducer;
export const {changeActiveItem, changeActiveItemName} = ServiceSlice.actions;
