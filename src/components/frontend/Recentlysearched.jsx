import { View, Text } from 'react-native'

import recentlySearchStyles from '../../../styles/frontend/Recentlysearched'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icons from 'react-native-vector-icons/Ionicons'

const Recentlysearched = () => {
  return (<>
      <Text style={recentlySearchStyles.recentlySearchedText}>Recently Searched</Text>

      <View style={recentlySearchStyles.searchQueryContainer}>

      <View style={recentlySearchStyles.recentlySearchedWrapper}>
            <View style={recentlySearchStyles.recentIconWrapper}>
                <Icons name="refresh-circle" style={recentlySearchStyles.recentIcon}/>
            </View>

            <Text style={recentlySearchStyles.recentSearchText}>Caroline Kepnes,m,m,mmmmmmlmlkm
                ,,dd,m,m,,,,mklmlkmlmkmkm,mmvmf mmkm mklm;l;l
                kmkmlllmkmlklprlp
                 </Text>

            <View style={recentlySearchStyles.deleteIconWrapper}>
                <Icon name="trash" style={recentlySearchStyles.deleteIcon}/>
            </View>
      </View>

      


      </View>      

         </>)
}

export default Recentlysearched