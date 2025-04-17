import { View, Text, TextInput,TouchableOpacity } from 'react-native'

import loginStyles from '../../../styles/frontend/Login'

import Icon from 'react-native-vector-icons/FontAwesome6'

const Login = () => {
  return (<>
        <View style={loginStyles.container}>
            <View style={loginStyles.wrapper}>
                <TouchableOpacity style={loginStyles.cancelWrapper}>
                    <Icon  name="xmark"style={loginStyles.cancelIcon}/>
                </TouchableOpacity>
                <Text style={loginStyles.wrapperText}>Login</Text>

                <View style={loginStyles.inputsWrapper}>

                    <View style={loginStyles.textInputWrapper}>
                        <TextInput placeholder='Username or Email' style={loginStyles.textInput}/>
                    </View>

                    <View style={loginStyles.textInputWrapper}>
                        <TextInput placeholder='Password' style={loginStyles.textInput} secureTextEntry/>

                        <TouchableOpacity style={[loginStyles.revealPassword,]} >
                            <Icon name="eye" style={loginStyles.revealPasswordIcon}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={[loginStyles.revealPassword, {display:"none"}]}>
                            <Icon name="eye-slash" style={loginStyles.revealPasswordIcon}/>
                        </TouchableOpacity>
                        
                    </View>

            
                </View>
                <TouchableOpacity style={loginStyles.loginButton}>
                    <Text style={loginStyles.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>
                <Text style={loginStyles.signupText}>Dont have an account? <Text style={{color:"blue"}}>Signup</Text></Text>
            </View>
        </View>
  
         </>)
}

export default Login