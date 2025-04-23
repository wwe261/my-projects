 import {supabase} from './connectDatabase.js'

 export const addBook=async(Title,Isbn,Category,Price)=>{
    try{
        const {data,error}=await supabase.from('Books')
        .insert({
           title:Title,
           isbn:Isbn,
           category:Category,
           price:parseFloat(Price)

        })
        
        if (error) {
            console.error('Insert Error:', error);
          } else {
            console.log('Insert Success:', data);
          }

    }catch(err){
            console.log(err)
    }
 }