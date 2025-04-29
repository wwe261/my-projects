import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer, persistStore } from "redux-persist";
import { version } from "react";
import {productsApi} from './TollkitQueries'

import storage from '@react-native-async-storage/async-storage'
import openPickImageReducer from '../../src/redux/openPickImageSlicer'
import imageUriReducer from '../../src/redux/ImageUri'
import persistDashboardPagesReducer from '../../src/redux/persistDashboardPages'
import addBookInputValuesReducer from '../../src/redux/AddBookInputValue'
import pickImage from "@/styles/admin/pickImageModal";
import deleteConfirmationModalReducer from '../../src/redux/deleteConfirmationModal'
import deleteIdReducer from '../../src/redux/deleteId'
import searchResultsReducer from '../../src/redux/SearchResult'
import deleteUriReducer from '../../src/redux/deleteUri'

const rootReducer=combineReducers({
    pickImage:openPickImageReducer,
    imageUri:imageUriReducer,
    persistDashboardPages:persistDashboardPagesReducer,
    [productsApi.reducerPath]:productsApi.reducer,
    addBookInputValues:addBookInputValuesReducer,
    deleteConfirmationModal:deleteConfirmationModalReducer,
    deleteId:deleteIdReducer,
    searchedBooks:searchResultsReducer,
    deleteUri:deleteUriReducer

})
const persistConfig={key:'root',storage, version:1, blacklist: [productsApi.reducerPath, 
                                                                'pickImage', 'deleteConfirmationModal',
                                                                 'deleteId', 'searchedBooks', 'deleteUri']}
                                                                 
const persistedState=persistReducer(persistConfig,rootReducer)

export const store=configureStore({
    reducer:persistedState,
    middleware:(getDefaultMiddleWare)=>getDefaultMiddleWare({
        serializableCheck:false
    }).concat(productsApi.middleware)
})

export const persistor=persistStore(store)
setupListeners(store.dispatch);