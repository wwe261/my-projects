import { View, Text } from 'react-native'

import menuButtonStyles from '../../../styles/frontend/MenubuttonModal'

import Icon from 'react-native-vector-icons/FontAwesome6'
import Icons from 'react-native-vector-icons/Ionicons'
const MenubuttonModal = () => {
  return (<>
    <View style={menuButtonStyles.container}>

        <View style={menuButtonStyles.wrapper}>
            <View style={menuButtonStyles.Iconwrapper}>
                <Icon name="house" style={[menuButtonStyles.Icon, menuButtonStyles.homeIcon]}/>
            </View>
            <Text style={menuButtonStyles.text}>Home</Text>
        </View>

        <View style={menuButtonStyles.wrapper}>
            <View style={menuButtonStyles.Iconwrapper}>
                <Icons style={menuButtonStyles.Icon} name="refresh-circle"/>
            </View>
            <Text style={menuButtonStyles.text}>Recently Viewed</Text>
        </View>

    </View>
    </>)
}

export default MenubuttonModal