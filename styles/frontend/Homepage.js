import { Platform } from "react-native";
import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
const homeStyles=({
    //APP CONTAINER STYLES
    Homepagecontainer:{
       // borderColor:"red",
        //borderWidth:2,
       // borderStyle:"solid",
        height:"100%",
        position:"relative",
        
    },

    //THIS ARE THE STYLES FOR THE HEADER 
    homePageHeader:{
        padding:"3%",
        backgroundColor:"#003366",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        gap:"3%",
    },
    homePageHeaderText:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:RFValue(17),
        color:"white"
    },
    homePageHeaderIconWrapper:{
        justifyContent:"center"
    },
    homePageHeaderIcon:{
        color:"white",
        fontSize:RFValue(14)
    },
    //SEARCH BAR
    searchBarWrapper:{
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:"#003366",
        padding:"1.5%"
    },
    searchBar:{
        width:"85%", 
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        backgroundColor:"#fff",
        fontWeight:"bold",
        color:"#000",
        paddingLeft:"4%",
        height:hp(8)
    },
    searchIconWrapper:{
         justifyContent:"center",
         alignItems:"center",
         width:"13%",
         borderTopRightRadius:15,
         borderBottomRightRadius:15,
         backgroundColor:"gray"

    },
    searchIcon:{
        fontSize:RFPercentage(2.5),
        color:"#fff"
    },
    categoryWrapper:{
        //borderColor:"red",
        //borderWidth:2,
        //borderStyle:"solid",
    },
    categoryWrapperText:{
        textAlign:"center",
        fontWeight:"bold"
    },
    categoryButtonsWrapper:{
        //borderColor:"blue",
        //borderWidth:2,
        //borderStyle:"solid",
        padding:"2.4%",
        overflow:"hidden",
        minWidth:"100%"
        
    },
    categoryButton:{
        backgroundColor:"rgba(211,211,211,1)",
        minWidth:"19%",
        padding:"1%",
        borderRadius:15,
        boxShadow:"0 3 3 3",
        marginRight:"4%"
    },categoryButtonText:{
        textAlign:"center",
        color:"white",
        fontWeight:"bold"
    },

     mainContent:{
         //borderStyle:"solid",
         //borderWidth:2,
         //borderColor:"red",
         height:"100%",
         backgroundColor:"rgba(211,211,211,1)"
        },
    booksContainer:{
       //borderStyle:"solid",
       //borderWidth:2,
      // borderColor:"blue",
       flexDirection:"row",
       flexWrap:"wrap",
       justifyContent:"space-between",
       padding:"1%"
       
    },
    booksWrapper:{
        //borderStyle:"solid",
        //borderWidth:2,
        //borderColor:"black",
        width:"49%",
        backgroundColor:"#fff",
        marginTop:"2%",
        padding:"0.5%"
    },
    booksFigure:{
        //borderStyle:"solid",
        //borderWidth:2,
        //borderColor:"yellow",
        width:"89%",
        height:hp(20),
        //height:"60%",
        alignSelf:"center"
    },
    bookImage:{
        width:"100%",
        height:"100%",
        objectFit:"fill"
    },
    descriptionText:{
        fontWeight:"bold",
        marginLeft:"4%"
    },


})

export default homeStyles;