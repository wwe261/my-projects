import { View, Text, TextInput, TouchableOpacity, Image , ScrollView} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import uploadBookStyles from '../../../styles/admin/UploadBook'

const Uploadbook = () => {
  return (<>
       <Text style={uploadBookStyles.uploadBookText}>UPDATE BOOK</Text>

       <View style={uploadBookStyles.uploadBookSection}>

          <View style={uploadBookStyles.uploadBookSearchContainer}>
                <TextInput placeholder='SEARCH BOOK...' style={uploadBookStyles.uploadBookInput}/>
                <View style={uploadBookStyles.uploadBookSearchIconContainer}>
                    <Icon name="search" style={uploadBookStyles.uploadBookSearchIcon}/>
                </View>
          </View>

          <View style={uploadBookStyles.uploadBookInputsSection}>

            <View style={uploadBookStyles.uploadBookInputContainer}>
                <TextInput placeholder='BOOK TITLE...' style={uploadBookStyles.updateBookInput}/>
            </View>
            
            <View style={uploadBookStyles.uploadBookInputContainer}>
                <TextInput placeholder='ISBN...' style={uploadBookStyles.updateBookInput} />
            </View>

            <View style={uploadBookStyles.uploadBookInputContainer}>
                <TextInput placeholder='AUTHORS...' style={uploadBookStyles.updateBookInput} />
            </View>

            <View style={uploadBookStyles.uploadBookInputContainer}>
                <TextInput placeholder='PRICE...'style={uploadBookStyles.updateBookInput} />
            </View>

        <View style={uploadBookStyles.uploadBookImagePreviewContainer}>
            <View style={uploadBookStyles.updateBookButtonContainer} >
                    <TouchableOpacity style={uploadBookStyles.updateBookButton}  >
                      <Text style={uploadBookStyles.updateBookButtonText} >UPDATE IMAGE</Text>
                    </TouchableOpacity>
                      <View style={uploadBookStyles.updateBookUploadIconContainer} > 
                          <Icon name="upload" style={uploadBookStyles.updateBookUploadIcon}/>
                      </View>
            </View>
            
             <View style={uploadBookStyles.updateImagePreviewFigure}>
                <Image 
                source={require("../../../assets/images/You by Caroline Kepnes.webp")} 
                style={uploadBookStyles.updateImagePreview}/>
             </View>

        </View>
        
        <View style={uploadBookStyles.updateBookInDatatabaseContainer}>
            <TouchableOpacity style={uploadBookStyles.updateBookInDatatabase}>
                <Text style={uploadBookStyles.updateBookInDatatabaseText}>UPDATE BOOK</Text>
            </TouchableOpacity>
        </View>
             </View>

     </View>

    </>)
}

export default Uploadbook