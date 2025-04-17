import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import addBookStyles from '../../../styles/admin/Addbook'


const Addbook = () => {
  return (<>
    <Text style={addBookStyles.adminAddBookSectionText}>ADD BOOK</Text>

        <ScrollView style={addBookStyles.adminAddBookSection}>
              <View style={addBookStyles.adminAddBookInputs}>
                  <TextInput placeholder='BOOK TITLE...' style={addBookStyles.adminAddBookTextInput}/>
              </View>

              <View  style={addBookStyles.adminAddBookInputs}>
                  <TextInput placeholder='BOOK ISBN...'  style={addBookStyles.adminAddBookTextInput}/>
              </View>

              <View style={addBookStyles.adminAddBookInputs} >
                  <TextInput placeholder='AUTHORS...'style={addBookStyles.adminAddBookTextInput} />
              </View>

              <View style={addBookStyles.adminAddBookInputs} >
                  <TextInput placeholder='PRICE' style={addBookStyles.adminAddBookTextInput}/>
              </View>

              <View style={addBookStyles.adminAddBookFileUploadButtonContainer}>
                    <TouchableOpacity  style={addBookStyles.adminAddBookUploadButton}>
                      <Text style={addBookStyles.adminAddBookText}>UPLOAD IMAGE</Text>
                    </TouchableOpacity>
                      <View style={addBookStyles.adminAddBookUpload}> 
                          <Icon name="upload" style={addBookStyles.adminAddBookUploadIcon}/>
                      </View>
              </View>

              <View style={addBookStyles.adminAddBookToDatabase}>
                <TouchableOpacity style={addBookStyles.adminAddBookToDatabaseButton}>
                  <Text style={addBookStyles.adminAddBookToDatabaseText}>ADD BOOK TO DATABASE</Text>
                </TouchableOpacity>
              </View>

        </ScrollView>
  </>)
}

export default Addbook