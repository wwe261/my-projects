import { StyleSheet } from "react-native";

import { RFPercentage } from "react-native-responsive-fontsize";
const searchNotFound=StyleSheet.create({
    container:{
        
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff"
    },
    notFoundWrapper:{
          
    },
    notFoundText:{
        flexWrap:"wrap",
        color:"gray",
        fontWeight:"800",
        fontSize:RFPercentage(2.3)
    },
     searchNotFoundIconWrapper:{
        justifyContent:"center",
        alignItems:"center",

    },
    searchNotFoundIcon:{
        fontSize:RFPercentage(10),
        color:"gray"
    }

})
export default searchNotFound