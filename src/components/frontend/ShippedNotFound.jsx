import { View, Text } from 'react-native'

import shippedNotFound from '../../../styles/frontend/ShippedNotFound'

import Icon from 'react-native-vector-icons/Ionicons'
const ShippedNotFound = () => {
  return (<>
        <View style={shippedNotFound.container}>
            <View style={shippedNotFound.notFoundWrapper}>
                <Text style={shippedNotFound.notFoundText}>There is nothing here</Text>

                <View style={shippedNotFound.shippedNotFoundIconWrapper}>
                    <Icon name="sad" style={shippedNotFound.shippedNotFoundIcon}/>
                </View>

            </View>
        </View>
        </>)
}

export default ShippedNotFound