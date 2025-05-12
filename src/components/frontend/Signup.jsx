import { View, Text,TextInput,TouchableOpacity } from 'react-native'

import signupStyles from '../../../styles/frontend/Signup'

import Icon from 'react-native-vector-icons/FontAwesome6'
const Signup = () => {
  return (<>
        <View style={signupStyles.container}>
            <View style={signupStyles.wrapper}>

                <TouchableOpacity style={signupStyles.cancelButton}>
                    <Icon name="xmark" style={signupStyles.cancelIcon}/>
                </TouchableOpacity>

                <Text style={signupStyles.wrapperText}>Signup</Text>
            
            <View style={signupStyles.inputsWrapper}>

                <View style={signupStyles.textInputWrapper}>
                    <TextInput 
                     placeholder='Username' style={signupStyles.textInput}
                     
                    />
                </View>

                <View style={signupStyles.textInputWrapper}>
                    <TextInput placeholder='Email adress' style={signupStyles.textInput} keyboardType='email-adress' />
                </View>

                <View style={signupStyles.textInputWrapper}>
                    <TextInput placeholder='Phone number' style={signupStyles.textInput} keyboardType='phone-pad'/>
                </View>

                <View style={signupStyles.textInputWrapper}>
                    <TextInput placeholder='Password' style={signupStyles.textInput} secureTextEntry/>
                    <TouchableOpacity style={[signupStyles.revealPassword,]} >
                            <Icon name="eye" style={signupStyles.revealPasswordIcon}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={[signupStyles.revealPassword, {display:"none"}]}>
                            <Icon name="eye-slash" style={signupStyles.revealPasswordIcon}/>
                        </TouchableOpacity>
                </View>

                <View style={signupStyles.textInputWrapper}>
                    <TextInput placeholder='Confirm Password' style={signupStyles.textInput} secureTextEntry/>

                    <TouchableOpacity style={[signupStyles.revealPassword,]} >
                            <Icon name="eye" style={signupStyles.revealPasswordIcon}/>
                    </TouchableOpacity>

                        <TouchableOpacity style={[signupStyles.revealPassword, {display:"none"}]}>
                            <Icon name="eye-slash" style={signupStyles.revealPasswordIcon}/>
                        </TouchableOpacity>
                </View>
            </View>
            
            <TouchableOpacity style={signupStyles.signupButton}>
                <Text style={signupStyles.signupButtonText}>Signup</Text>
            </TouchableOpacity>
            </View>
            
        </View>
         </>)
}

export default Signup