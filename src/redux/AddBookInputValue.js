import { createSlice } from "@reduxjs/toolkit";
//SETS INITIAL STATE SO THAT THE FIEKDS WILL BE EMPTY STRINGS
const initialState = {
    bookFormData: {
      title: '',
      isbn: '',
      authors: '',
      category: '',
      price: '',
      image: '',
    },
  }



const addBookInputValues=createSlice({
    name:"addBookInputValues",
    initialState,
    reducers:{
       updateFields:(state,action)=>{

          const {name,value}=action.payload
          state.bookFormData[name]=value
          
       },
       resetForm:(state)=>{
        state.bookFormData=initialState.bookFormData
       }
    }
})

export const {updateFields,resetForm}=addBookInputValues.actions
export default addBookInputValues.reducer