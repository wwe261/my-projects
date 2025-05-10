import { createSlice } from "@reduxjs/toolkit";

export const updateImageUri=createSlice({
    name:"imageUri",
    initialState:{imageUri:""},
    reducers:{
        setUpdateUri:(state,action)=>{
            state.imageUri=action.payload
        }
    }


})

export const{setUpdateUri}=updateImageUri.actions
export default updateImageUri.reducer