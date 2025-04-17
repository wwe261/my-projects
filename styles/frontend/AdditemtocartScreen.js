import { StyleSheet } from "react-native";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

const addToCartStyles=StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"rgba(211,211,211,1)",
        position:"relative"
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:4

    },
    navigationIconWrapper:{
        justifyContent:"center",
        alignItems:"center",
        width:"15%"

    },
    navigationIcon:{
       fontSize: RFPercentage(2.3)
    },
    searchWrapper:{
        flexDirection:"row",
        width:"52%",
        height:hp(4),
        borderColor:"black",
        borderStyle:"solid",
        borderWidth:2,
        borderRadius:15
    },
    textInput:{
       
        width:"85%",
        borderBottomLeftRadius:15,
        borderTopLeftRadius:15,
        paddingTop:1,
        paddingBottom:1,
        paddingLeft:12   
    },
    searchIconWrapper:{
        justifyContent:"center",
        alignItems:"center",
        width:"15%",
        borderBottomRightRadius:15,
        borderTopRightRadius:15,
    },
    searchIcon:{

    },
    rightNavigationBar:{
        flexDirection:"row",
        width:"30%",
        justifyContent:"space-between"
    },
    cartIconWrapper:{
        justifyContent:"center",
        alignItems:"center",
    },
    cartIcon:{
        fontSize:RFPercentage(2.3)
    },
    shareIconWrapper:{
        justifyContent:"center",
        alignItems:"center",
        
    },
    shareIcon:{
        fontSize:RFPercentage(2.3)
    },
    menuIconWrapper:{
        justifyContent:"center",
        alignItems:"center",
       
    },
    menuIcon:{
        fontSize:RFPercentage(2.3),
        
    },
    mainContent:{
      height:"100%"  ,
      
    },
    bookInfoWrapper:{
      
    },
    imageFigure:{
        height:hp(77)
    },
    image:{
        width:"100%",
        height:"100%",
        objectFit:"fill"
    },
    bottomContainer:{
        backgroundColor:"#fff",
        marginTop:9
    },
    descriptionText:{
        fontWeight:"900",
        marginLeft:8,
        flexWrap:"wrap"
    },
    reviewWrapper:{

    },
    viewAnalytics:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:7,
        paddingRight:7,
        paddingTop:6
    },
    analyticsText:{
        width:"50%",
        fontWeight:"900"
    },
    ratingsWrapper:{
        flexDirection:"row",
        justifyContent:"center"
    },
    starIconWrapper:{
        justifyContent:"center",
        alignItems:"center"
    },
    starIcon:{
        color:"#FFD700"
    },
    ratingsValue:{

    },
    viewReviews:{
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center",
        width:"50%",
        gap:6
    },
    viewReviewText:{

    },
    visitIconWrapper:{
        justifyContent:"center",
        alignItems:"center"
    },
    visitIcon:{

    },
    addToCartWrapper:{
        position:"absolute",
        bottom:-8,
        left:0,
        right:0,
        backgroundColor:"#fff",
        height:hp(7),
        justifyContent:"center",
        alignItems:"center",
        borderTopColor:"rgba(211,211,211,1)",
        borderTopWidth:1,
        borderTopStyle:"solid"
    },
    addToCartButton:{
        backgroundColor:"black",
        width:"80%",
        borderRadius:4,
        justifyContent:"center",
        alignItems:"center",
        height:"70%"
        
    },
    addToCartText:{
        textAlign:"center",
        color:"#fff"
    }
})
export default addToCartStyles