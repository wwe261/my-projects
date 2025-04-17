import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import deleteBookStyles from '../../../styles/admin/Deletebook'

import SearchBookStyles from '../../../styles/admin/Searchbook'

const Deletebook = () => {
  return (<>
  <Text style={deleteBookStyles.deleteBookText}>DELETE BOOK</Text>
  
  <View style={deleteBookStyles.deleteBookContainer}>

    <View style={deleteBookStyles.deleteBookSearchContainer}>

        <TextInput placeholder='Search for book ' style={deleteBookStyles.deleteBookSearchInput}/>

           <View style={deleteBookStyles.deleteBookIconContainer}>
                <Icon name="search" style={deleteBookStyles.deleteBookSearchIcon}/>
            </View>

    </View>

  <ScrollView style={deleteBookStyles.deleteBookSectionContainer} horizontal>
    <View style={deleteBookStyles.deleteBookTemplateContainer}>
       <View style={deleteBookStyles.deleteBookTemplate}>
           <View style={deleteBookStyles.deleteBookImageFigure} >
                <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={deleteBookStyles.deleteBookImage}/>
           </View>
           <View style={deleteBookStyles.deleteBookInformationContainer}>
              <Text> A STORY</Text>
              <Text>CAROLINE KEPNES</Text>
              <Text>R 100</Text>
              <Text>FICTION</Text>
           </View>
       </View>
       <View style={deleteBookStyles.deleteBookDeleteButtonContainer}>
         <TouchableOpacity style={deleteBookStyles.deleteBookDeleteButton}><Text style={deleteBookStyles.deleteButtonText}>DELETE BOOK</Text></TouchableOpacity>
       </View>
    </View>

    <View style={deleteBookStyles.deleteBookTemplateContainer}>
       <View style={deleteBookStyles.deleteBookTemplate}>
           <View style={deleteBookStyles.deleteBookImageFigure} >
                <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={deleteBookStyles.deleteBookImage}/>
           </View>
           <View style={deleteBookStyles.deleteBookInformationContainer}>
              <Text> A STORY</Text>
              <Text>CAROLINE KEPNES</Text>
              <Text>R 100</Text>
              <Text>FICTION</Text>
           </View>
       </View>
       <View style={deleteBookStyles.deleteBookDeleteButtonContainer}>
         <TouchableOpacity style={deleteBookStyles.deleteBookDeleteButton}><Text style={deleteBookStyles.deleteButtonText}>DELETE BOOK</Text></TouchableOpacity>
       </View>
    </View>

    <View style={deleteBookStyles.deleteBookTemplateContainer}>
       <View style={deleteBookStyles.deleteBookTemplate}>
           <View style={deleteBookStyles.deleteBookImageFigure} >
                <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={deleteBookStyles.deleteBookImage}/>
           </View>
           <View style={deleteBookStyles.deleteBookInformationContainer}>
              <Text> A STORY</Text>
              <Text>CAROLINE KEPNES</Text>
              <Text>R 100</Text>
              <Text>FICTION</Text>
           </View>
       </View>
       <View style={deleteBookStyles.deleteBookDeleteButtonContainer}>
         <TouchableOpacity style={deleteBookStyles.deleteBookDeleteButton}><Text style={deleteBookStyles.deleteButtonText}>DELETE BOOK</Text></TouchableOpacity>
       </View>
    </View>

    <View style={deleteBookStyles.deleteBookTemplateContainer}>
       <View style={deleteBookStyles.deleteBookTemplate}>
           <View style={deleteBookStyles.deleteBookImageFigure} >
                <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={deleteBookStyles.deleteBookImage}/>
           </View>
           <View style={deleteBookStyles.deleteBookInformationContainer}>
              <Text> A STORY</Text>
              <Text>CAROLINE KEPNES</Text>
              <Text>R 100</Text>
              <Text>FICTION</Text>
           </View>
       </View>
       <View style={deleteBookStyles.deleteBookDeleteButtonContainer}>
         <TouchableOpacity style={deleteBookStyles.deleteBookDeleteButton}><Text style={deleteBookStyles.deleteButtonText}>DELETE BOOK</Text></TouchableOpacity>
       </View>
    </View>
    
  </ScrollView>

  </View>

  </>)
}

export default Deletebook