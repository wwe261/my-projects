 import { createSlice } from "@reduxjs/toolkit";

 export const openPickImageSlicer=createSlice({
    name:"pickImage",
    initialState:{open:false},
    reducers:{
        setValue:(state,action)=>{
            state.open=action.payload
        }
    }

 })
 export const {setValue}=openPickImageSlicer.actions
 export default openPickImageSlicer.reducer