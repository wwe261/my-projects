import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome6'
import settingsStyle from '../../../styles/frontend/SettingsScreen'
import Footernavigation from '@/src/sharedComponets/Footernavigation'
const SettingsScreen = () => {
  return (<>
    <View style={settingsStyle.container}>
        <Text style={settingsStyle.containerText}>Settings</Text>
        <View style={settingsStyle.wrapper}>

            <View style={settingsStyle.mainContent}>
                <Text style={settingsStyle.mainText}> Update Profile</Text>
                <View style={settingsStyle.IconsWrapper}>
                    <Icon  name="greater-than" style={settingsStyle.Icon}/>
                </View>
            </View>

            <View style={settingsStyle.mainContent}>
                <Text style={settingsStyle.mainText}> Delete Profile</Text>
                <View style={settingsStyle.IconsWrapper}>
                    <Icon  name="greater-than" style={settingsStyle.Icon}/>
                </View>
            </View>

            <View style={settingsStyle.mainContent}>
                <Text style={settingsStyle.mainText}> Logout</Text>
                <View style={settingsStyle.IconsWrapper}>
                    <Icon  name="right-from-bracket" style={settingsStyle.Icon}/>
                </View>
            </View>
        </View>

    <Footernavigation/>
    </View>
         </>)
}

export default SettingsScreen