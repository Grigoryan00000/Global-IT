import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    auth: [
        {id: 1,title: "Գրանցվել", active: true},
        {id: 2, title: "Մուտք", active: false}
    ]

}
const AuthSlice = createSlice({
    name: "specialMenu",
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
        
    }
})

export default AuthSlice.reducer;
export const {setActive} = AuthSlice.actions;
