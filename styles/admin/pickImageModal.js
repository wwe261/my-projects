import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
const pickImage=StyleSheet.create({
    container:{
       
        borderTopLeftRadius:16,
        borderTopRightRadius:16
        
    },
    containerText:{
        textAlign:"center",
        fontWeight:"bold",
        padding:"3%",
        fontSize:RFPercentage(3),
        
    },
    wrapper:{
       
        marginTop:7,
        padding:"2%" 
    },
    button:{
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        width:"94%",
        height:hp(6),
        marginTop:7,
        borderRadius:19,
        backgroundColor:"#008080",
        
    },
    imageText:{
        fontWeight:"800",
        color:"#fff"
    }
})
export default pickImage