import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

const reviewStyles=StyleSheet.create({
    container:{
        
        height:"100%",
        backgroundColor:"rgba(211,211,211,1)",
        position:"relative"
    },
    header:{
        padding:"1%"
    },
    navigationIconWrapper:{
        
    },
    navigationIcon:{
        fontSize:RFPercentage(2.5)
    },
    mainContent:{

    },
    wrapper:{
         
        height:"94%",
        backgroundColor:"#fff"
    },
    wrapperText:{
        textAlign:"center",
        fontWeight:"600"
    },
    imageFigure:{
        
        height:hp(10),
        width:"26%",
        alignSelf:"center"
    },
    image:{
        width:"100%",
        height:"100%",
        objectFit:"fill"
    },
    textInputWrapper:{
       
        height:hp(16),
        width:"90%",
        alignSelf:"center",
       
    },
    input:{
        borderColor:"black",
        borderStyle:"solid",
        borderWidth:2,
        height:"100%",
        alignItems:"flex-start",
        borderRadius:14,
        textAlignVertical:"top",
        fontWeight:"600",
        fontSize:RFPercentage(2)

    },
    DeviceimageFigure:{
        borderColor:"black",
        borderStyle:"solid",
        borderWidth:2,
        alignSelf:"center",
        height:hp(20),
        width:"35%",
        borderRadius:15,
        marginTop:13
    },
    Deviceimage:{
        width:"100%",
        height:"100%",
        objectFit:"fill",
        borderRadius:12
    },
    button:{
        borderColor:"black",
        borderStyle:"solid",
        borderWidth:2,
        flexDirection:"row",
        alignSelf:"center",
        width:"85%",
        justifyContent:"space-between",
        padding:"1%",
        height:hp(5),
        borderRadius:12,
        backgroundColor:"#003366",
        marginTop:13
    },
    buttonText:{
        fontWeight:"600",
        width:"85%",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:5,
        color:"#fff"
    },
    IconWrapper:{
        borderLeftWidth:2,
        borderLeftStyle:"solid",
        borderLeftColor:"#fff",
        width:"15%",
        justifyContent:"center",
        alignItems:"center"
    },
    Icon:{
        fontSize:RFPercentage(3),
        color:"#fff"
    },
    reviewButton:{
        backgroundColor:"#003366",
        alignSelf:"center",
        width:"85%",
        height:hp(6),
        position:"absolute",
        bottom:0,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:14
    },
    reviewButtonText:{
        fontWeight:"600",
        color:"white",
       
    }
})
export default reviewStyles;