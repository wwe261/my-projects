import { createSlice } from "@reduxjs/toolkit";

const searchResults=createSlice({
    name:"searchResults",
    initialState:{booksFromSearch:null},
    reducers:{
        setBooksFromSearch:(state,action)=>{
            state.booksFromSearch=action.payload
        }
    }
})

export const {setBooksFromSearch}=searchResults.actions
export default searchResults.reducer