import { createSlice } from "@reduxjs/toolkit";

export const deleteConfirmationModal=createSlice({
    name:"deleteConfirmationModal",
    initialState:{displayConfirmationModal:false},
    reducers:{
        setModalValue:(state,action)=>{
            state.displayConfirmationModal=action.payload
        }
    }
})

export const {setModalValue}=deleteConfirmationModal.actions
export default deleteConfirmationModal.reducer