import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
const deleteConfirm=StyleSheet.create({
    containerWrapper:{
       
        position:"absolute",
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(0,0,0,0.5)",
        zIndex:2
    },
    container:{
        width:"90%",
        alignSelf:"center",
        justifyContent:"space-evenly",
        height:hp(18),
        borderRadius:15,
       
        backgroundColor:"#fff",
        

    },
    textWrapper:{

    },
    text:{
        textAlign:"center",
        fontSize:RFPercentage(2.3),
        
    },
    buttonsWrapper:{

        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        height:"40%"
        
    },
    cancel:{
        width:"45%",
        height:hp(5),
        justifyContent:"center",
        borderRadius:10,
        backgroundColor:"rgba(0,128,0,1)"
        
    },
    buttonText:{
        textAlign:"center",
        color:"#fff"
    },
    delete:{
        width:"45%",
        height:hp(5),
        justifyContent:"center",
        borderRadius:10,
        backgroundColor:"rgba(255,0,0,1)"
    }
})
export default deleteConfirm;