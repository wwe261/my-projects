import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
const searchResultStyle=StyleSheet.create({
    container:{
        height:"100%"
    },
    resultText:{
        fontWeight:"bold",
        padding:"1%",
        marginLeft:6,
        flexWrap:"wrap"
    },
    resultsWrapper:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between",
        padding:"1%"
    },
    resultsTemplate:{
        width:"49%",
        backgroundColor:"#fff",
        marginTop:"2%",
        padding:"0.5%"
    },
    booksFigure:{
        width:"89%",
        height:hp(20),
        alignSelf:"center"
    },
    image:{
        width:"100%",
        height:"100%",
        objectFit:"fill"
    },
    information:{
        fontWeight:"bold",
        marginLeft:"4%"
    }

})
export default searchResultStyle