import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    homeWorks: [
        {
            id:1,
            title: "CarBus GO",
            text: "Միասնական Տաքսի",
            btn: "Design & Development",
        },
        {
            id:2,
            title: "IERA",
            text: "International Education and research Alliance",
            btn: "Design & Development",
        },
        {
            id:3,
            title: "YSCI",
            text: "Ծրագրավորման հիմունքներ",
            btn: "Design & Development",
        },
        
      ]
}


const HomeWorksSlice = createSlice({
    name: "homeWorks",
    initialState,
})

export default HomeWorksSlice.reducer;
