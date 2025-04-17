import { StyleSheet } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

const uploadBookStyles=StyleSheet.create({
   uploadBookText:{
        color:"white",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:RFValue(17)
   },
   uploadBookSection:{
     padding:"1.5%"
    
   },
   uploadBookSearchContainer:{
      backgroundColor:"white",
      display:"flex",
      flexDirection:"row",
      borderBottomRightRadius:13,
      borderTopRightRadius:13,
      borderBottomLeftRadius:13,
      borderTopLeftRadius:13

   },
   uploadBookInput:{
    width:"88%",
    borderBottomLeftRadius:13,
    borderTopLeftRadius:13,
    fontWeight:"bold",
    paddingLeft:"3%"

   },
   uploadBookSearchIconContainer:{
    width:"12%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderBottomRightRadius:13,
    borderTopRightRadius:13,
    backgroundColor:"gray"
   },
   uploadBookSearchIcon:{
    fontSize:RFValue(19),
    color:"white"
   },
   uploadBookInputsSection:{
    
      
   },
   uploadBookInputContainer:{
     
      backgroundColor:"white",
      marginTop:"2%"
   },
   updateBookInput:{
      fontWeight:"bold"
   },
   uploadBookImagePreviewContainer:{
      
      marginTop:"2%"
      
   },
   updateBookButtonContainer:{
      
      backgroundColor:'#008080',
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-evenly",
      height:hp(5) 
      
   },
   updateBookButton:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
   },
   updateBookButtonText:{
      color:"white",
      fontWeight:"bold"
   },
   updateBookUploadIconContainer:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
   },
   updateBookUploadIcon:{
      color:"white",
      fontSize:RFValue(16)
   },
   updateImagePreviewFigure:{
     
      marginBottom:0,
      marginTop:0,
      marginLeft:"auto",
      marginRight:"auto",
      width:wp(40),
      height:hp(15)
   },
   updateImagePreview:{
      width:"100%",
      height:"100%", 
      objectFit:"fill"
   },
   updateBookInDatatabaseContainer:{
      marginTop:"2%"
   },
   updateBookInDatatabase:{
      backgroundColor:"#008080",
      height:hp(5),
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
   },
   updateBookInDatatabaseText:{
      textAlign:"center",
      color:"white",
      fontWeight:"bold"
   }
   


   

})

export default uploadBookStyles;