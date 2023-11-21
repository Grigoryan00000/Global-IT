import facebookLogo from "../../assets/home/home-team/facebook-logo 2.png"
import twitterLogo from "../../assets/home/home-team/twitter-logo 2.png"
import instagramLogo from "../../assets/home/home-team/instagram-logo 2.png"
import linkedinLogo from "../../assets/home/home-team/linkedin-logo 2.png"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    homeTeam: [
        {
            id:1,
            text: "Անուն Ազգանուն",
            icon1: facebookLogo,
            icon2: twitterLogo,
            icon3: instagramLogo,
            icon4: linkedinLogo,
        },
        {
            id:2,
            text: "Անուն Ազգանուն",
            icon1: facebookLogo,
            icon2: twitterLogo,
            icon3: instagramLogo,
            icon4: linkedinLogo,
        },
        {
            id:3,
            text: "Անուն Ազգանուն",
            icon1: facebookLogo,
            icon2: twitterLogo,
            icon3: instagramLogo,
            icon4: linkedinLogo,
        },
        {
            id:4,
            text: "Անուն Ազգանուն",
            icon1: facebookLogo,
            icon2: twitterLogo,
            icon3: instagramLogo,
            icon4: linkedinLogo,
        },
        {
            id:5,
            text: "Անուն Ազգանուն",
            icon1: facebookLogo,
            icon2: twitterLogo,
            icon3: instagramLogo,
            icon4: linkedinLogo,
        },
        {
            id:6,
            text: "Անուն Ազգանուն",
            icon1: facebookLogo,
            icon2: twitterLogo,
            icon3: instagramLogo,
            icon4: linkedinLogo,
        },
        {
            id:7,
            text: "Անուն Ազգանուն",
            icon1: facebookLogo,
            icon2: twitterLogo,
            icon3: instagramLogo,
            icon4: linkedinLogo,
        },
        {
            id:8,
            text: "Անուն Ազգանուն",
            icon1: facebookLogo,
            icon2: twitterLogo,
            icon3: instagramLogo,
            icon4: linkedinLogo,
        },
        
      ]
}


const HomeTeamSlice = createSlice({
    name: "homeTEam",
    initialState,
})

export default HomeTeamSlice.reducer;
