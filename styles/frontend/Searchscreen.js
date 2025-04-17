import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen"; 
import { RFPercentage } from "react-native-responsive-fontsize";
const searchScreenStyles=StyleSheet.create({

    container:{
        height:"100%",
        backgroundColor:"rgba(211,211,211,1)"
    },
    header:{
        padding:"1.4%",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    navigationArrowWrapper:{
        justifyContent:"center",
        alignItems:"center",
        width:"10%"
    },
    navigationArrow:{
        fontSize:RFPercentage(2.6),
        color:"#000"
    },
    searchWrapper:{
        flexDirection:"row",
        justifyContent:"center", 
        width:"89%",
        maxHeight:hp(4.5),
        borderStyle:"solid",
        borderWidth:2,
        borderColor:"black",
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        borderTopRightRadius:15,
        borderBottomRightRadius:15,
    },
    input:{
        width:"86%",
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        backgroundColor:"#fff",
        fontWeight:"bold",
        color:"#000",
        paddingLeft:"4%" ,
        paddingBottom:"1%",
        paddingRight:"3%",
        paddingTop:"0.5%",
       
        height:"100%"
    },
    searchIconWrapper:{
        justifyContent:"center",
        alignItems:"center",
        width:"14%",
        borderTopRightRadius:15,
        borderBottomRightRadius:15,
        backgroundColor:"gray",

    },
    searchIcon:{
        fontSize:RFPercentage(2.5),
        color:"#fff"
    },
    mainContent:{
        height:"100%",
        
    }
    



})

export default searchScreenStyles