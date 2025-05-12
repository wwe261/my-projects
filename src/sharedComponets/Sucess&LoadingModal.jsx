import { View, Text } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Animated } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { resetDeleteStatus } from '../redux/DeleteSuccessLoad'
import { useDispatch } from 'react-redux'
import LottieView from 'lottie-react-native'
import sucessLoad from '../../styles/sharedComponents/SuccessLoadingModal'


const SucessLoadingModal =({isLoading, isSuccess, text}) => {

    const fadeAnim = useRef(new Animated.Value(1)).current;
    const [visible, setVisible] = useState(true);
    const dispatch=useDispatch()
     
    useEffect(()=>{

        let timer;
        if(isSuccess){

          timer=setTimeout(()=>{
             Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
             }).start(() =>{ 
                setVisible(false)
                dispatch(resetDeleteStatus())
            })

        }, 6000) }

        return ()=> clearTimeout(timer)

    }, [isSuccess])


     if (!visible) return null;
     
  return (<>
    <Animated.View style={[sucessLoad.containerWrapper, { opacity: fadeAnim }]}  >
        <View style={sucessLoad.container}>

            {isLoading && ( <View style={sucessLoad.loadingWrapper}>
                <ActivityIndicator size="large" color="blue"/>
            </View> )}
            
            
            {isSuccess &&

           ( <View style={sucessLoad.successWrapper}>
               
                <LottieView
                 source={require('../../assets/success.json')}
                 autoPlay
                 loop={false}
                 style={{ width: "40%", height:hp(14)  }}
                  /> 

                  <Text style={sucessLoad.text}>Book {text} successfuly</Text>
            </View>   ) }

        </View>
    </Animated.View>

         </>)
}

export default SucessLoadingModal 