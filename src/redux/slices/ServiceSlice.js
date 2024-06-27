import { createSlice } from "@reduxjs/toolkit";

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


const initialState = {
    services: [
        {
            id: 1, 
            title1: "Վեբ կայքերի",
            title2: "Պատրաստում",
            color: "#26E4E4",
            color2: "#98DAFF",
            bgi:bgi1,
            icon: icon1,
            show: true,
            logo: logo1
        },
        {
            id: 2,
            title1: "Վեբ Մոբայլ հավելվածների",
            title2: "Պատրաստում",
            color: "#FF5942",
            color2: "",
            bgi: bgi2,
            icon: icon2,
            show: false,
            logo: logo2

        },
        {
            id: 3, 
            title1: "Վեբ և գրաֆիկ",
            title2: "Դիզայն",
            color: "#A1FF8F",
            color2: "",
            bgi: bgi3,
            icon: icon3,
            show: false,
            logo: logo3

        }
    ],
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
    ]
}

const ServiceSlice = createSlice({
    name: "specialMenu",
    initialState,
    reducers: {
        setShow: (state, {payload}) => {
            state.services.map((item) => {
                if(item.id === payload){
                    return item.show = true
                }else{
                    return item.show = false
                }
            })
        },
        changeActive: (state, {payload}) => {
            state.serviceTypes.map(item => {
                if(item.id === payload){
                    return item.active = true
                } else {
                    return item.active = false
                }
            }) 
            console.log();
        }
        
    }
})

export default ServiceSlice.reducer;
export const {setShow,changeActive} = ServiceSlice.actions;
