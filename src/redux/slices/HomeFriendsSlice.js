import { createSlice } from "@reduxjs/toolkit";
import homeFriendsIcon1 from "../../assets/home/home-friends/homeFriendsIcon1.png"
import homeFriendsIcon2 from "../../assets/home/home-friends/homeFriendsIcon2.png"
import homeFriendsIcon3 from "../../assets/home/home-friends/homeFriendsIcon3.png"
import homeFriendsIcon4 from "../../assets/home/home-friends/homeFriendsIcon4.png"
import homeFriendsIcon5 from "../../assets/home/home-friends/homeFriendsIcon5.png"
import HomeFriends from "../../components/home/home-friends/HomeFriends";


const initialState = {
    homeFriends: [
        {
            id: 1,
            img: homeFriendsIcon1
        },
        {
            id: 2,
            img: homeFriendsIcon2
        },
        {
            id: 3,
            img: homeFriendsIcon3
        },
        {
            id: 4,
            img: homeFriendsIcon4
        },
        {
            id: 5,
            img: homeFriendsIcon5
        },
    ]
}

const HomeFriendsSlice = createSlice({
    name: "homeFriends",
    initialState
})

export default HomeFriendsSlice.reducer