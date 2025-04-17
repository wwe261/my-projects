import { StyleSheet } from "react-native";

import { RFPercentage } from "react-native-responsive-fontsize";

const shippedNotFound=StyleSheet.create({
    container:{
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    notFoundWrapper:{
          
    },
    notFoundText:{
        flexWrap:"wrap",
        color:"gray",
        fontWeight:"800",
        fontSize:RFPercentage(2.3)
    },
    shippedNotFoundIconWrapper:{
        justifyContent:"center",
        alignItems:"center",

    },
    shippedNotFoundIcon:{
        fontSize:RFPercentage(10),
        color:"gray"
    }
})
export default shippedNotFound;