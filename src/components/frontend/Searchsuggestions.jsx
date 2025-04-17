import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import searchSuggestionStyle from '../../../styles/frontend/Searchsuggestion'

const Searchsuggestions = () => {
  return (<>
    <View style={searchSuggestionStyle.container}>
     
        <View style={searchSuggestionStyle.suggestionWrapper}>

            <View style={searchSuggestionStyle.searchIconWrapper}>
                <Icon name="search" style={searchSuggestionStyle.searchIcon}/>
            </View>
            <Text style={searchSuggestionStyle.suggestionText}>Caroline Kepnes

              mbchbnmnbljbcjxgvbb,.m/,.m.vcjgfcvjvnm.,/.m,mvcfjcvbmhgffhjkgdfdghghddsd
              jgdddfhjffsfgjkhggfsasdsdghg
            </Text>
        </View>

        <View style={searchSuggestionStyle.suggestionWrapper}>

            <View style={searchSuggestionStyle.searchIconWrapper}>
                <Icon name="search" style={searchSuggestionStyle.searchIcon}/>
            </View>
            <Text style={searchSuggestionStyle.suggestionText}>Caroline Kepnes

              mbchbnmnbljbcjxgvbb,.m/,.m.vcjgfcvjvnm.,/.m,mvcfjcvbmhgffhjkgdfdghghddsd
                jgdddfhjffsfgjkhggfsasdsdghg
             </Text>
        </View>



    </View>
    
    </>)
}

export default Searchsuggestions