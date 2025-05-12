import { View, Text, TextInput, Image, TouchableOpacity, 
         ScrollView,TouchableWithoutFeedback, Keyboard, 
         FlatList,Modal,ActivityIndicator } from 'react-native'

import { useContentWidthSizeChange } from '@/src/sharedFunctions/ContentSizeChange'
import { useState, useEffect, useRef } from 'react'
import { useSearchBookMutation } from '@/backend/rtk query/TollkitQueries'
import { useSelector,useDispatch } from 'react-redux'
import { setModalValue } from '../../redux/deleteConfirmationModal'
import { setDeleteId } from '../../redux/deleteId'
import { setDeleteUri } from '../../redux/deleteUri'
import { setDeleteSearch } from '../../redux/deleteSearchValue'
import { setBooksFromSearch } from '../../redux/SearchResult'
import { useDeleteBookMutation } from '@/backend/rtk query/TollkitQueries'
import { supabase } from '@/backend/database/connectDatabase'

import Icon from 'react-native-vector-icons/FontAwesome'

import deleteBookStyles from '../../../styles/admin/Deletebook'
import SearchBookStyles from '../../../styles/admin/Searchbook'
import SucessLoadingModal from '@/src/sharedComponets/Sucess&LoadingModal'

const Deletebook = () => {

      const deleteId=useSelector((state)=> state.deleteId.deleteId)
      const dispatch=useDispatch()
      const searchValue=useSelector((state)=> state.deleteSearchValue.searchValue)
      const SearchedBooks=useSelector((state)=>state.searchedBooks.booksFromSearch)
      const deleteLoad = useSelector((state) => state.deleteSuccessLoad.loading);
      const deleteSuccess = useSelector((state) => state.deleteSuccessLoad.success);

      const [searchNotFound, setSearchNotFound]=useState(false)
      const [hasSearched, setHasSearched] = useState(false);
      const [display,setDisplay]=useState(false)

      const [searchBook,{data,isLoading, isSuccess}]=useSearchBookMutation()
      //THIS IS THE CODE FOR CONTROLING THE SCREEN BEHAVIOUR WHEN USER IS SCROLLING
      const {scrollWidthEnabled, handleContentWidthSizeChange}=useContentWidthSizeChange()
     //THIS USE STATE CONTROLS CURRENT STATE OF YOUR SEARCHVALUE
      
      
      /*THIS FUNCTION OR QUERY FROM RTK-QUERY WHICH RETURNS THE DATA OR MESSAGE FROM THE SERVER
        OR IF THERRE WAS AN ERROR IS THE DATA YOU SEN TO SERVER A SUCCESS OR WHAT */
      
      
      //THIS VARIAABLE HOLDS THE SEARCH RESULTS WHICH YOU ARE STORING IN REDUX STORE
      

      /* THIS PART CHECKS IF THE SEARCHEDBOOKS WHICH CONTAINS THE RESULTS FROM YOUR SEARCH IT CHECKS IF IT
       IS AN EMPTY ARRAY IF IT SO SETS THE SEARCH NOT FOUND STATE TO TRUE WHICH WE WILL USE TO RENDER A TEXT
        STATING NO SEARCH RESULTS WERE FOUND */
      
      

      useEffect(() => {
         if (!searchValue.trim()) {
            setSearchNotFound(false);
            setHasSearched(false);
         } else if (hasSearched) { 

            if (SearchedBooks && Array.isArray(SearchedBooks.data)) {
               if (SearchedBooks.data.length === 0) {
                  setSearchNotFound(true);
               } else {
                  setSearchNotFound(false);
               }
            }

         }
      }, [SearchedBooks, searchValue, hasSearched])

      /*THIS FUNCTION HANDLES YOUR SEARCH ACTION WHEN USER SEARCHES FOR SOMETHING IT WILL BE STORED
       IN THE SEARCHVALUE STATE THEN PASSED ON TO  YOUR SERVER */
      const handleSearch=async()=>{
         
             if(searchValue && searchValue.trim()){
               try{
                 
                  await searchBook({searchQuery:searchValue})
                  setHasSearched(true)
               }catch(error){
                  console.log(error)
                  setHasSearched(false);
               }  
             }else{
                 console.log("cant search empty string")
                 dispatch(setBooksFromSearch({ data: [] }));
             }         
             
      }
     
      //THIS HOLDS OR STORES THE ISD OF THE ITEM OR BOOK YOU WANT TO DELETE WHICH YOU ARE STORING IN THE REDUX STORE
     
      
      /* THIS FUNCTION DOES 2 FUNCTINALITIES
       1. IT SETSTHE MODAL VALUE YOU ARE STORING IN YOUR TO TRUE SO THAT THE THE DELTECONFIRMATION MODAL APPEARS
       2. IT SETS THE DELETE ID YOU STORE IN YOUR REDUX TO THE ID OF THE CURRENT BOOK WHICH YOU RECENTLY CLICKED THE DELETE BUTTON OFF */
      const handleDisplayDeleteModal=(id, uri)=>{
         dispatch(setModalValue(true))
         dispatch(setDeleteId(id))
         dispatch(setDeleteUri(uri))
         
      }

      /* SINCE WE ARE STORING THE RESULTS SEARCHED DATA IN REDUX STORE WE FIRST CHECK IF THE SERVER HAS SENT THE DATA
       YET IF SO WE SET OUR REDUX STATE TO THIS SEARCH RESULTS */

              
      useEffect(()=>{
         if(data){
            dispatch(setBooksFromSearch(data))
         }
      }, [data])
      
      useEffect(() => {
      if (deleteLoad || deleteSuccess) {
          setDisplay(true);
    } else {
    setDisplay(false);
  }
   }, [deleteLoad, deleteSuccess]);

     

        
     
  return (<>

        {display && (<SucessLoadingModal isLoading={deleteLoad} isSuccess={deleteSuccess} text='deleted'/>)}

       <Text style={deleteBookStyles.deleteBookText}>DELETE BOOK</Text>
  
            <View style={deleteBookStyles.deleteBookContainer}>

                     <View style={deleteBookStyles.deleteBookSearchContainer}>

                        <TextInput 
                        placeholder='Search for book by title or isbn ' 
                        style={deleteBookStyles.deleteBookSearchInput}
                        value={searchValue}
                        onChangeText={(text)=>{
                           dispatch(setDeleteSearch(text))
                           if (text.trim() === '') {
                              dispatch(setBooksFromSearch({ data: [] })); // <<< CLEAR IMMEDIATELY ON EMPTY INPUT
                            } }
                        }
                        />

                           <TouchableOpacity style={deleteBookStyles.deleteBookIconContainer} onPress={handleSearch} >
                                    {isLoading ? (
                                    <ActivityIndicator size="small" color="#000" />  
                                          ) : (
                                          <Icon name="search" style={deleteBookStyles.deleteBookSearchIcon} /> 
                                    )}
                           </TouchableOpacity>

                     </View>
              {searchNotFound && (<Text style={deleteBookStyles.searchNotFoundText}>NO RESULTS FOR THIS SEARCH</Text>)}
              <FlatList
               data={SearchedBooks?.data}
               keyExtractor={(item)=> item.id}
               horizontal
               contentContainerStyle={{ paddingRight: "20%" }}
               renderItem={({item})=>(
              

               <View style={deleteBookStyles.deleteBookTemplateContainer}>
               <View style={deleteBookStyles.deleteBookTemplate}>
                  <View style={deleteBookStyles.deleteBookImageFigure} >

                   <Image source={{uri:`${item.imageUri}`}} 
                   style={deleteBookStyles.deleteBookImage}
                   />

                  </View>
                  <View style={deleteBookStyles.deleteBookInformationContainer}>
                     <Text numberOfLines={1} ellipsizeMode="tail"> {item.title}</Text>
                     <Text> {item.authors} </Text>
                     <Text> {item.price}</Text>
                     <Text>{item.category}</Text>
                     <Text>Quantity: {item.quantity}</Text>
                  </View>
               </View>
               <View style={deleteBookStyles.deleteBookDeleteButtonContainer}>
                  <TouchableOpacity style={deleteBookStyles.deleteBookDeleteButton} onPress={()=>handleDisplayDeleteModal(item.id, item.imageUri)}>
                     <Text style={deleteBookStyles.deleteButtonText}>DELETE BOOK</Text>
                  </TouchableOpacity>
               </View>
            </View> )}
            
            /> 
   
               
               
            

            </View>
  

  </>)
} 

  
  
  
  export default Deletebook; 
  


