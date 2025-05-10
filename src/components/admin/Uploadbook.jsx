import { View, Text, TextInput, TouchableOpacity, Image , ScrollView,FlatList} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setUpdateUri } from '@/src/redux/updateImageUri'
import { setUpdateValue } from '@/src/redux/searchUpdateBook'
import { resetForm } from '@/src/redux/UpdateBookInputValue'
import { setupdateBooksFromSearch } from '@/src/redux/updateSearchResult'
import {updateValidateInput,} from '../adminFunctions/updateValidateInput'
import { setValue } from '@/src/redux/openPickImageSlicer'
import { useUpdateBookMutation } from '@/backend/rtk query/TollkitQueries'
import { useSearchForBookMutation } from '@/backend/rtk query/TollkitQueries'
import { useEffect,useState } from 'react'


import Icon from 'react-native-vector-icons/FontAwesome'
import uploadBookStyles from '../../../styles/admin/UploadBook'

const Uploadbook = () => {
 
    const {formData,handleChange,errors, validateForm}=updateValidateInput()
    const [updateBook ,{isLoading,isError, isSuccess}]=useUpdateBookMutation()
    const [searchBook,{data,isError:searchError,isLoading:searchLoading}]=useSearchForBookMutation()

    const dispatch=useDispatch()
    const searchResults=useSelector((state)=> state.updateResults.updateBooksFromSearch)
    const searchValue=useSelector((state)=> state.updateSearchValue.searchValue)
    const imageUri=useSelector((state)=> state.updateImageUri.imageUri)
    const [hasSearched, setHasSearched]=useState(false)
    const [searchNotFound, setSearchNotFound]=useState(false)
    

    const handleSubmit=async()=>{
        if(validateForm()){
            try{

                await updateBook({id:searchResults?.data[0].id, updateBook:formData})

                await searchBook({ searchQuery: searchValue });
                }catch(error){
                    console.log(error)
                } 
        }else{
            console.log("errors")
        }
       
    }

    const handleSearch=async()=>{
        if(searchValue && searchValue.trim() && /^\d{3}-\d{4}-\d{4}$/.test(searchValue) ){
            try{
                                 
                 await searchBook({searchQuery:searchValue})
                 setHasSearched(true)
            }catch(error){
                console.log(error)
                setHasSearched(false);
            }  
             }else{
                 console.log("cant search empty string")
                 
            }     
    }

    
    useEffect(()=>{
        
        if (searchResults?.data?.length > 0) {
            const book=searchResults.data[0]
        if(book){
        handleChange('title', book.title || '')
        handleChange('category', book.category || '')
        handleChange('isbn', book.isbn || '')
        handleChange('price', book.price.toString())
        handleChange('authors', book.authors || '')
        handleChange('bucket_path',book.imageUri.substring(book.imageUri.lastIndexOf('/') + 1) || '') 
      
        }
       }
    }, [searchResults])


    useEffect(()=>{
        if(isSuccess){
         dispatch(setUpdateUri(''))

         handleChange('image', searchResults?.data[0].imageUri)
        }  
     },[isSuccess, searchResults])


     useEffect(()=>{
        if(imageUri){
            handleChange('image', imageUri)

        }else if(searchResults?.data?.length > 0){

            handleChange('image', searchResults?.data[0].imageUri)

        }   
     },[imageUri, searchResults]) 

      useEffect(()=>{
        console.log(formData)
      }, [formData])

     useEffect(() => {
        if (!searchValue.trim()) {
           setHasSearched(false);
           setSearchNotFound(false);
        } else if (hasSearched) { 

        if (searchResults && Array.isArray(searchResults.data)) {
            if (searchResults.data.length === 0) {
                setSearchNotFound(true);
            } else {
                 setSearchNotFound(false);
            }

           }
       }
     }, [searchResults, searchValue, hasSearched])
     
     useEffect(()=>{
        if(data){
            dispatch(setupdateBooksFromSearch(data))
        }
     },[data])
     
  return (<>
       <Text style={uploadBookStyles.uploadBookText}>UPDATE BOOK</Text>

       <View style={uploadBookStyles.uploadBookSection}>

          <View style={uploadBookStyles.uploadBookSearchContainer}>
                <TextInput 
                placeholder='SEARCH BOOK By ISBN...' 
                 value={searchValue}
                style={uploadBookStyles.uploadBookInput}
                onChangeText={(text)=>{
                    dispatch(setUpdateValue(text))
                    if (text.trim() === '') {
                        dispatch(setupdateBooksFromSearch([]))
                      } 
                }}
                onPress={handleSearch}
                />

                <TouchableOpacity style={uploadBookStyles.uploadBookSearchIconContainer} onPress={handleSearch}>
                    <Icon name="search" style={uploadBookStyles.uploadBookSearchIcon}/>
                </TouchableOpacity>
          </View>
       
            <FlatList
              data={searchResults?.data}
              keyExtractor={(item)=> item.id}
              contentContainerStyle={uploadBookStyles.uploadBookInputsSection}
              
              renderItem={({item})=>(<>
                <View style={uploadBookStyles.uploadBookInputContainer}>
                 
                <TextInput 
                placeholder='BOOK TITLE...'
                style={uploadBookStyles.updateBookInput}
                onChangeText={(text)=>{
                    handleChange('title',text)
                    
                }}
                placeholderTextColor="#fff"
                value={formData.title}
                />

            </View>
            
            <View style={uploadBookStyles.uploadBookInputContainer}>
                <TextInput 
                 placeholder='ISBN...' 
                 style={uploadBookStyles.updateBookInput}
                 placeholderTextColor="#fff"
                 onChangeText={(text)=>{
                    handleChange('isbn',text)
                 }}
                 value={formData.isbn}
                 />
            </View>

            <View style={uploadBookStyles.uploadBookInputContainer}>
                <TextInput 
                 placeholder='AUTHORS...' 
                 style={uploadBookStyles.updateBookInput}
                 placeholderTextColor="#fff"
                 onChangeText={(text)=>{
                    handleChange('authors', text)
                 }}
                 value={formData.authors}
                 />
            </View>

            <View style={uploadBookStyles.uploadBookInputContainer}>
                <TextInput 
                 placeholder='CATEGORY...' 
                 style={uploadBookStyles.updateBookInput}
                 placeholderTextColor="#fff"
                 onChangeText={(text)=>{
                    handleChange('category', text)
                 }}
                 value={formData.category}
                 />
            </View>

            <View style={uploadBookStyles.uploadBookInputContainer}>
                <TextInput 

                  placeholder='PRICE...'
                  style={uploadBookStyles.updateBookInput}
                  placeholderTextColor="#fff"
                  onChangeText={(text)=>{
                        handleChange('price',text)
                  }}
                  keyboardType='phone-pad'
                  value={formData.price}
                  />
            </View>

        <View style={uploadBookStyles.uploadBookImagePreviewContainer}>
            <TouchableOpacity style={uploadBookStyles.updateBookButtonContainer} onPress={()=>dispatch(setValue(true))}>
                    <TouchableOpacity style={uploadBookStyles.updateBookButton}  >
                      <Text style={uploadBookStyles.updateBookButtonText} >UPDATE IMAGE</Text>
                    </TouchableOpacity>
                      <View style={uploadBookStyles.updateBookUploadIconContainer} > 
                          <Icon name="upload" style={uploadBookStyles.updateBookUploadIcon}/>
                      </View>
            </TouchableOpacity>
            
             <View style={uploadBookStyles.updateImagePreviewFigure}>
                <Image 
                source={{uri: `${item.imageUri}`}} 
                style={uploadBookStyles.updateImagePreview}/>
             </View>

        </View>
        
        <View style={uploadBookStyles.updateBookInDatatabaseContainer}>
            <TouchableOpacity style={uploadBookStyles.updateBookInDatatabase} onPress={handleSubmit}>
                <Text style={uploadBookStyles.updateBookInDatatabaseText}>UPDATE BOOK</Text>
            </TouchableOpacity>
        </View>
             
        </>)}  
            /> 
            

     </View>

    </>)
}


export default Uploadbook