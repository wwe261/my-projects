import { View, Text, Image,TouchableOpacity } from 'react-native'
import { setLoginStatus } from '@/src/redux/frontend/isLoggedIn'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome6'

import Footernavigation from '@/src/sharedComponets/Footernavigation'
import Login from './Login'
import Signup from './Signup'

import accountStyles from '../../../styles/frontend/AccountMeScreen'

const AccountMeScreen = () => {

 const LoginStatus=useSelector((state)=> state.isLoggedIn.isLoggedIn)
 const [displayLoginModal, setDisplayLoginModal]=useState(false)
 const [displaySignUpModal, setDisplaySignUpModal]=useState(false)

 
 
 const handleLoginModalDisplay=()=>{
     setDisplayLoginModal(true)
 }

 const handleSignUpModalDisplay=()=>{
     setDisplaySignUpModal(true)
 }

 useEffect(()=>{
   
 
 })

  return (<>
       <View style={accountStyles.container}>

            {displayLoginModal && <Login setDisplayLoginModal={setDisplayLoginModal} setDisplaySignUpModal={setDisplaySignUpModal}/>}
            {displaySignUpModal && <Signup setDisplaySignUpModal={setDisplaySignUpModal}/>}

            <View style={accountStyles.accountProfileContainer}>

                <View style={accountStyles.imageFigure}>
                    <Image source={require('../../../assets/images/sethrollins.0.jpg')} style={accountStyles.image}/>
                </View>

                <Text style={accountStyles.text}>John Snow</Text>
                <Text style={accountStyles.emailText}>John Snow@gmail.com</Text>

                <TouchableOpacity style={accountStyles.uploadButton}>
                        <Icon name="camera" style={accountStyles.uploadIcon}/>
                </TouchableOpacity>

            </View>

            <View style={accountStyles.mainContent}>

                <View style={accountStyles.loginWrapper}>
                    <TouchableOpacity 
                        style={accountStyles.loginWrapperButtons}
                        onPress={handleLoginModalDisplay}
                    >
                        <Text style={accountStyles.loginWrapperText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  
                        style={accountStyles.loginWrapperButtons}
                        onPress={handleSignUpModalDisplay}
                    >
                        <Text style={accountStyles.loginWrapperText}>Signup</Text>
                    </TouchableOpacity>

                </View>

                <View style={accountStyles.ordersInformationContainer}>

                    <Text style={accountStyles.wrapperText}>My orders</Text>
                    <View style={accountStyles.wrapper}>

                    <View style={accountStyles.ordersInformationWrapper}>
                        <TouchableOpacity style={accountStyles.ordersInformationButton}>
                                <Icon name="truck" style={accountStyles.ordersInformationIcon}/>
                        </TouchableOpacity>
                        <Text style={accountStyles.ordersInformationText}>Shipped</Text>
                    </View>
                    
                    <View style={accountStyles.ordersInformationWrapper}>
                        <TouchableOpacity style={accountStyles.ordersInformationButton}>
                                <Icon name="message" style={accountStyles.ordersInformationIcon}/>
                        </TouchableOpacity>
                        <Text style={accountStyles.ordersInformationText}>Review</Text>
                    </View>

                    </View>

                </View>

            </View>




        {<Footernavigation/>}
       </View>
         </>)
}

export default AccountMeScreen