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
import deleteConfirmationModalReducer from '../../src/redux/deleteConfirmationModal'
import deleteIdReducer from '../../src/redux/deleteId'
import searchResultsReducer from '../../src/redux/SearchResult'
import deleteUriReducer from '../../src/redux/deleteUri'
import deleteSearchValueReducer from '../../src/redux/deleteSearchValue'
import searchValueReducer from '../../src/redux/searchValue'
import updateValueReducer from '../../src/redux/searchUpdateBook'
import updateSearchResultsReducer from '../../src/redux/updateSearchResult'
import UpdateBookInputValuesReducer from '../../src/redux/UpdateBookInputValue'
import updateImageUriReducer from '../../src/redux/updateImageUri'

const rootReducer=combineReducers({
    pickImage:openPickImageReducer,
    imageUri:imageUriReducer,
    persistDashboardPages:persistDashboardPagesReducer,
    [productsApi.reducerPath]:productsApi.reducer,
    addBookInputValues:addBookInputValuesReducer,
    deleteConfirmationModal:deleteConfirmationModalReducer,
    deleteId:deleteIdReducer,
    searchedBooks:searchResultsReducer,
    deleteUri:deleteUriReducer,
    deleteSearchValue:deleteSearchValueReducer,
    searchValue:searchValueReducer,
    updateSearchValue:updateValueReducer,
    updateResults:updateSearchResultsReducer,
    updateBookInputValues:UpdateBookInputValuesReducer,
    updateImageUri:updateImageUriReducer

})
const persistConfig={key:'root',storage, version:1, blacklist: [productsApi.reducerPath, 
                                                                'pickImage', 'deleteConfirmationModal',
                                                                 'deleteId', , 'deleteUri',  ]}
                                                                 
const persistedState=persistReducer(persistConfig,rootReducer)

export const store=configureStore({
    reducer:persistedState,
    middleware:(getDefaultMiddleWare)=>getDefaultMiddleWare({
        serializableCheck:false
    }).concat(productsApi.middleware)
})

export const persistor=persistStore(store)
setupListeners(store.dispatch);