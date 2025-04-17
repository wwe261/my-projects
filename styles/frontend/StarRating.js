import {StyleSheet} from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
const starRatingStyles=StyleSheet.create({
    container:{
        borderColor:"red",
        borderStyle:"solid",
        borderWidth:2,
        height:hp(50),
        borderTopRightRadius:15,
        borderTopLeftRadius:15
    },
    wrapper:{
        height:"87%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:"4%"
    },
    IconWrapper:{

    },
    Icon:{
        fontSize:RFPercentage(7)
    }
})
export  default starRatingStyles;