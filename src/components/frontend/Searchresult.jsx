import { View, Text, Image } from 'react-native'

import searchResultStyle from '../../../styles/frontend/Searchresult'
const Searchresult = () => {
  return (<>
    
    <View style={searchResultStyle.container}>
        <Text style={searchResultStyle.resultText}>Here are the search results for 'search'</Text>
        <View style={searchResultStyle.resultsWrapper}>
              <View style={searchResultStyle.resultsTemplate}>
                  <View style={searchResultStyle.booksFigure}>
                      <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={searchResultStyle.image}/>
                  </View>
                  <Text style={searchResultStyle.information}>title...</Text>
                  <Text style={searchResultStyle.information}>Author</Text>
                  <Text style={searchResultStyle.information} >Price</Text>
                  <Text style={searchResultStyle.information}>Caegory</Text>
              </View>

              <View style={searchResultStyle.resultsTemplate}>
                  <View style={searchResultStyle.booksFigure}>
                      <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={searchResultStyle.image}/>
                  </View>
                  <Text style={searchResultStyle.information}>title...</Text>
                  <Text style={searchResultStyle.information}>Author</Text>
                  <Text style={searchResultStyle.information} >Price</Text>
                  <Text style={searchResultStyle.information}>Caegory</Text>
              </View>

              <View style={searchResultStyle.resultsTemplate}>
                  <View style={searchResultStyle.booksFigure}>
                      <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={searchResultStyle.image}/>
                  </View>
                  <Text style={searchResultStyle.information}>title...</Text>
                  <Text style={searchResultStyle.information}>Author</Text>
                  <Text style={searchResultStyle.information} >Price</Text>
                  <Text style={searchResultStyle.information}>Caegory</Text>
              </View>

              <View style={searchResultStyle.resultsTemplate}>
                  <View style={searchResultStyle.booksFigure}>
                      <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={searchResultStyle.image}/>
                  </View>
                  <Text style={searchResultStyle.information}>title...</Text>
                  <Text style={searchResultStyle.information}>Author</Text>
                  <Text style={searchResultStyle.information} >Price</Text>
                  <Text style={searchResultStyle.information}>Caegory</Text>
              </View>

              <View style={searchResultStyle.resultsTemplate}>
                  <View style={searchResultStyle.booksFigure}>
                      <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={searchResultStyle.image}/>
                  </View>
                  <Text style={searchResultStyle.information}>title...</Text>
                  <Text style={searchResultStyle.information}>Author</Text>
                  <Text style={searchResultStyle.information} >Price</Text>
                  <Text style={searchResultStyle.information}>Caegory</Text>
              </View>

              <View style={searchResultStyle.resultsTemplate}>
                  <View style={searchResultStyle.booksFigure}>
                      <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={searchResultStyle.image}/>
                  </View>
                  <Text style={searchResultStyle.information}>title...</Text>
                  <Text style={searchResultStyle.information}>Author</Text>
                  <Text style={searchResultStyle.information} >Price</Text>
                  <Text style={searchResultStyle.information}>Caegory</Text>
              </View>
              
        </View>
    </View>


         </>)
}

export default Searchresult