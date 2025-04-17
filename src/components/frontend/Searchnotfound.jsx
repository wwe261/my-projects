import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import searchNotFound from '../../../styles/frontend/Searchnotfound'

const Searchnotfound = () => {
  return (<>
    <View style={searchNotFound.container}>
        <View style={searchNotFound.notFoundWrapper}>
            <Text style={searchNotFound.notFoundText}>No result found for 'search'</Text>

            <View style={searchNotFound.searchNotFoundIconWrapper}>
                <Icon name="sad" style={searchNotFound.searchNotFoundIcon}/>
            </View>

        </View>
    </View>
    </>)
}

export default Searchnotfound