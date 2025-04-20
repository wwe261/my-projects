import { configureStore } from "@reduxjs/toolkit";
import openPickImageReducer from './openPickImageSlicer'

export const store=configureStore({
    reducer:{
        pickImage:openPickImageReducer
    }
})