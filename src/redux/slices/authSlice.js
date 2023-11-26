import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    auth: [
        {id: 1,title: "Գրանցվել", active: true},
        {id: 2, title: "Մուտք", active: false}
    ],
    closeAuth: false,
    closeReg: false,
    closeAuthWindow: true
}
const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        setActive: (state, {payload}) => {
            state.auth.map((item) => {
                if(item.id === payload.id){
                    return item.active = true
                }else{
                    return item.active = false
                }
            })

        },
        setCloseAuth: (state, {payload}) => {
            state.closeAuth = !state.closeAuth
        },
        setCloseReg: (state, {payload}) => {
            state.closeReg = !state.closeReg
        },
        setCloseAuthWindow: (state, {payload}) => {
            state.closeAuthWindow = !state.closeAuthWindow
        }
    }
})

export default AuthSlice.reducer;
export const {setActive, setCloseAuth, setCloseReg, setCloseAuthWindow} = AuthSlice.actions;
