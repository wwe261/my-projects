import { View, Text,TextInput, Image, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import SearchBookStyles from '../../../styles/admin/Searchbook'
const Searchbook = () => {
  return (<>
<Text style={SearchBookStyles.searchBookText}> SEARCH FOR A BOOK</Text>

  
    <View style={SearchBookStyles.searchBookContainer}>

        <View style={SearchBookStyles.searchBooksearchContainer}>

            <TextInput placeholder='Search for book ' style={SearchBookStyles.searchBooksearchInput}/>

                <View style={SearchBookStyles.searchBookIconContainer}>
                    <Icon name="search" style={SearchBookStyles.searchBookIcon}/>
                </View>

         </View>
    <View><Text style={SearchBookStyles.searchBookByWhat}>(search by book title or isbn (!)...)</Text></View>

    <ScrollView style={SearchBookStyles.searchBookSectionContainer} horizontal >

        <View style={SearchBookStyles.searchBookTemplate}>
            <View style={SearchBookStyles.searchBookTemplateFigure}>
                <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={SearchBookStyles.searchBookTemplateImage} />
            </View>
            <View style={SearchBookStyles.searchBookInformationContainer}>
                <Text style={SearchBookStyles.searchBookInformationText}>A STORY</Text>
                <Text style={SearchBookStyles.searchBookInformationText}> R 100</Text>
                <Text style={SearchBookStyles.searchBookInformationText}>BY: ASHLEY CONN</Text>
                <Text style={SearchBookStyles.searchBookInformationText}>FICTION</Text>
            </View>
           
        </View> 
         
        <View style={SearchBookStyles.searchBookTemplate}>
            <View style={SearchBookStyles.searchBookTemplateFigure}>
                <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={SearchBookStyles.searchBookTemplateImage} />
            </View>
            <View style={SearchBookStyles.searchBookInformationContainer}>
                <Text style={SearchBookStyles.searchBookInformationText}>A STORY</Text>
                <Text style={SearchBookStyles.searchBookInformationText}> R 100</Text>
                <Text style={SearchBookStyles.searchBookInformationText}>BY: ASHLEY CONN</Text>
                <Text style={SearchBookStyles.searchBookInformationText}>FICTION</Text>
            </View>
           
        </View> 

        <View style={SearchBookStyles.searchBookTemplate}>
        <View style={SearchBookStyles.searchBookTemplateFigure}>
            <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={SearchBookStyles.searchBookTemplateImage} />
        </View>
        <View style={SearchBookStyles.searchBookInformationContainer}>
            <Text style={SearchBookStyles.searchBookInformationText}>A STORY</Text>
            <Text style={SearchBookStyles.searchBookInformationText}> R 100</Text>
            <Text style={SearchBookStyles.searchBookInformationText}>BY: ASHLEY CONN</Text>
            <Text style={SearchBookStyles.searchBookInformationText}>FICTION</Text>
        </View>
       
        </View> 

        <View style={SearchBookStyles.searchBookTemplate}>
            <View style={SearchBookStyles.searchBookTemplateFigure}>
                <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={SearchBookStyles.searchBookTemplateImage} />
            </View>
            <View style={SearchBookStyles.searchBookInformationContainer}>
                <Text style={SearchBookStyles.searchBookInformationText}>A STORY</Text>
                <Text style={SearchBookStyles.searchBookInformationText}> R 100</Text>
                <Text style={SearchBookStyles.searchBookInformationText}>BY: ASHLEY CONN</Text>
                <Text style={SearchBookStyles.searchBookInformationText}>FICTION</Text>
            </View>
           
        </View> 

        <View style={SearchBookStyles.searchBookTemplate}>
            <View style={SearchBookStyles.searchBookTemplateFigure}>
                <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={SearchBookStyles.searchBookTemplateImage} />
            </View>
            <View style={SearchBookStyles.searchBookInformationContainer}>
                <Text style={SearchBookStyles.searchBookInformationText}>A STORY</Text>
                <Text style={SearchBookStyles.searchBookInformationText}> R 100</Text>
                <Text style={SearchBookStyles.searchBookInformationText}>BY: ASHLEY CONN</Text>
                <Text style={SearchBookStyles.searchBookInformationText}>FICTION</Text>
            </View>
           
        </View>

    </ScrollView>
</View> 
  </>)
}

export default Searchbook