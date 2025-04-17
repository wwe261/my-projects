import { View, Text } from 'react-native'

import welcomeStyles from '../../../styles/admin/Welcomepage'

const Welcomepage = () => {
  return (<>
    <View style={welcomeStyles.container}>
        <Text style={welcomeStyles.welcomeTextHeader}>WELCOME TO THE ADMIN PAGE</Text>
        <Text style={welcomeStyles.welcomeText}>WELCOME TO THE ADMIN PAGE WHERE YOU CAN DELETE,
             UPDATE, SEARCH AND ADD BOOKS TO OUR DATABASE
        </Text>
    </View>

    </>)
}

export default Welcomepage