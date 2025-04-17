import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";


const SearchBookStyles=StyleSheet.create({
   searchBookText:{
     color:"white",
     fontWeight:"bold",
     textAlign:"center",
     fontSize:RFValue(14)
   },
   searchBookContainer:{
    
     height:"100%"
     
     
   },
   searchBooksearchContainer:{
      backgroundColor:"white",
      display:"flex",
      flexDirection:"row",
      borderBottomRightRadius:13,
      borderTopRightRadius:13,
      borderBottomLeftRadius:13,
      borderTopLeftRadius:13

   },
   searchBooksearchInput:{
     width:"88%",
     borderBottomLeftRadius:13,
     borderTopLeftRadius:13,
     fontWeight:"bold",
     paddingLeft:"3%"
   },
   searchBookIconContainer:{
    width:"12%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderBottomRightRadius:13,
    borderTopRightRadius:13,
    backgroundColor:"gray"
   },
   searchBookIcon:{
    fontSize:RFValue(19),
    color:"white"
   },
   searchBookByWhat:{
    color:"white",
    fontWeight:"bold",
    textAlign:"center"
   },
   searchBookSectionContainer:{
     
     height:"100%",
     padding:"2%"
     
   },
   searchBookTemplate:{
     display:"flex",
     flexDirection:"row",
     height:"18%",
     width:"40%",
     marginLeft:"2%"  
   },
   searchBookTemplateFigure:{
     borderColor:"#fff",
     borderStyle:"solid",
     borderWidth:2,
     width:"50%",
     
     

   },
   searchBookTemplateImage:{
     width:"100%",
     height:"100%",
     objectFit:"fill"
   },
   searchBookInformationContainer:{
    borderColor:"#fff",
    borderStyle:"solid",
    borderWidth:2,
    width:"50%",
    backgroundColor:"#fff"
   },
   searchBookInformationText:{
    color:"black",
    fontWeight:"bold"
   }

})

export default SearchBookStyles;