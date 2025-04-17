import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
const menuButtonStyles=StyleSheet.create({
    container:{
        borderColor:"red",
        borderWidth:2,
        borderStyle:"solid",
        width:"50%",
        padding:"2%"
    },
    wrapper:{
        width:"100%",
        flexDirection:"row",
        gap:"3%",
        marginBottom:"6%"
    },
    Iconwrapper:{
        justifyContent:"center",
        alignItems:"center"
    },
    Icon:{
        fontSize:RFPercentage(3)
    },
    homeIcon:{
        fontSize:RFPercentage(2.4)
    },
    text:{
        fontWeight:"500",
        justifyContent:"center",
        alignItems:"center"
    }
})
export default menuButtonStyles