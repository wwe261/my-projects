 import { View, Text,TouchableOpacity } from 'react-native'
 import deleteConfirm from '../../styles/sharedComponents/deleteConfirmation'
 import { useSelector,useDispatch } from 'react-redux'
 import { useEffect } from 'react'

 import { setModalValue } from '../redux/deleteConfirmationModal'

 import { useDeleteBookMutation } from '@/backend/rtk query/TollkitQueries'
 import { setBooksFromSearch } from '@/src/redux/SearchResult'
 import { supabase } from '@/backend/database/connectDatabase'
 const DeleteConfirmation = ({text, deleteId}) => {

    
  
    const [deleteItem,{isLoading, isSuccess}]=useDeleteBookMutation()

    const dispatch=useDispatch()
    

    const handleDelete=async()=>{
       /*
        try{
            
          await deleteItem(deleteId).unwrap()
          if(isSuccess){
            dispatch(setModalValue(false))
          }
        }catch(error){
            console.log("networkking",error)
        } */

            try {
              const { data, error } = await supabase
                .from('Books')
                .delete()
                .eq('id', deleteId)
                .select()
          
              if (error) {
                console.log('Error deleting book:', error);
              } else {
                console.log('Book deleted:', data);
                dispatch(setModalValue(false));
                dispatch( setBooksFromSearch( SearchedBooks.data.filter(book=>book.id !== data.id)))
              }
            } catch (error) {
              console.log('Networking error:', error);
            } 
    }
  
    const SearchedBooks=useSelector((state)=>state.searchedBooks.booksFromSearch)
    useEffect(()=>{
      const subscription = supabase
      .channel('realtime-books')
      .on(
        'postgres_changes',
        {
          event: 'DELETE', 
          schema: 'public', 
          table: 'Books',
        },
        (payload) => {
          console.log('Book deleted:', payload.old);
          //dispatch( setBooksFromSearch( SearchedBooks.data.filter(book=>book.id !==  payload.old.id)))
        }
      )
      .subscribe();
   },[])
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