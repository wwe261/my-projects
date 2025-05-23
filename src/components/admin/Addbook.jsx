import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useEffect, useState } from 'react'

import {supabase} from '../../../backend/database/connectDatabase'

import Icon from 'react-native-vector-icons/FontAwesome'

import addBookStyles from '../../../styles/admin/Addbook'
import {validateInput} from '../adminFunctions/validateInput'
import { useDispatch, useSelector } from 'react-redux'
import { setValue } from '@/src/redux/openPickImageSlicer'
import { cameraPermissions } from '@/src/sharedFunctions/cameraPermissions'
import {useAddBooksMutation} from '../../../backend/rtk query/TollkitQueries'
import { setUri } from '@/src/redux/ImageUri'
import { resetForm } from '@/src/redux/AddBookInputValue'
import SucessLoadingModal from '@/src/sharedComponets/Sucess&LoadingModal'

const Addbook = () => {
 const [display, setDisplay]=useState(false)
 const [displayError, setDisplayError]=useState(false)

  const {validateForm, handleChange,formData,errors}=validateInput()
  const [addnewBook,{data,error,isLoading,isSuccess}]=useAddBooksMutation()
  //THIS WILL VARIABLE HOLDS THE USEDISPATCH HOOK USED TO SEND CALL FUNCTION OD REDUX
  const dispatch=useDispatch()

  //AFTER THE DATA IS SUCCESSFULLY SUBMITTED TO THE SERVER THIS WILL RESET THE FORM
  
  useEffect(()=>{
   if(isSuccess){
      dispatch(resetForm())
    } 
    
  },[isSuccess]) 

  //THIS SUBMITS THE DATA TO THE SERVER IF IF THE FORM IS VALIDATED AND THERE ARE NO ERRORS
  const handleSubmit=async()=>{
    if(validateForm()){
      try{
        const newBook={
            bookTitle:formData.title,  
            isbn:formData.isbn,
            authors:formData.authors,
            category:formData.category,
            price:formData.price,
            image:formData.image,
        }
        await addnewBook(newBook)
        
      }catch(err){
        console.log(err)
      }
    }else{
      console.log(errors)
    }
  }

  
 
  

 //SNCE OUR IMAGE URL IS BEING PERSISTED IN REDUX PERSIST THIS IS HOW WE FETCH IT
  const images=useSelector((state)=>  state.imageUri.imageUri)

//WHEN THE VALUE OF IMAGE IN REDUX CHANGES THIS SETS THE IMAGE PROPERTY TO THAT VALUE
  useEffect(()=>{
    handleChange('image', images)
    
  },[images])
 
  useEffect(()=>{
    if(isLoading){
      setDisplay(true)
    }else{
      setDisplay(false)
    }

    if(isSuccess){
      setDisplay(true)
    }else{
      setDisplay(false)
    }
  }, [isLoading, isSuccess])
  
   
   useEffect(()=>{
      if(Object.keys(errors).length !==0){
        setDisplayError(true)
      }
      console.log(errors)
   }, [errors])
  return (<>
    
     {display && <SucessLoadingModal isLoading={isLoading} isSuccess={isSuccess} text="added" />}

    <Text style={addBookStyles.adminAddBookSectionText}>ADD BOOK</Text>
   
        <ScrollView style={addBookStyles.adminAddBookSection}>
              <View style={addBookStyles.adminAddBookInputs}>
                  <TextInput placeholder='BOOK TITLE...' 
                  style={addBookStyles.adminAddBookTextInput}
                  value={formData.title}
                  onChangeText={(text) => handleChange('title', text)}
                  placeholderTextColor="#fff"
                  />
                  {displayError && errors.title ? (<Text style={addBookStyles.errorText}>{errors.title}</Text>) : null}
                  
              </View>
              
              <View  style={addBookStyles.adminAddBookInputs}>

                  <TextInput placeholder='BOOK ISBN...' 
                   style={addBookStyles.adminAddBookTextInput}
                   value={formData.isbn}
                   onChangeText={(text) => handleChange('isbn', text)}
                   placeholderTextColor="#fff"
                   />
                   {displayError && errors.isbn ? (<Text style={addBookStyles.errorText}>{errors.isbn}</Text>) : null}
                    
              </View>
              
              <View style={addBookStyles.adminAddBookInputs} >

                  <TextInput placeholder='AUTHORS...'
                  style={addBookStyles.adminAddBookTextInput}
                  value={formData.authors}
                  onChangeText={(text)=> handleChange('authors', text)}
                  placeholderTextColor="#fff"
                   />
                   {displayError && errors.authors ? (<Text style={addBookStyles.errorText}>{errors.authors}</Text>) : null}
                
              </View>

              <View style={addBookStyles.adminAddBookInputs} >

                  <TextInput placeholder='CATEGORY...'
                  style={addBookStyles.adminAddBookTextInput}
                  value={formData.category}
                  onChangeText={(text)=> handleChange('category', text)}  
                  placeholderTextColor="#fff"
                   />
                   {displayError && errors.category ? (<Text style={addBookStyles.errorText}>{errors.category}</Text>) : null}
                  
              </View>

              <View style={addBookStyles.adminAddBookInputs} >
                  <TextInput placeholder='PRICE...'
                   style={addBookStyles.adminAddBookTextInput}
                   onChangeText={(text)=> handleChange('price', text)}
                   value={formData.price}
                   placeholderTextColor="#fff"
                    keyboardType='phone-pad'
                   />
                   {displayError && errors.price ? (<Text style={addBookStyles.errorText}>{errors.price}</Text>) : null}
                   
              </View>

              <View style={addBookStyles.adminAddBookFileUploadButtonContainer} onTouchEnd={()=> dispatch(setValue(true))}  >
                    <TouchableOpacity  style={addBookStyles.adminAddBookUploadButton} >
                      <Text style={addBookStyles.adminAddBookText}>UPLOAD IMAGE</Text>
                    </TouchableOpacity>
                      <View style={addBookStyles.adminAddBookUpload}> 
                          <Icon name="upload" style={addBookStyles.adminAddBookUploadIcon}/>
                      </View>
              </View>
              {displayError && errors.image ? (<Text style={addBookStyles.errorText}>{errors.image}</Text>) : null}
            
              
              <View style={addBookStyles.adminAddBookToDatabase}>
                <TouchableOpacity style={addBookStyles.adminAddBookToDatabaseButton} onPress={handleSubmit} disabled={isLoading}>
                  <Text style={addBookStyles.adminAddBookToDatabaseText}>{isLoading? 'SUBMITTING': 'ADD DATA TO DATABASE'}  </Text>
                </TouchableOpacity>
              </View>

        </ScrollView>
  </>)
}

export default Addbook