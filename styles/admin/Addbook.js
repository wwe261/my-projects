import { StyleSheet } from "react-native"
import {RFValue} from 'react-native-responsive-fontsize'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
const addBookStyles=StyleSheet.create({
    adminAddBookSectionText:{
        color:"white",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:RFValue(17)
    },
    adminAddBookSection:{
        
        padding:"2%",
        marginTop:"10%"
       
    },
    adminAddBookInputs:{
          
        backgroundColor:"#fff",
        marginTop:"2%"
        
    },
    adminAddBookFileUploadButtonContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:"2%",
        height:hp(5),
        backgroundColor:"#008080"
    },
    adminAddBookTextInput:{
        fontWeight:"bold"
    },
    adminAddBookUploadButton:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
       
    },
    adminAddBookUpload:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    adminAddBookUploadIcon:{
        fontSize:RFValue(18),
        color:"#fff"
    },
    adminAddBookText:{
        color:"#fff",
        fontWeight:"bold"
    },
    adminAddBookToDatabase:{
        marginTop:"2%"
    },
    adminAddBookToDatabaseButton:{
        backgroundColor:"#008080",
        height:hp(5),
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    adminAddBookToDatabaseText:{
        color:"white",
        fontWeight:"bold",
        textAlign:"center",
    }
})

export default addBookStyles