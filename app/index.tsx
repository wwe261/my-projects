import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'


import Dashboard from '../src/components/admin/Dashboard'
import Homepage from '../src/components/frontend/Homepage'
import Searchscreen from '../src/components/frontend/Searchscreen'
import AdditemtocartScreen from '../src/components/frontend/AdditemtocartScreen'
import SharebuttonModal from '../src/components/frontend/SharebuttonModal'
import MenubuttonModal from '../src/components/frontend/MenubuttonModal'
import AccountMeScreen from '../src/components/frontend/AccountMeScreen'
import Login from '../src/components/frontend/Login'
import Signup from '../src/components/frontend/Signup'
import Shipped from '../src/components/frontend/Shipped'
import ShippedNotFound from '../src/components/frontend/ShippedNotFound'
import ReviewScreen from '../src/components/frontend/ReviewScreen'
import StarRating from '../src/components/frontend/StarRating'
import ItemReviewScreen from '../src/components/frontend/ItemReviewScreen'
import YourReviews from '../src/components/frontend/YourReviews'
import SettingsScreen from '../src/components/frontend/SettingsScreen'

const Stack =createNativeStackNavigator();

export default function Page() {
  return (
      
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
              <Stack.Screen name="Home" component={Homepage}/>
              <Stack.Screen name="search" component={Searchscreen}/>
              <Stack.Screen name="settings" component={SettingsScreen}/>
              <Stack.Screen name="me" component={AccountMeScreen}/>
          </Stack.Navigator>
      
         );
}

