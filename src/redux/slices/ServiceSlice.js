import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";

import bgi1 from "../../assets/service/bg-1.png"
import bgi2 from "../../assets/service/bg-2.png"
import bgi3 from "../../assets/service/bg-3.png"
import icon1 from "../../assets/service/icon1.png"
import icon2 from "../../assets/service/icon2.png"
import icon3 from "../../assets/service/icon-3.png"
import logo1 from "../../assets/service/border1.png"
import logo2 from "../../assets/service/border2.png"
import logo3 from "../../assets/service/border3.png"
import { useEffect, useState } from "react";


async function logMovies() {
    const response = await fetch("https://globalitacademy.am/GIAcademyApi/news/");
    const movies = await response.json();
    movies.forEach(element => {
        arr.push(element)       
    })
  } 
logMovies()

const arr = []

export const fetchData  = createAsyncThunk(
    'service/fetchData ',
    async () => {
      const response = await axios.get('https://globalitacademy.am/GIAcademyApi/services_info/');
      return response.data;
    }
  );


const ServiceSlice = createSlice({
    name: "service",
    initialState : {
        serviceTypes: [
            {id: 1, title: "Օնլայն խանութ", active: false},
            {id: 2, title: "Պրոմո կայք", active: false},
            {id: 3, title: "Լրատվական կայք", active: false},
            {id: 4, title: "Լենդինգ կայք", active: true},
            {id: 5, title: "Այցեքարտ կայք", active: false},
            {id: 6, title: "Անձնական կայք", active: false},
            {id: 7, title: "Բիզնես կայք", active: false},
            {id: 8, title: "Պորտալ կայք", active: false},
            {id: 9, title: "Կատալոգ կայք", active: false}
        ],
        items: [],
        status: "idle",
        error: null,
        activeItem: 1
    }, 
    reducers: {
        changeActive: (state, {payload}) => {
            state.serviceTypes.map(item => {
                if(item.id === payload){
                    return item.active = true
                } else {
                    return item.active = false
                }
            }) 
            console.log();
        },
        changeActiveItem: (state, {payload}) => {
            state.activeItem = payload
        }
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchData.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
          })
        .addCase(fetchData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }

})

export default ServiceSlice.reducer;
export const {setShow,changeActive, changeActiveItem} = ServiceSlice.actions;
