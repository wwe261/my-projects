import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
const shareButtonStyles=StyleSheet.create({
    container:{
        borderColor:"red",
        borderWidth:2,
        borderStyle:"solid",
        height:hp(50),
        borderTopLeftRadius:13,
        borderTopRightRadius:13,
        backgroundColor:"#fff"
    },
    cancelIconWrapper:{
        alignItems:"flex-end",
        justifyContent:"center",
        height:"10%"
    },
    cancelIcon:{
        color:"gray",
        fontSize:RFPercentage(3)
    },
    headerText:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:RFPercentage(4)
    },
    subHeaderText:{
        textAlign:"center",
        color:"gray",
        fontWeight:"600"
    },
    shareOptionsContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:"45%"
    },
    shareOptionsWrapper:{
        width:"24%",

    },
    shareOptionsText:{
        color:"gray",
        fontWeight:"500",
        textAlign:"center"
    },

    imageFigure:{
        height:hp(9),
        width:"100%"
    },
    image:{
        width:"100%",
        height:"100%",
        objectFit:"contain"
    },
    saveAndCopyContainer:{
        flexDirection:"row",
        height:"45%"
    },
    saveAndCopyWrapper:{
        width:"26%",
    },
    saveAndCopyIconsWrapper:{
        alignItems:"center",
        justifyContent:"center",
        height:80,
        width:80,
        borderRadius:"50%",
        backgroundColor:"gray",
        

    },
    saveAndCopyIcon:{
        fontSize:RFPercentage(4),
        color:"#fff"
    },
    saveAndCopyText:{
        textAlign:"center",
        fontWeight:"500",
        color:"gray"
    }
})
export default shareButtonStyles