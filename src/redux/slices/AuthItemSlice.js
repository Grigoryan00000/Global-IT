import { createSlice } from "@reduxjs/toolkit";

import student from "../../assets/auth/student.png"
import teacher from "../../assets/auth/teacher.png"
import freelance from "../../assets/auth/freelance.png"
import friend from "../../assets/auth/friend.png"
import guest from "../../assets/auth/guest.png"
import school from "../../assets/auth/school.png"

import studentReg from "../../assets/auth/student-reg.png"
import teacherReg from "../../assets/auth/teacher-reg.png"
import schoolReg from "../../assets/auth/school-reg.png"
import friendReg from "../../assets/auth/friend-reg.png"
import freelanceReg from "../../assets/auth/freelance-reg.png"
import guestReg from "../../assets/auth/guest-reg.png"


const initialState = {
    authItemData: [
        {id: 1, title:  "Ուսանող", active: true, icon: student, color: "#40A3E4", backImg: studentReg},
        {id: 2, title:  "Ուս․ հաստատություն", active: false, icon: school, color: "#F8B254", backImg: schoolReg},
        {id: 3, title:  "Դասախոս", active: false, icon: teacher, color: "#662BAF", backImg: teacherReg},
        {id: 4, title:  "Ֆրիլանսեր", active: false, icon: freelance, color: "#56CD53", backImg: freelanceReg},
        {id: 5, title:  "Գործընկեր", active: false, icon: friend, color: "#6B24D6", backImg: friendReg},
        {id: 6, title:  "Հյուր", active: false, icon: guest, color: "#A659E4", backImg: guestReg}
    ],
    activeItem: 1

}
const AuthItemSlice = createSlice({
    name: "specialMenu",
    initialState,
    reducers: {
        setActiveItem: (state, {payload}) => {
            state.authItemData.map((item) => {
                console.log(state.authItemData);
                if(item.id === payload.id){
                    state.activeItem = item.id
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
