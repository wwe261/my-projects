import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const footerNavigationStyle=StyleSheet.create({
    appFooterNavigationWrapper:{
        flexDirection:"row",
        padding:"0.6%",
        backgroundColor:"#003366",
        justifyContent:"space-between",
        position:"absolute",
        bottom:0,
        left:0,
        right:0
    },
    appFooterNavigation:{
       width:"19%",
       alignItems:"center",
       justifyContent:"center",
    },
    
    appFooterNavigationIconWrapper:{

    },
    appFooterNavigationIcon:{
        color:"#fff",
        fontSize:RFPercentage(2.1)
    },
    appFooterNavigationText:{
        color:"#fff",
    }, homePageFooterMiddleButton:{
        position:"relative",
        top:"-30%",
        backgroundColor:"#003366",
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        paddingTop:"2%"
    
     },
     homePageFooterMiddleIcon:{
        fontSize:RFPercentage(2.6)
     }
})
export default footerNavigationStyle