import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
const settingsStyle=StyleSheet.create({
    container:{
        
        height:"100%"
    },
    containerText:{
        textAlign:"center",
        fontWeight:"600",
        fontSize:RFPercentage(3)
    },
    wrapper:{

    },
    mainContent:{
        borderBottomColor:"gray",
        borderBottomWidth:2,
        borderBottomStyle:"solid",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:hp(7)
    },
    mainText:{
        fontSize:RFPercentage(2.3)
    },
    IconsWrapper:{
        justifyContent:"center",
        alignItems:"center",
        marginRight:14
    },
    Icon:{
        fontSize:RFPercentage(2.5)
    }
})
export default settingsStyle;