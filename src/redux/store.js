import { configureStore } from "@reduxjs/toolkit";
import openPickImageReducer from './openPickImageSlicer'
import imageUriReducer, { imageUri } from './ImageUri'
export const store=configureStore({
    reducer:{
        pickImage:openPickImageReducer,
        imageUri:imageUriReducer
    }
})