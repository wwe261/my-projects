import { createSlice } from "@reduxjs/toolkit";

const updateSearchResults=createSlice({
    name:"searchResults",
    initialState:{updateBooksFromSearch:null},
    reducers:{
        setupdateBooksFromSearch:(state,action)=>{
            state.updateBooksFromSearch=action.payload
        }
    }
})

export const {setupdateBooksFromSearch}=updateSearchResults.actions
export default updateSearchResults.reducer