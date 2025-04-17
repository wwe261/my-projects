import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
const welcomeStyles=StyleSheet.create({
    container:{ 
        height:'70%',
        borderRadius:13,
        backgroundColor:"#fff",
        display:"flex",
        justifyContent:"center",
        padding:"0.5%"
    }, 
    welcomeTextHeader:{
        color:"black",
        fontWeight:"bold",
        fontSize:RFValue(20),
        textAlign:"center"
    },
    welcomeText:{
        color:"black",
        fontWeight:"bold",
        textAlign:"center"
    }
})

export default welcomeStyles