import { createSlice } from "@reduxjs/toolkit";
//SETS INITIAL STATE SO THAT THE FIELDS WILL BE EMPTY STRINGS
const initialState = {
    bookFormData: {
      title: '',
      isbn: '',
      authors: '',
      category: '',
      price: '',
      image: '',
      bucket_path:''
    },
  }
 


const UpdateBookInputValues=createSlice({
    name:"UpdateBookInputValues",
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

export const {updateFields,resetForm}=UpdateBookInputValues.actions
export default UpdateBookInputValues.reducer