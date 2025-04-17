import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";


const deleteBookStyles=StyleSheet.create({
deleteBookText:{
    color:"#fff",
    fontWeight:"bold",
    textAlign:"center",
    paddingTop:"1%",
    paddingBottom:"3%"
},
deleteBookContainer:{
   
    height:"100%"
},
deleteBookSearchContainer:{
    backgroundColor:"white",
    display:"flex",
    flexDirection:"row",
    borderBottomRightRadius:13,
    borderTopRightRadius:13,
    borderBottomLeftRadius:13,
    borderTopLeftRadius:13
},
deleteBookSearchInput:{
    width:"88%",
    borderBottomLeftRadius:13,
    borderTopLeftRadius:13,
    fontWeight:"bold",
    paddingLeft:"3%"
},
deleteBookIconContainer:{
    width:"12%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderBottomRightRadius:13,
    borderTopRightRadius:13,
    backgroundColor:"gray"
},
deleteBookSearchIcon:{
    fontSize:RFValue(19),
    color:"white"
},
deleteBookSectionContainer:{
    
    height:"100%"
},
deleteBookTemplateContainer:{
    
    height:"20%",
    width:"44%",
    marginTop:"10%",
    marginLeft:"3%"
},
deleteBookTemplate:{
    
    display:"flex",
    flexDirection:"row"
},
deleteBookImageFigure:{
    
    width:"40%",
    
},
deleteBookInformationContainer:{
    width:"60%",
    backgroundColor:"#fff"
},
deleteBookImage:{
    width:"100%",
    height:"100%",
    objectFit:"fill"
},
deleteBookDeleteButtonContainer:{
    
    height:hp(6)
},
deleteBookDeleteButton:{
   
    backgroundColor:"#008080",
    height:"100%",
    display:"flex",
    justifyContent:"center"
    
},
deleteButtonText:{
    color:"white",
    fontWeight:"bold",
    textAlign:"center"
}



})

export default deleteBookStyles;