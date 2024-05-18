import { createSlice } from "@reduxjs/toolkit";
import facultetProfessionIcon1 from "../../assets/facultet/facultet-profession-icon1.png"
import facultetProfessionIcon2 from "../../assets/facultet/facultet-profession-icon2.png"
import facultetProfessionIcon3 from "../../assets/facultet/facultet-profession-icon3.png"
import facultetProfessionItemIcon1 from "../../assets/facultet/facultet-profession-item-icon4.png"
import facultetProfessionItemIcon2 from "../../assets/facultet/facultet-profession-icon1.png"
import facultetProfessionItemIcon3 from "../../assets/facultet/facultet-profession-item-icon3.png"
import facultetProfessionItemIcon4 from "../../assets/facultet/facultet-profession-item-icon2.png"
import facultetProfessionItemImg from "../../assets/facultet/facultet-profession-item-img.png"

const initialState = {
    facultetProfession: [
        {
            id:1,
            img: facultetProfessionIcon2,
            title: "Վեբ Ծրագրավորման",
            text: "ֆակուլտետ",
        },
        {
            id:2,
            img: facultetProfessionIcon3,
            title: "Ծրագրավորման",
            text: "ֆակուլտետ",
        },
        {
            id:3,
            img: facultetProfessionIcon1,
            title: "Մուլտիմեդիայի",
            text: "ֆակուլտետ",
        },
    ],

    facultetProfessionItems: [
        {
            id:1,
            img: facultetProfessionItemImg,
            title: "Front end ծրագրավորում",
            admissionTitle: "Ընդունելություն ",
            admissionTime: "28.01.2023 - 10.02.2023",
            duration: "Տևողությունը - 4 - 6 ամիս",
            icon1: facultetProfessionItemIcon1,
            icon1text:"Offline",
            icon2: facultetProfessionItemIcon2,
            icon2text: "Online",
            icon3: facultetProfessionItemIcon3,
            icon3text: "Խմբային",
            icon4: facultetProfessionItemIcon4,
            icon4text: "Անհատական"

        },
        {
            id:2,
            img: facultetProfessionItemImg,
            title: "Front end ծրագրավորում",
            admissionTitle: "Ընդունելություն ",
            admissionTime: "28.01.2023 - 10.02.2023",
            duration: "Տևողությունը - 4 - 6 ամիս",
            icon1: facultetProfessionItemIcon1,
            icon1text:"Offline",
            icon2: facultetProfessionItemIcon2,
            icon2text: "Online",
            icon3: facultetProfessionItemIcon3,
            icon3text: "Խմբային",
            icon4: facultetProfessionItemIcon4,
            icon4text: "Անհատական"
        },
        {
            id:3,
            img: facultetProfessionItemImg,
            title: "Front end ծրագրավորում",
            admissionTitle: "Ընդունելություն ",
            admissionTime: "28.01.2023 - 10.02.2023",
            duration: "Տևողությունը - 4 - 6 ամիս",
            icon1: facultetProfessionItemIcon1,
            icon1text:"Offline",
            icon2: facultetProfessionItemIcon2,
            icon2text: "Online",
            icon3: facultetProfessionItemIcon3,
            icon3text: "Խմբային",
            icon4: facultetProfessionItemIcon4,
            icon4text: "Անհատական"
        },
        {
            id:4,
            img: facultetProfessionItemImg,
            title: "Front end ծրագրավորում",
            admissionTitle: "Ընդունելություն ",
            admissionTime: "28.01.2023 - 10.02.2023",
            duration: "Տևողությունը - 4 - 6 ամիս",
            icon1: facultetProfessionItemIcon1,
            icon1text:"Offline",
            icon2: facultetProfessionItemIcon2,
            icon2text: "Online",
            icon3: facultetProfessionItemIcon3,
            icon3text: "Խմբային",
            icon4: facultetProfessionItemIcon4,
            icon4text: "Անհատական"
        },
        {
            id:5,
            img: facultetProfessionItemImg,
            title: "Front end ծրագրավորում",
            admissionTitle: "Ընդունելություն ",
            admissionTime: "28.01.2023 - 10.02.2023",
            duration: "Տևողությունը - 4 - 6 ամիս",
            icon1: facultetProfessionItemIcon1,
            icon1text:"Offline",
            icon2: facultetProfessionItemIcon2,
            icon2text: "Online",
            icon3: facultetProfessionItemIcon3,
            icon3text: "Խմբային",
            icon4: facultetProfessionItemIcon4,
            icon4text: "Անհատական"
        },
        {
            id:6,
            img: facultetProfessionItemImg,
            title: "Front end ծրագրավորում",
            admissionTitle: "Ընդունելություն ",
            admissionTime: "28.01.2023 - 10.02.2023",
            duration: "Տևողությունը - 4 - 6 ամիս",
            icon1: facultetProfessionItemIcon1,
            icon1text:"Offline",
            icon2: facultetProfessionItemIcon2,
            icon2text: "Online",
            icon3: facultetProfessionItemIcon3,
            icon3text: "Խմբային",
            icon4: facultetProfessionItemIcon4,
            icon4text: "Անհատական"
        },
    ],

}
const FacultetSlice = createSlice({
    name: "facultet",
    initialState,
    
})

export default FacultetSlice.reducer;