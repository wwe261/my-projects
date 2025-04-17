import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
const loginStyles=StyleSheet.create({
    container:{
       borderColor:"red",
       borderStyle:"solid",
       borderWidth:2,
       backgroundColor:"rgba(211,211,211,1)",
       height:"100%",
       justifyContent:"center",
       alignItems:"center"
    },
    wrapper:{
       
        padding:"1%",
        backgroundColor:"#fff",
        width:"100%"
    },
    wrapperText:{
        textAlign:"center",
        fontWeight:"600",
        fontSize:RFPercentage(2.4),
        padding:"2.9%"
    },
    cancelWrapper:{
        alignSelf:"flex-end",
        height:28,
        width:28, 
        borderRadius:14,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(255,0,0,0.6)"
    },
    cancelIcon:{
        fontSize:RFPercentage(2.5),
        color:"#fff"
    },
    inputsWrapper:{
       
        padding:"1%"
    },
    textInputWrapper:{
        borderColor:"black",
        borderStyle:"solid",
        borderWidth:2,
        flexDirection:"row",
        height:hp(4.5) ,
        marginTop:7,
        borderRadius:12,
    },
    textInput:{
        
        height:hp(4.4),
        paddingTop:"0.1%",
        paddingBottom:"1%",
        
        paddingLeft:"2%",
        width:"90%"
    },
    revealPassword:{
       
        justifyContent:"center",
        alignItems:"center",
        width:"10%"
    },
    revealPasswordIcon:{
        fontSize:RFValue(14)
    },
    loginButton:{
        borderColor:"#fff",
        borderStyle:"solid",
        borderWidth:2,
        justifyContent:"center",
        height:hp(5),
        width:"90%",
        alignSelf:"center",
        borderRadius:13,
        backgroundColor:"#003366",
        marginTop:7
    },
    loginButtonText:{
        textAlign:"center",
        fontWeight:"800",
        fontSize:RFPercentage(2.4),
        color:"#fff"
    },
    signupText:{
        textAlign:"center",
        marginTop:4,
        fontWeight:"700",
        color:"gray"
    },
    
})
export default loginStyles;