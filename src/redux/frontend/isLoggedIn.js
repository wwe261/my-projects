import { createSlice } from "@reduxjs/toolkit";

const isUserLoggedIn=createSlice({
    name:"isLoggedIn",
    initialState:{isLoggedIn:false},
    reducers:{
        setLoginStatus:(state,action)=>{
            state.isLoggedIn=action.payload
        }
    }
})

export const {setLoginStatus}=isUserLoggedIn.actions
export default isUserLoggedIn.reducer