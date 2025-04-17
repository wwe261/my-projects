import { View, Text,Image,TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome6'

import shareButtonStyles from '../../../styles/frontend/SharebuttonModal'


const SharebuttonModal = () => {
  return (<>
    <View style={shareButtonStyles.container}>
      <TouchableOpacity style={shareButtonStyles.cancelIconWrapper}>
                <Icon name="xmark" style={shareButtonStyles.cancelIcon}/>
      </TouchableOpacity>
      <Text style={shareButtonStyles.headerText}>Share with friends</Text>
      <Text style={shareButtonStyles.subHeaderText}>I found great books at JD bookstore</Text>

      <View style={shareButtonStyles.shareOptionsContainer}>

            <View style={shareButtonStyles.shareOptionsWrapper}>
                <TouchableOpacity style={shareButtonStyles.imageFigure}>
                    <Image source={require('../../../assets/images/Whatsapp.png')} style={shareButtonStyles.image}/>  
                </TouchableOpacity>
                <Text style={shareButtonStyles.shareOptionsText}>Whatsapp</Text>
            </View>
             
            <View style={shareButtonStyles.shareOptionsWrapper}>
                <TouchableOpacity style={shareButtonStyles.imageFigure}>
                    <Image source={require('../../../assets/images/facebook image.png')} style={shareButtonStyles.image}/>  
                </TouchableOpacity>
                <Text style={shareButtonStyles.shareOptionsText} >Facebook</Text>
            </View>

            <View style={shareButtonStyles.shareOptionsWrapper}>
                <TouchableOpacity style={shareButtonStyles.imageFigure}>
                    <Image source={require('../../../assets/images/instagram.png')} style={shareButtonStyles.image}/>  
                </TouchableOpacity>
                <Text style={shareButtonStyles.shareOptionsText}>Instagram</Text>
            </View>

            <View style={shareButtonStyles.shareOptionsWrapper}>
                <TouchableOpacity style={shareButtonStyles.imageFigure}>
                    <Image source={require('../../../assets/images/messages.png')} style={shareButtonStyles.image}/>  
                </TouchableOpacity>
                <Text style={shareButtonStyles.shareOptionsText}>Messages</Text>
            </View>

      </View>

            <View style={shareButtonStyles.saveAndCopyContainer}>

                <View style={shareButtonStyles.saveAndCopyWrapper}>
                    <TouchableOpacity style={shareButtonStyles.saveAndCopyIconsWrapper}>
                        <Icon name="link" style={shareButtonStyles.saveAndCopyIcon}/>
                    </TouchableOpacity>
                    <Text style={shareButtonStyles.saveAndCopyText}>Copy Link</Text>
                </View>

                <View style={shareButtonStyles.saveAndCopyWrapper}>
                    <TouchableOpacity style={shareButtonStyles.saveAndCopyIconsWrapper}>
                        <Icon name="file-arrow-down" style={shareButtonStyles.saveAndCopyIcon}/>
                    </TouchableOpacity>
                    <Text style={shareButtonStyles.saveAndCopyText}>Save to phone</Text>
                </View>
        
            </View>
      
    </View>
    </>)
}

export default SharebuttonModal