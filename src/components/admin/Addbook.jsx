import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useEffect } from 'react'


import Icon from 'react-native-vector-icons/FontAwesome'

import addBookStyles from '../../../styles/admin/Addbook'
import {validateInput} from '../adminFunctions/validateInput'
import { useDispatch, useSelector } from 'react-redux'
import { setValue } from '@/src/redux/openPickImageSlicer'
import { cameraPermissions } from '@/src/sharedFunctions/cameraPermissions'
import {useAddBooksMutation} from '../../../backend/rtk query/TollkitQueries'

const Addbook = () => {

  const {validateForm, handleChange,formData,errors}=validateInput()
  const [addnewBook,{data,error,isLoading}]=useAddBooksMutation()

  const handleSubmit=async()=>{
    if(validateForm()){
      try{
        const newBook={
            bookTitle:formData.title,
            isbn:formData.isbn,
            authors:formData.authors,
            category:formData.category,
            price:formData.price,
            image:formData.image
        }
        
        await addnewBook(newBook)
      }catch(err){
        console.log(err)
      }
    }else{
      console.log("cant errors")
    }
  }

  useEffect(()=>{
    console.log(formData)
  }, [formData])

  const dispatch=useDispatch()
  const images=useSelector((state)=>  state.imageUri.imageUri)

  useEffect(()=>{
    handleChange('image', images)
  },[images])
 
  
  
  
  

  return (<>
    <Text style={addBookStyles.adminAddBookSectionText}>ADD BOOK</Text>

        <ScrollView style={addBookStyles.adminAddBookSection}>
              <View style={addBookStyles.adminAddBookInputs}>
                  <TextInput placeholder='BOOK TITLE...' 
                  style={addBookStyles.adminAddBookTextInput}
                  onChangeText={(text) => handleChange('title', text)}
                  placeholderTextColor="#fff"
                  />
              </View>

              <View  style={addBookStyles.adminAddBookInputs}>

                  <TextInput placeholder='BOOK ISBN...' 
                   style={addBookStyles.adminAddBookTextInput}
                   onChangeText={(text) => handleChange('isbn', text)}
                   placeholderTextColor="#fff"
                   />

              </View>

              <View style={addBookStyles.adminAddBookInputs} >

                  <TextInput placeholder='AUTHORS...'
                  style={addBookStyles.adminAddBookTextInput}
                  onChangeText={(text)=> handleChange('authors', text)}
                  placeholderTextColor="#fff"
                   />

              </View>

              <View style={addBookStyles.adminAddBookInputs} >

                  <TextInput placeholder='CATEGORY...'
                  style={addBookStyles.adminAddBookTextInput}
                  onChangeText={(text)=> handleChange('category', text)}  
                  placeholderTextColor="#fff"
                   />

              </View>

              <View style={addBookStyles.adminAddBookInputs} >
                  <TextInput placeholder='PRICE...'
                   style={addBookStyles.adminAddBookTextInput}
                   onChangeText={(text)=> handleChange('price', text)}
                   placeholderTextColor="#fff"
                    keyboardType='phone-pad'
                   />
              </View>

              <View style={addBookStyles.adminAddBookFileUploadButtonContainer} onTouchEnd={()=> dispatch(setValue(true))}  >
                    <TouchableOpacity  style={addBookStyles.adminAddBookUploadButton} >
                      <Text style={addBookStyles.adminAddBookText}>UPLOAD IMAGE</Text>
                    </TouchableOpacity>
                      <View style={addBookStyles.adminAddBookUpload}> 
                          <Icon name="upload" style={addBookStyles.adminAddBookUploadIcon}/>
                      </View>
              </View>

              <View style={addBookStyles.adminAddBookToDatabase}>
                <TouchableOpacity style={addBookStyles.adminAddBookToDatabaseButton} onPress={handleSubmit}>
                  <Text style={addBookStyles.adminAddBookToDatabaseText}>ADD BOOK TO DATABASE</Text>
                </TouchableOpacity>
              </View>

        </ScrollView>
  </>)
}

export default Addbook