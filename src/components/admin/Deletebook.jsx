import { View, Text, TextInput, Image, TouchableOpacity, ScrollView,TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native'
import { useContentWidthSizeChange } from '@/src/sharedFunctions/ContentSizeChange'
import { useState, useEffect, useRef } from 'react'

import { useSearchBookMutation } from '@/backend/rtk query/TollkitQueries'


import Icon from 'react-native-vector-icons/FontAwesome'
import deleteBookStyles from '../../../styles/admin/Deletebook'

import SearchBookStyles from '../../../styles/admin/Searchbook'


const Deletebook = () => {
      const {scrollWidthEnabled, handleContentWidthSizeChange}=useContentWidthSizeChange()
      
 
         useEffect(()=>{
         console.log(searchValue)
         }, [searchValue])


      const [searchValue, setSearchValue]=useState(null)
      const [searchBook,{data,isLoading, isSuccess}]=useSearchBookMutation()

      useEffect(()=>{
         console.log(data)
         }, [data])
      
      const handleSearch=async()=>{
         
             if(searchValue && searchValue.trim()){
               try{
                 
                  await searchBook({searchQuery:searchValue})
               }catch(error){
      
               }  
             }else{
                 console.log("cant search empty string")
             }
       
         
      }



  return (<>
  
       <Text style={deleteBookStyles.deleteBookText}>DELETE BOOK</Text>
  
            <View style={deleteBookStyles.deleteBookContainer}>

                     <View style={deleteBookStyles.deleteBookSearchContainer}>

                        <TextInput 
                        placeholder='Search for book by title or isbn ' 
                        style={deleteBookStyles.deleteBookSearchInput}
                        onChangeText={(text)=>setSearchValue(text)}
                        />

                           <TouchableOpacity style={deleteBookStyles.deleteBookIconContainer} onPress={handleSearch} >
                                 <Icon name="search" style={deleteBookStyles.deleteBookSearchIcon}/>
                           </TouchableOpacity>

                     </View>

           {/*<ScrollView 
                  style={deleteBookStyles.deleteBookSectionContainer}
                  horizontal
                  onContentSizeChange={handleContentWidthSizeChange}
                  scrollEnabled={scrollWidthEnabled}
                  contentContainerStyle={{paddingRight:"20%"}}
            >   </ScrollView>*/ }

              <FlatList
             data={data?.data}
             keyExtractor={(item)=> item.id}
             horizontal
             contentContainerStyle={{ paddingRight: "20%" }}
             renderItem={({item})=>(

               <View style={deleteBookStyles.deleteBookTemplateContainer}>
               <View style={deleteBookStyles.deleteBookTemplate}>
                  <View style={deleteBookStyles.deleteBookImageFigure} >
                        <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={deleteBookStyles.deleteBookImage}/>
                  </View>
                  <View style={deleteBookStyles.deleteBookInformationContainer}>
                     <Text> {item.title}</Text>
                     <Text> {item.authors} </Text>
                     <Text> {item.price}</Text>
                     <Text>{item.category}</Text>
                     <Text>Quantity: {item.quantity}</Text>
                  </View>
               </View>
               <View style={deleteBookStyles.deleteBookDeleteButtonContainer}>
                  <TouchableOpacity style={deleteBookStyles.deleteBookDeleteButton}>
                     <Text style={deleteBookStyles.deleteButtonText}>DELETE BOOK</Text>
                  </TouchableOpacity>
               </View>
            </View> )}
            
            /> 
   
               
               
            

            </View>
  

  </>)
} 

  
  
  
  export default Deletebook;
  


