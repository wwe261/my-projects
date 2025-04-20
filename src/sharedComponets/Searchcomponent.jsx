import { View, Text,TextInput } from 'react-native'
import { useNavigation } from 'expo-router'
import Icon from 'react-native-vector-icons/FontAwesome5'

import homeStyles from '../../styles/frontend/Homepage'
const Searchcomponent = () => {
const navigation=useNavigation()
  return (<>

        <View style={homeStyles.searchBarWrapper} onTouchEnd={()=> navigation.navigate('search')}>

        <TextInput placeholder='SEARCH BOOK' style={homeStyles.searchBar}/>

              <View style={homeStyles.searchIconWrapper}>
                  <Icon name="search" style={homeStyles.searchIcon}/>
              </View>

        </View>
         </>)
}

export default Searchcomponent