import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const accountStyles=StyleSheet.create({
    container:{
        height:"100%", 
        backgroundColor:"rgba(211,211,211,1)"
    },
    accountProfileContainer:{
        //borderColor:"blue",
       // borderStyle:"solid",
       // borderWidth:2, 
        alignItems:"center",
        padding:"2%",
        backgroundColor:"#fff"
    },
    imageFigure:{
        width:wp(40),
        height:hp(20),
        borderRadius:wp(20),
        position:"relative"
       
    },
    image:{
        height:"100%",
        width:"100%",
        objectFit:"cover",
        borderRadius:wp(20),
        borderColor:"gray",
        borderStyle:"solid",
        borderWidth:3,
    },
    text:{
        fontWeight:"700",
        fontSize: RFPercentage(3)
    },
    emailText:{
        fontWeight:"600",
        color:"gray"
    },
    uploadButton:{
        width:40,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:25,
        position:"absolute",
        bottom:"35%",
        right:"28%",
        backgroundColor:"rgba(211,211,211,1)"
    },
    uploadIcon:{
        fontSize:RFPercentage(3.2),
        color:"gray"
    },
    mainContent:{
        
    },
    loginWrapper:{
        flexDirection:"row",
        justifyContent:"center",
        gap:"2%",
        backgroundColor:"#fff",
        marginTop:7,
        padding:"2%"
    },
    loginWrapperButtons:{
        width:"40%",
        height:hp(4),
        justifyContent:"center",
        backgroundColor:"#003366",
        borderRadius:12
    },
    loginWrapperText:{
        textAlign:"center",
        color:"#fff",
        fontWeight:"500"
    },
    ordersInformationContainer:{
        backgroundColor:"#fff",
        marginTop:7,
        padding:"1%"
    },
    wrapper:{
        flexDirection:"row",
        gap:"2%", 
        justifyContent:"center"
    },
    wrapperText:{
        textAlign:"center",
        fontWeight:"600",
        fontSize:RFPercentage(2.5),
        
    },
    ordersInformationWrapper:{
        borderStyle:"solid",
        borderWidth:2,
        borderColor:"gray",
        width:"25%",
        borderRadius:12
    },
    ordersInformationText:{
        textAlign:"center",
        fontWeight:"600"
    },
    ordersInformationButton:{
        justifyContent:"center",
        alignItems:"center"
    },
    ordersInformationIcon:{
        fontSize:RFPercentage(2.7)
    },
    

})
export default accountStyles