 import { View, Text,TouchableOpacity } from 'react-native'
 import deleteConfirm from '../../styles/sharedComponents/deleteConfirmation'
 import { useSelector,useDispatch } from 'react-redux'
 import { useEffect } from 'react'

 import { setModalValue } from '../redux/deleteConfirmationModal'

 import { useDeleteBookMutation } from '@/backend/rtk query/TollkitQueries'
 import { setBooksFromSearch } from '../redux/SearchResult'
 import { supabase } from '@/backend/database/connectDatabase'
 const DeleteConfirmation = ({text, deleteId, deleteUri}) => {

    
    const [deleteItem,{isLoading, isSuccess}]=useDeleteBookMutation()

    const dispatch=useDispatch()
    
    const handleDelete=async()=>{
  

            try {
              const { data, error } = await supabase
                .from('Books')
                .delete()
                .eq('id', deleteId)
                .select()
          
              if (error) {
                console.log('Error deleting book:', error);
              } else {
                dispatch(setModalValue(false));
                
                dispatch( setBooksFromSearch( {data: SearchedBooks.data.filter(book => book.id !== deleteId)}))
              }
            } catch (error) {
              console.log('Networking error:', error);
            } 
           
            const filePath =  deleteUri.substring(deleteUri.lastIndexOf('/') + 1);
            
            const { data: storageData, error: storageError } = await supabase
            .storage
            .from('book-cover')
            .remove([filePath]);
      
          if (storageError) {
            console.log('Error deleting image:', storageError);
          
          }


    }
  
    const SearchedBooks=useSelector((state)=>state.searchedBooks.booksFromSearch)
   
     return (<>
        <View style={deleteConfirm.containerWrapper}>
        <View style={deleteConfirm.container}>
            <View style={deleteConfirm.textWrapper}>
                <Text style={deleteConfirm.text}>Are you sure you want to delete this {text}</Text>
            </View>
            <View style={deleteConfirm.buttonsWrapper}>

                <TouchableOpacity style={deleteConfirm.cancel} onPress={()=> dispatch(setModalValue(false))}>
                    <Text style={deleteConfirm.buttonText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={deleteConfirm.delete} onPress={handleDelete} >
                    <Text style={deleteConfirm.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
          </>)
 }
 
 export default DeleteConfirmation