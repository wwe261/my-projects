import { View, Text,TextInput,TouchableWithoutFeedback, Keyboard } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import Icons from 'react-native-vector-icons/Ionicons'

import Recentlysearched from '../frontend/Recentlysearched'
import Searchsuggestions from '../frontend/Searchsuggestions'
import Searchnotfound from '../frontend/Searchnotfound'
import Searchresult from '../frontend/Searchresult'
//Styles
import searchScreenStyles from '../../../styles/frontend/Searchscreen'
import Footernavigation from '@/src/sharedComponets/Footernavigation'

const Searchscreen = () => {
  return (<>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={searchScreenStyles.container}>
        <View style={searchScreenStyles.header}>
            <View style={searchScreenStyles.navigationArrowWrapper}>
                <Icon name="arrow-left" style={searchScreenStyles.navigationArrow} />
            </View>
            <View style={searchScreenStyles.searchWrapper}>
                 <TextInput style={searchScreenStyles.input}/>
                 <View style={searchScreenStyles.searchIconWrapper}>
                     <Icon name="search" style={searchScreenStyles.searchIcon}/>
                 </View>
            </View>
        </View>


        
        <View style={searchScreenStyles.mainContent}>
           {/*<Recentlysearched/>*/} 
           {/*<Searchsuggestions/>*/}
           {/* <Searchnotfound/> */}
           {<Searchresult/>}
          

        
        </View>
        <Footernavigation/>
    </View>
    </TouchableWithoutFeedback>
  
   </>)
}

export default Searchscreen