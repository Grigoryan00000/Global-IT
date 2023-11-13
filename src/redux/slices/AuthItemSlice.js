import { createSlice } from "@reduxjs/toolkit";

import student from "../../assets/auth/student.png"
import teacher from "../../assets/auth/teacher.png"
import freelance from "../../assets/auth/freelance.png"
import friend from "../../assets/auth/friend.png"
import guest from "../../assets/auth/guest.png"


const initialState = {
    authItemData: [
        {id: 1, title:  "Ուսանող", active: true, icon: student},
        {id: 2, title:  "Ուս․ հաստատություն", active: false, icon: ""},
        {id: 3, title:  "Դասախոս", active: false, icon: teacher},
        {id: 4, title:  "Ֆրիլանսեր", active: false, icon: freelance},
        {id: 5, title:  "Գործընկեր", active: false, icon: friend},
        {id: 6, title:  "Հյուր", active: false, icon: guest}
      ]

}
const AuthItemSlice = createSlice({
    name: "specialMenu",
    initialState,
    reducers: {
        setActiveItem: (state, {payload}) => {
            state.authItemData.map((item) => {
                if(item.id === payload.id){
                    return item.active = true
                }else{
                    return item.active = false
                }
            })

        },
        
    }
})

export default AuthItemSlice.reducer;
export const {setActiveItem} = AuthItemSlice.actions;
