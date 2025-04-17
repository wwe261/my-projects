import { View, Text,TextInput } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

import homeStyles from '../../styles/frontend/Homepage'
const Searchcomponent = () => {
  return (<>

        <View style={homeStyles.searchBarWrapper}>

        <TextInput placeholder='SEARCH BOOK' style={homeStyles.searchBar}/>

              <View style={homeStyles.searchIconWrapper}>
                  <Icon name="search" style={homeStyles.searchIcon}/>
              </View>

        </View>
         </>)
}

export default Searchcomponent