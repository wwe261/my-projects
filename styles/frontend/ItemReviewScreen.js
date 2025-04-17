import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
const itemReviewStyle=StyleSheet.create({
            container:{
               borderStyle:"solid",
               borderWidth:2,
               borderColor:"red",
               height:"100%",
               backgroundColor:"rgba(211,211,211,1)"
            },
            mainContent:{

            },
            wrapper:{
               marginTop:5,
               backgroundColor:"#fff"
            },
            mainHeader:{
                padding:"1%",
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                borderBottomWidth:1,
                borderBottomColor:"gray",
                borderBottomStyle:"solid"
            },
            Profile:{
                flexDirection:"row",
                gap:"5%"
            },
            imageFigure:{
                width: 40,
                height:40
            },
            image:{
                width:"100%",
                height:"100%",
                objectFit:"fill",
                borderRadius:50,
                borderStyle:"solid",
                borderWidth:2,
                borderColor:"gray"

            },
            ProfileText:{
               alignSelf:"center",
               
               
            },
            ratingStarsWrapper:{
                flexDirection:"row",
                gap:"2%"
            },
            IconWrapper:{

            },
            icon:{
                fontSize:RFPercentage(2),
                color:"gold"
            },
            dateOfReview:{

            },
            dateText:{

            },
            reviewTextWrapper:{
                

            },
            reviewText:{
                flexWrap:"wrap",
                marginLeft:7
            },
            ImageWrapper:{
                marginTop:3,
                height:hp(25),
                width:"94%",
                alignSelf:"center"
            },
            ImageContainer:{
                width:"100%",
                height:"100%"
            },
            Image:{
                width:"100%",
                height:"100%",
                objectFit:"fill"
            },
            helpfulWrapper:{
               
                flexDirection:"row",
                justifyContent:"space-between",
                alignSelf:"flex-end",
                width:"14%",
                marginTop:4
            },
            helpfulIconWrapper:{

            },
            helpfulIcon:{
                fontSize:RFPercentage(2.5)
            },
            menuIconWrapper:{

            },
            menuIcon:{
                fontSize:RFPercentage(2.5)
            }

})
export default itemReviewStyle;