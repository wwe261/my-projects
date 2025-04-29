 import { createSlice } from "@reduxjs/toolkit";

 export const deleteUri=createSlice({
    name:"deleteUri",
    initialState:{deleteUri:null},
    reducers:{
        setDeleteUri:(state,action)=>{
            state.deleteUri=action.payload
        }
    }
 })
 export const {setDeleteUri}=deleteUri.actions
 export default deleteUri.reducer