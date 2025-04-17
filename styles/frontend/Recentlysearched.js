import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

const recentlySearchStyles=StyleSheet.create({

    recentlySearchedText:{
        textAlign:"center",
        fontWeight:"800"
    },
    recentlySearchedWrapper:{
        backgroundColor:"#fff",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:"2%",
        padding:"0.8%"
        
    },
    recentSearchText:{
        
        width:"79%",
        flexWrap:"wrap"
    },
    recentIconWrapper:{
        justifyContent:"center",
        alignItems:"center",
        width:"10%",
        maxHeight:hp(4.6)
    },
     recentIcon:{
        fontSize:RFPercentage(3)
    },
    deleteIconWrapper:{
        justifyContent:"center",
        alignItems:"center",
        width:"10%",
        maxHeight:hp(4.6)
    }, 
    deleteIcon:{
        fontSize:RFPercentage(2.4)
    }


})

export default recentlySearchStyles;