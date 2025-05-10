import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import LottieView from 'lottie-react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import sucessLoad from '../../styles/sharedComponents/SuccessLoadingModal'
const SucessLoadingModal =({isLoading, isSuccess, text}) => {

     


  return (<>
    <View style={sucessLoad.containerWrapper}>
        <View style={sucessLoad.container}>

            {isLoading && ( <View style={sucessLoad.loadingWrapper}>
                <ActivityIndicator size="large" color="blue"/>
            </View> )}
            
            
            {isSuccess &&
            (<View style={sucessLoad.successWrapper}>
               
                <LottieView
                 source={require('../../assets/success.json')}
                 autoPlay
                 loop={false}
                 style={{ width: "40%", height:hp(14)  }}
                  /> 

                  <Text style={sucessLoad.text}>Book {text} successfuly</Text>
            </View>)    }
           

        </View>
    </View>

         </>)
}

export default SucessLoadingModal 