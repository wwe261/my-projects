import { View, Text, TextInput,TouchableOpacity,TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Pressable } from 'react-native'
import { useRef, useState } from 'react'
import loginStyles from '../../../styles/frontend/Login'

import Icon from 'react-native-vector-icons/FontAwesome6'

const Login = ({setDisplayLoginModal, setDisplaySignUpModal}) => {

   const [showPassword, setShowPassword]=useState(false)

   const handleShowPassword=()=>{
        setShowPassword(false)
        
   }

   const handleHidePassword=()=>{
      setShowPassword(true)

      
   }
  return (<>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    
            <KeyboardAvoidingView
                  style={loginStyles.container}
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                  keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
                  
            >
            <View style={loginStyles.wrapper}>

                <TouchableOpacity style={loginStyles.cancelWrapper} onPress={()=>{setDisplayLoginModal(false)}} >
                    <Icon  name="xmark"style={loginStyles.cancelIcon}/>
                </TouchableOpacity>

                <Text style={loginStyles.wrapperText}>Login</Text>

                <View style={loginStyles.inputsWrapper}>

                    <View style={loginStyles.textInputWrapper}>
                        <TextInput placeholder='Username or Email' style={loginStyles.textInput}/>
                    </View>

                    <View style={loginStyles.textInputWrapper}>
                        <TextInput 
                        placeholder='Password' 
                        style={loginStyles.textInput} 
                        secureTextEntry={!showPassword}
                        />

                     {showPassword?( <TouchableOpacity 
                                            style={[loginStyles.revealPassword]}
                                            onPress={handleShowPassword}
                                     >
                                            <Icon name="eye-slash" style={loginStyles.revealPasswordIcon}/>
                                     </TouchableOpacity>) :

                                     (<TouchableOpacity 
                                             style={[loginStyles.revealPassword,]}
                                             onPress={handleHidePassword}
                                             >
                                         <Icon name="eye" style={loginStyles.revealPasswordIcon}/>
                                      </TouchableOpacity>)  }
                        

                        
                        
                    </View>

            
                </View>
                <TouchableOpacity style={loginStyles.loginButton}>
                    <Text style={loginStyles.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>

                <Text style={loginStyles.signupText}>Dont have an account? 
                         <Text 
                         style={{color:"blue"}}
                         onPress={()=>{setDisplaySignUpModal(true), setDisplayLoginModal(false)}}
                         > 
                         Signup
                         
                         </Text>
                      

                </Text>
            </View>
            </KeyboardAvoidingView>
        
        </TouchableWithoutFeedback>
  
         </>)
}

export default Login