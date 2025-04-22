import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer, persistStore } from "redux-persist";
import { version } from "react";
import {productsApi} from './TollkitQueries'

import storage from '@react-native-async-storage/async-storage'
import openPickImageReducer from '../../src/redux/openPickImageSlicer'
import imageUriReducer from '../../src/redux/ImageUri'



const rootReducer=combineReducers({
    pickImage:openPickImageReducer,
    imageUri:imageUriReducer,
    [productsApi.reducerPath]:productsApi.reducer
})
const persistConfig={key:'root',storage, version:1, blacklist: [productsApi.reducerPath]}
const persistedState=persistReducer(persistConfig,rootReducer)

export const store=configureStore({
    reducer:persistedState,
    middleware:(getDefaultMiddleWare)=>getDefaultMiddleWare({
        serializableCheck:false
    }).concat(productsApi.middleware)
})

export const persistor=persistStore(store)
setupListeners(store.dispatch);