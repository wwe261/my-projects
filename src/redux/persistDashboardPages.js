import { createSlice } from "@reduxjs/toolkit";

export const persistDashboardPages=createSlice({
    name:"persistDahboardPages",
    initialState:{pageToRender:""},
    reducers:{
        setPageToRender:(state, action)=>{
            state.pageToRender=action.payload
        }
    }
})

export const {setPageToRender}=persistDashboardPages.actions
export default persistDashboardPages.reducer