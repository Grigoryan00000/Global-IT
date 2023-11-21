import { createSlice } from "@reduxjs/toolkit";
import homeServicesItemBottomImg from "../../assets/home/home-services/home-services-item-bottom-item-img.png"

const initialState = {
    homeServices: [
        {
            id:1,
            text: "Մոբայլ և համակարգչային խաղեր",
            img: homeServicesItemBottomImg
        },
        {
            id:2,
            text: "Վեբ և գրաֆիկ դիզայն",
            img: homeServicesItemBottomImg
        },
        {
            id:3,
            text: "SEO և SMM առաջխաղացում",
            img: homeServicesItemBottomImg
        },
        {
            id:4,
            text: "Ծրագրավորման հիմունքներ",
            img: homeServicesItemBottomImg
        },
        {
            id:5,
            text: "Ծրագրավորման հիմունքներ",
            img: homeServicesItemBottomImg
        },
      ]
}


const HomeServicesSlice = createSlice({
    name: "homeServices",
    initialState,
})

export default HomeServicesSlice.reducer;

