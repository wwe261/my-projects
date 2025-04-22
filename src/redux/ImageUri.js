import { createSlice } from "@reduxjs/toolkit";

export const imageUri=createSlice({
    name:"imageUri",
    initialState:{imageUri:""},
    reducers:{
        setUri:(state,action)=>{
            state.imageUri=action.payload
        }
    }


})

export const{setUri}=imageUri.actions
export default imageUri.reducer

