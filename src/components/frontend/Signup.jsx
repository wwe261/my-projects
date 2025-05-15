import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import {signUpValidation} from '../frontendFunctions/SignUpValidation'

import signupStyles from '../../../styles/frontend/Signup'

import Icon from 'react-native-vector-icons/FontAwesome6'
const Signup = ({setDisplaySignUpModal}) => {

   const [showPassword, setShowPassword]=useState(false)
   const [confirmShowPassword, setConfirmShowPassword]=useState(false)
   
   const {signUpData, signUpErrors, validateForm, handleChange}=signUpValidation()
   
   const handleShowPassword=()=>{
        setShowPassword(false)
            
   }
   const handleHidePassword=()=>{
      setShowPassword(true)
        
   }
   const handleConfirmShowPassword=()=>{
      setConfirmShowPassword(false) 
   }
   const handleConfirmHidePassword=()=>{
      setConfirmShowPassword(true) 
   }
   const handleSubmit=()=>{

     if(validateForm()){

        console.log(signUpData)

     }else{
        console.log(signUpErrors)
     }
   
   }
   
   


  return (<>
        <View style={signupStyles.container}>
            <View style={signupStyles.wrapper}>

                <TouchableOpacity 
                    style={signupStyles.cancelButton}
                    onPress={()=> setDisplaySignUpModal(false)}
                >
                    <Icon name="xmark" style={signupStyles.cancelIcon}/>

                </TouchableOpacity>

                <Text style={signupStyles.wrapperText}>Signup</Text>
            
            <View style={signupStyles.inputsWrapper}>

                <View style={signupStyles.textInputWrapper}>
                    <TextInput 
                     placeholder='Username' 
                     style={signupStyles.textInput}
                     onChangeText={(text)=>{handleChange('username', text)}} 
                    />
                </View>

                <View style={signupStyles.textInputWrapper}>
                    <TextInput 
                    placeholder='Email adress' 
                    style={signupStyles.textInput} 
                    keyboardType='email-adress' 
                    onChangeText={(text)=>{handleChange('email', text)}}
                    />
                </View>

                <View style={signupStyles.textInputWrapper}>
                    <TextInput 
                        placeholder='Phone number'
                        style={signupStyles.textInput} keyboardType='phone-pad'
                        onChangeText={(text)=> {handleChange('phoneNumber', text)}}
                    />
                </View>

                <View style={signupStyles.textInputWrapper}>
                    <TextInput 
                        placeholder='Password' 
                        style={signupStyles.textInput} 
                        secureTextEntry={!showPassword}
                        onChangeText={(text)=>{handleChange('password', text)}}
                    />
                    { showPassword? (<TouchableOpacity 
                                        style={[signupStyles.revealPassword]}  
                                        onPress={handleShowPassword}
                                     >
                                         <Icon name="eye-slash" style={signupStyles.revealPasswordIcon}/>
                                    </TouchableOpacity>):
                                    (<TouchableOpacity 
                                         style={[signupStyles.revealPassword,]} 
                                         onPress={handleHidePassword} 
                                    >
                                         <Icon name="eye" style={signupStyles.revealPasswordIcon}/>
                                    </TouchableOpacity>                                     )
                   }

                    

                        
                </View>

                <View style={signupStyles.textInputWrapper}>
                    <TextInput 
                    placeholder='Confirm Password' 
                    style={signupStyles.textInput} 
                    secureTextEntry={!confirmShowPassword}
                    onChangeText={(text)=>{handleChange('confirmPassword', text)}}
                    />
                    
                    { confirmShowPassword? (<TouchableOpacity 
                                        style={[signupStyles.revealPassword]}  
                                        onPress={handleConfirmShowPassword}
                                     >
                                         <Icon name="eye-slash" style={signupStyles.revealPasswordIcon}/>
                                    </TouchableOpacity>) :
                                    (<TouchableOpacity 
                                         style={[signupStyles.revealPassword,]} 
                                         onPress={handleConfirmHidePassword} 
                                    >
                                         <Icon name="eye" style={signupStyles.revealPasswordIcon}/>
                                    </TouchableOpacity>                                     )
                   }
                </View>
            </View>
            
            <TouchableOpacity style={signupStyles.signupButton} onPress={handleSubmit}>
                <Text style={signupStyles.signupButtonText}>Signup</Text>
            </TouchableOpacity>
            </View>
            
        </View>
         </>)
}

export default Signup