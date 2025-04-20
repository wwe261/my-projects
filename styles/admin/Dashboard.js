import { StyleSheet } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'

const adminStyles=StyleSheet.create({
    adminContainer:{
        height:hp(100),
        color:"white",   
        backgroundColor:"#000",
        paddingTop:"0.8%",
        paddingLeft:"0.3%",
        paddingRight:"0.3%",
        position:"relative",
        
        
    },
    adminAnalyticsContainer:{
          display:"flex",
          justifyContent:"space-between",
          flexDirection:"row",
          height:"23%",
          flexWrap:"wrap",
          gap:"2%", 
          padding:"1%"

    },
    adminAnalytics:{
        display:"flex",
        justifyContent:"center",
        width:"100%",
        backgroundColor:"#008080",
        borderRadius:15,
        padding:"0.6%"
    },
    adminAnalyticsText:{
        fontSize:RFValue(12),
        fontWeight:"bold",
        textAlign:"center",
        color:"#fff"
    },
    adminMainSection:{
        height:"100%",  
    },
    adminButtonsContainer:{
        borderColor:"#fff",
        borderWidth:2,
        borderStyle:"solid", 
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:"0.2%",
        position:"absolute",
        bottom:0,
        left:0,
        right:0,
        backgroundColor:"#fff",
        
    },
    adminButtonStyles:{
        backgroundColor:"#008080",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"19%",
        padding:"0.7%",
        borderRadius:10
    },
    adminButtonTextStyles:{
        color:"white",
        fontSize:RFValue(6),
        textAlign:"center",
        fontWeight:"bold"
    },
    adminIconTextContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    adminButtonIconStyles:{
        color:"white",
        fontSize:RFValue(19),
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

    },
    adminAddBookSectionContainer:{
        height:"100%", 
        padding:"2%"
        
        
    },
    
})

export default adminStyles;