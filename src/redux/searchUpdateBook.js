import { createSlice } from "@reduxjs/toolkit";

export const updateValue=createSlice({
    name:"updateValue",
    initialState:{searchValue:""},
    reducers:{
        setUpdateValue:(state,action)=>{
             state.searchValue=action.payload 
        }
    }
})

export const {setUpdateValue}=updateValue.actions
export default updateValue.reducer 