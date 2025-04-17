import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const searchSuggestionStyle=StyleSheet.create({
    container:{
        
    },
    suggestionWrapper:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:"0.5%",
        backgroundColor:"#fff",
        marginTop:6
    },
    suggestionText:{
       
        width:"88%" ,
        fontWeight:"800",
        flexWrap:"wrap" 
    },
    searchIconWrapper:{
        
        justifyContent:"center",
        alignItems:"center",
        width:"12%",
        maxHeight:hp(4)

    },
    searchIcon:{
        fontSize:RFPercentage(2.5)

    }
})
export default searchSuggestionStyle;