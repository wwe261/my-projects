import { View, Text,TextInput, Image, ScrollView,TouchableOpacity, ActivityIndicator, FlatList} from 'react-native'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSearchForBookMutation } from '@/backend/rtk query/TollkitQueries'


import Icon from 'react-native-vector-icons/FontAwesome'
import {setSearchValue} from '../../redux/searchValue'
import SearchBookStyles from '../../../styles/admin/Searchbook'
import searchResultStyle from '@/styles/frontend/Searchresult'

const Searchbook = () => {
    
    const dispatch=useDispatch()

    const searchValue=useSelector((state)=> state.searchValue.searchValue)
    const [hasSearched, setHasSearched]=useState(false)
    const [searchResults, setSearchResults]=useState([])
    const [searchNotFound, setSearchNotFound]=useState(false)

    const[searchBook,{data,isLoading,isError}]=useSearchForBookMutation()

    

    useEffect(()=>{
        if(data){
            setSearchResults(data)
        }
    },[data])

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
             setSearchResults([])
        }                 
    }

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

       // console.log(searchResults)
     }, [searchResults, searchValue, hasSearched])

  return (<>
<Text style={SearchBookStyles.searchBookText}> SEARCH FOR A BOOK</Text>

    
    <View style={SearchBookStyles.searchBookContainer}>

        <View style={SearchBookStyles.searchBooksearchContainer}>

            <TextInput placeholder='Search for book ' 
                       style={SearchBookStyles.searchBooksearchInput}
                       value={searchValue}
                       onChangeText={(text)=>{
                                              dispatch(setSearchValue(text))
                                              if (text.trim() === '') {
                                                 setSearchResults([]); 
                                                } 
                       }}
                       />

                <TouchableOpacity style={SearchBookStyles.searchBookIconContainer} onPress={handleSearch}>
                    {isLoading ? (
                            <ActivityIndicator size="small" color="#000" />  
                            ) : (
                                <Icon name="search" style={SearchBookStyles.searchBookIcon} /> 
                    )}
                </TouchableOpacity>

         </View>
    <View><Text style={SearchBookStyles.searchBookByWhat}>(search by book title or isbn (!)...)</Text></View>
   
        <FlatList
         data={searchResults?.data}
         keyExtractor={(item)=> item.id}
         horizontal
         contentContainerStyle={{ paddingRight: "20%" }}
         renderItem={({item})=>(

            <View style={SearchBookStyles.searchBookTemplate}>
            <View style={SearchBookStyles.searchBookTemplateFigure}>
                <Image source={{uri : `${item.imageUri}`}} style={SearchBookStyles.searchBookTemplateImage} />
            </View>
            <View style={SearchBookStyles.searchBookInformationContainer}>
                <Text style={SearchBookStyles.searchBookInformationText}>{item.title}</Text>
                <Text style={SearchBookStyles.searchBookInformationText}> {item.price}</Text>
                <Text style={SearchBookStyles.searchBookInformationText}>BY: {item.authors}</Text>
                <Text style={SearchBookStyles.searchBookInformationText}>{item.category}</Text>
            </View> 
            </View> 
     )}
        
        />

   
</View> 
  </>)
}

export default Searchbook