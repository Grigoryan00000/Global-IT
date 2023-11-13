import { createSlice } from "@reduxjs/toolkit"
import homeFacultiesItemBottomImg from "../../assets/home-faculties/home-services-item-bottom-item-img.png"

const initialState = {
    homeFaculties: [
        {
            id:1,
            text: "Ծրագրավորման հիմունքներ",
            btn: "Ընդունելություն",
            img: homeFacultiesItemBottomImg
        },
        {
            id:2,
            text: "Ծրագրավորման հիմունքներ",
            btn: "Ընդունելություն",
            img: homeFacultiesItemBottomImg
        },
        {
            id:3,
            text: "Ծրագրավորման հիմունքներ",
            btn: "Ընդունելություն",
            img: homeFacultiesItemBottomImg
        },
        {
            id:4,
            text: "Ծրագրավորման հիմունքներ",
            btn: "Ընդունելություն",
            img: homeFacultiesItemBottomImg
        },
        {
            id:5,
            text: "Ծրագրավորման հիմունքներ",
            btn: "Ընդունելություն",
            img: homeFacultiesItemBottomImg
        },
      ]
}


const HomeFacultiesSlice = createSlice({
    name: "homeFaculties",
    initialState,
})

export default HomeFacultiesSlice.reducer;
