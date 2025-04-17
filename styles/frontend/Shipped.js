import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

const shippedStyles=StyleSheet.create({
    container:{
        //borderColor:"red",
        //borderStyle:"solid",
        //borderWidth:2,
        height:"100%",
        backgroundColor:"rgba(211,211,211,1)"
    },
    header:{ 
        flexDirection:"row",
        //backgroundColor:"#fff",
        padding:"1.6%"
    },
    navigationIconWrapper:{
        
        width:"10%",
        justifyContent:"center",
        alignItems:"center"
    },
    navigationIcon:{
        fontSize:RFPercentage(2.5)
    },
    searchBarWrapper:{
        borderColor:"black",
        borderStyle:"solid",
        borderWidth:2,
        width:"90%",
        flexDirection:"row",
        borderRadius:12,
        backgroundColor:"#fff"
    },
    textInput:{
        width:"87%",
        height:hp(3.5),
        paddingTop:"0.8%",
        paddingBottom:"0.8%",
    },
    searchIconWrapper:{
        width:"13%",
        justifyContent:"center",
        alignItems:"center"
    },
    searchIcon:{
        fontSize:RFPercentage(2.5)
    }, 

    mainContent:{
        height:"100%", 
        padding:"1%"
    },
    mainContentText:{
        textAlign:"center",
        fontWeight:"500"
    },
    contentContainer:{
        backgroundColor:"#003366",
        marginTop:7
    },
    contentContainerText:{
        fontWeight:"bold",
        color:"#fff"
    },
    wrapper:{
        flexDirection:"row",
        gap:"3%",
        flexWrap:"wrap",
        marginTop:3,
        padding:"1%"
    },
    imageFigure:{
        width:"27%",
        height:hp(15)
    },
    image:{
        width:"100%",
        height:"100%",
        objectFit:"fill"
    },
    wrapperText:{
        alignSelf:"flex-end",
        color:"#fff",
        fontWeight:"bold"
    }

})
export default shippedStyles;