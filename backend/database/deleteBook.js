import { supabase } from "./connectDatabase.js";
import {useDeleteBookMutation,useAddBooksMutation} from '../rtk query/TollkitQueries.js'
export const deleteBook=async(id)=>{
   
    try{
        const { data,error } = await supabase
          .from('Books')
          .delete()
          .eq('id', id).
          select() 
          
          if (error) {
            console.log('Error deleting book:', error);
          } else {
            console.log('Book deleted:', data); // Log to confirm the deletion
          }
    }catch(error){
        console.log(error)
    }
}