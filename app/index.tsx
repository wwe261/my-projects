import 'react-native-reanimated'; 
import 'react-native-gesture-handler';

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StyleSheet, Text, View,Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import {store} from '../src/redux/store'

import Main from './Main'

export default function Page() {

        
  return (<>
          <GestureHandlerRootView  style={{ flex: 1 }}>
          <Provider store={store}>
                  <Main/>
          </Provider>  
          </GestureHandlerRootView>  
  </>)
} 

 