import { View, Text,Image,TextInput,TouchableOpacity,TouchableWithoutFeedback,Keyboard } from 'react-native'

import reviewStyles from '../../../styles/frontend/Review'

import Icon from 'react-native-vector-icons/FontAwesome6'
import Icons from 'react-native-vector-icons/Ionicons'
const ReviewScreen = () => {
  return (<>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={reviewStyles.container}>
            <View style={reviewStyles.header}>
                <View style={reviewStyles.navigationIconWrapper}>
                    <Icon name="arrow-left" style={reviewStyles.navigationIcon}/>
                </View>
            </View>

            <View style={reviewStyles.mainContent}>
                <View style={reviewStyles.wrapper}>

                    <Text style={reviewStyles.wrapperText}>Review for:</Text>
                    <View style={reviewStyles.imageFigure}>
                        <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={reviewStyles.image}/>
                    </View>
                    <Text style={reviewStyles.wrapperText}>You By Caroline Kepnes</Text>
                    
                    <View style={reviewStyles.textInputWrapper}>
                        <TextInput style={reviewStyles.input}
                         multiline 
                         placeholder='Enter your review here'
                         
                    />
                    </View>
                
                    <View style={reviewStyles.DeviceimageFigure}>
                        <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={reviewStyles.Deviceimage}/>
                    </View>
                    <TouchableOpacity style={reviewStyles.button}>
                        <Text style={reviewStyles.buttonText}>Pick an image</Text>
                        <View style={reviewStyles.IconWrapper}>
                            <Icons name="camera" style={reviewStyles.Icon}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={reviewStyles.reviewButton}>
                <Text style={reviewStyles.reviewButtonText}>Send Review</Text>
            </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
         </>)
}

export default ReviewScreen