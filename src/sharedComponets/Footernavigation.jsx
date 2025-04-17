import { View, Text,TouchableOpacity } from 'react-native'
import { useNavigation } from 'expo-router'
import footerNavigationStyle from '../../styles/frontend/Footernavigation'

import Icon from 'react-native-vector-icons/FontAwesome5'

const Footernavigation = ({keyboardVisible}) => {

    const navigation=useNavigation()
  return (<>
  
  <View style={[footerNavigationStyle.appFooterNavigationWrapper,
             keyboardVisible && { opacity: 0, position: 'absolute', bottom: -100 }]}
    >
        <TouchableOpacity style={footerNavigationStyle.appFooterNavigation}  onPress={()=> navigation.navigate("Home")}>
            <View style={footerNavigationStyle.appFooterNavigationIconWrapper}>
                <Icon name="home" style={footerNavigationStyle.appFooterNavigationIcon}/>
            </View>
                <Text style={footerNavigationStyle.appFooterNavigationText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={footerNavigationStyle.appFooterNavigation} >
            <View style={footerNavigationStyle.appFooterNavigationIconWrapper}>
                <Icon name="shopping-bag" style={footerNavigationStyle.appFooterNavigationIcon}/>
            </View>
                <Text style={footerNavigationStyle.appFooterNavigationText}>Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[footerNavigationStyle.appFooterNavigation]} onPress={()=> navigation.navigate("search")}>
            <View style={[footerNavigationStyle.appFooterNavigationIconWrapper, footerNavigationStyle.homePageFooterMiddleButton ]} >
                <Icon name="search" style={[footerNavigationStyle.appFooterNavigationIcon, footerNavigationStyle.homePageFooterMiddleIcon]}/>
            </View>
                <Text style={footerNavigationStyle.appFooterNavigationText}>Search</Text>
        </TouchableOpacity>
            
        <TouchableOpacity style={footerNavigationStyle.appFooterNavigation} onPress={()=> navigation.navigate("settings")} >
            <View style={footerNavigationStyle.appFooterNavigationIconWrapper}>
                <Icon name="cog" style={footerNavigationStyle.appFooterNavigationIcon}/>
            </View>
                <Text style={footerNavigationStyle.appFooterNavigationText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={footerNavigationStyle.appFooterNavigation}  onPress={()=> navigation.navigate("me")}>
            <View style={footerNavigationStyle.appFooterNavigationIconWrapper}>
                <Icon name="user" style={footerNavigationStyle.appFooterNavigationIcon}/>
            </View>
                <Text style={footerNavigationStyle.appFooterNavigationText}>Me</Text>
        </TouchableOpacity>
    </View>
  
        </>)
}

export default Footernavigation