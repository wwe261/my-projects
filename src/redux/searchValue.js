import { createSlice } from "@reduxjs/toolkit";

export const searchValue=createSlice({
    name:"searchValue",
    initialState:{searchValue:""},
    reducers:{
        setSearchValue:(state,action)=>{
             state.searchValue=action.payload 
        }
    }
})

export const {setSearchValue}=searchValue.actions
export default searchValue.reducer 