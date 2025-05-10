import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
const sucessLoad=StyleSheet.create({
    containerWrapper:{
        position:"absolute",
        height:"100%",
        left:0,
        right:0,
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:"rgba(0,0,0,0.5)",
        zIndex:2,
    },
    container:{
        width:"69%",
        height:hp(25),
        backgroundColor:"#fff",
        position:"absolute",
        top:"17%",
        borderRadius:15
        
    },
    loadingWrapper:{
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    successWrapper:{
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        color:"#000",
        fontWeight:"bold",
        fontSize:RFPercentage(2.6)
    }
})

export default sucessLoad;