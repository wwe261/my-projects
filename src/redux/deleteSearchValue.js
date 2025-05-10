import { createSlice } from "@reduxjs/toolkit";

export const deleteSearchValue=createSlice({
    name:"deleteSearchValue",
    initialState:{searchValue:""},
    reducers:{
        setDeleteSearch:(state,action)=>{
             state.searchValue=action.payload 
        }
    }
})

export const {setDeleteSearch}=deleteSearchValue.actions
export default deleteSearchValue.reducer