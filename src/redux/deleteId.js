import { createSlice } from "@reduxjs/toolkit";

const deleteId=createSlice({
    name:"deleteId",
    initialState:{deleteId:null},
    reducers:{
        setDeleteId:(state,action)=>{
            state.deleteId=action.payload
        }
    }
})

export const {setDeleteId}=deleteId.actions
export default deleteId.reducer