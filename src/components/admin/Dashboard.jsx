import { View, Text, Button, TouchableOpacity, TextInput,TouchableWithoutFeedback,Keyboard} from 'react-native'
import { useEffect, useRef, useState, useMemo } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useDispatch,useSelector } from 'react-redux'

import { setValue } from '@/src/redux/openPickImageSlicer'
import { setPageToRender } from '@/src/redux/persistDashboardPages'

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { useNavigation } from 'expo-router'

import BottomSheet from '@gorhom/bottom-sheet'
import Icon from 'react-native-vector-icons/FontAwesome'

import adminStyles from '../../../styles/admin/Dashboard'

import Addbook from '../admin/Addbook.jsx'
import Uploadbook from '../admin/Uploadbook'
import Searchbook from '../admin/Searchbook'
import Deletebook from '../admin/Deletebook'
import Welcomepage from './Welcomepage'
import PickImageModal from './PickImageModal'

const Dashboard = () => {
/* THIS CODE IS FOR RENDERING THE COMPONENTS WHICH ARE ADDBOOK, WELCOMEPAGE,ETC... */
const [component, setComponent]=useState('welcomePage')

      const renderComponents=()=>{
        switch (component){
          case 'addBook':
              return <Addbook/>
          break;

          case 'deleteBook':
              return <Deletebook/>
          break;

          case 'searchBook':
            return <Searchbook/>
          break;

          case 'updateBook':
            return <Uploadbook/>
          break;
          
          case 'welcomePage':
            return <Welcomepage/>
          break;

          default:
            return <Welcomepage/>
        }
      }
      const bottomSheetRef=useRef(null)
      const snapPoints=useMemo(()=>["35%", "50%"],[])

      const dispatch=useDispatch()
      const displayPickImageModal=useSelector((state)=>state.pickImage.open)
      

      useEffect(() => {
        if (displayPickImageModal && bottomSheetRef.current) {
          bottomSheetRef.current.expand();
        }
      }, [displayPickImageModal]);
      
      const renderComponentState=useSelector((state)=> state.persistDashboardPages.pageToRender)
      useEffect(()=>{
        setComponent(renderComponentState)
      }, [renderComponentState])
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <GestureHandlerRootView style={{flex:1}}>
    <View style={adminStyles.adminContainer}>
     {/* This code is for the analytics of our store like the number of books sold, number of user accounts, revenues generated
         & number of books available */}
     <View style={adminStyles.adminAnalyticsContainer}  >
          <View style={adminStyles.adminAnalytics}>
             <Text style={adminStyles.adminAnalyticsText}>NUMBER OF BOOKS</Text>
             <Text style={adminStyles.adminAnalyticsText}> 3</Text>
           </View>

          <View style={adminStyles.adminAnalytics}>
             <Text style={adminStyles.adminAnalyticsText}>BOOKS SOLD</Text>
             <Text style={adminStyles.adminAnalyticsText}>3</Text>
          </View>

          <View style={adminStyles.adminAnalytics}>
             <Text style={adminStyles.adminAnalyticsText}>NUMBER OF USER ACCOUNTS</Text>
             <Text style={adminStyles.adminAnalyticsText}>5</Text>
          </View>

          <View style={adminStyles.adminAnalytics}>
            <Text style={adminStyles.adminAnalyticsText}>REVENUES</Text>
            <Text style={adminStyles.adminAnalyticsText}>R15000</Text>
          </View>

     </View>
     

     <View style={adminStyles.adminMainSection}>

      <View style={adminStyles.adminAddBookSectionContainer} >

        {renderComponents()}

      </View>
     </View>

         {/* THIS CODE IS FOR THE BUTTON FOOTER WHICH WILL BE IN A FIXED POSITION */}
         <View style={adminStyles.adminButtonsContainer}>
        {/* THIS ARE BUTTONS BUT HERE WE ARE USINH TOUCHABLE OPACITY INSTEAD OF BUTTON COMPONENT */}
         <TouchableOpacity  style={adminStyles.adminButtonStyles} onPress={()=>dispatch(setPageToRender("addBook"))} > 
        {/* THIS CONTAINS THE TEXT AND ICON ALLOWING US TO DISPLAY THEM THE WAY WE WANT */}
          <View style={adminStyles.adminIconTextContainer} >
            <Icon name="plus-circle"  style={adminStyles.adminButtonIconStyles}/>
            <Text style={adminStyles.adminButtonTextStyles}>ADD BOOK</Text>
          </View>
         </TouchableOpacity>

         <TouchableOpacity  style={adminStyles.adminButtonStyles} onPress={()=>dispatch(setPageToRender("deleteBook"))}> 
          <View style={adminStyles.adminIconTextContainer}>
            <Icon name="trash"  style={adminStyles.adminButtonIconStyles}/>
            <Text style={adminStyles.adminButtonTextStyles}>DELETE BOOK</Text>
          </View>
         </TouchableOpacity>

         <TouchableOpacity  style={adminStyles.adminButtonStyles} onPress={()=>dispatch(setPageToRender("searchBook"))}> 
          <View style={adminStyles.adminIconTextContainer}>
            <Icon name="search"  style={adminStyles.adminButtonIconStyles}/>
            <Text style={adminStyles.adminButtonTextStyles}>SEARCH BOOK</Text>
          </View>
         </TouchableOpacity>

         <TouchableOpacity  style={adminStyles.adminButtonStyles} onPress={()=>dispatch(setPageToRender("updateBook"))} > 
          <View style={adminStyles.adminIconTextContainer}>
            <Icon name="edit"  style={adminStyles.adminButtonIconStyles}/>
            <Text style={adminStyles.adminButtonTextStyles}>UPDATE BOOK</Text>
          </View>
         </TouchableOpacity>

         <TouchableOpacity  style={adminStyles.adminButtonStyles} onPress={()=>dispatch(setPageToRender("welcomeBook"))} > 
          <View style={adminStyles.adminIconTextContainer}>
            <Icon name="home"  style={adminStyles.adminButtonIconStyles}/>
            <Text style={adminStyles.adminButtonTextStyles}>Home</Text>
          </View>
         </TouchableOpacity>
          
        </View>

      {displayPickImageModal &&<BottomSheet
        index={0}
        snapPoints={snapPoints}
        ref={bottomSheetRef}
      >
        <PickImageModal/> 
      </BottomSheet>}
        

 </View>
 </GestureHandlerRootView>
 </TouchableWithoutFeedback>
  )
}

export default Dashboard