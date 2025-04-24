 import {supabase} from './connectDatabase.js'
 /*
 export const addBook=async(Title,Isbn,Category,Price,Authors)=>{
    try{
        const {data,error}=await supabase.from('Books')
        .insert({
           title:Title,
           isbn:Isbn,
           category:Category,
           price:parseFloat(Price),
           authors:Authors,
        })
        
        if (error) {
            console.error('Insert Error:', error);
          } else {
            console.log('Insert Success:', data);
          }


          const { data:f, error:fi } = await supabase
          .from('Books')
          .select('*');

          console.log(f)
    }catch(err){
            console.log(err)
    }
 }  */

    export const addBook = async (Title, Isbn, Category, Price, Authors) => {
      try {
        // First, check if the book already exists by its ISBN
        const { data: existingBook, error: fetchError } = await supabase
          .from('Books')
          .select('id, quantity') // Assuming there's a `quantity` column
          .eq('isbn', Isbn)
    
      
        if (fetchError) {
          console.error('Error fetching book:', fetchError);
          return;
        }
    
        if (existingBook && existingBook.length > 0){

          const book=existingBook[0]
          // If the book exists, increase the quantity by 1
          const { data, error } = await supabase
            .from('Books')
            .update({ quantity: book.quantity + 1 }) // Increase quantity by 1
            .eq('id', book.id) // Update the existing record
            .select()

          //THIS ERRORS THAT HELPS USNG DURIG DEBUGGING
          /*
          if (error) {
            console.error('Error updating book quantity:', error);
          } else {
            console.log('Quantity updated successfully:', data);
          } */
        } else {
          // If the book doesn't exist, insert a new record
          const { data, error } = await supabase.from('Books').insert({
            title: Title,
            isbn: Isbn,
            category: Category,
            price: parseFloat(Price),
            authors: Authors,
          });
          //ERRORS HELP US DURING DEBUGGING
          
          if (error) {
            console.error('Insert Error:', error);
          } else {
            console.log('Insert Success:', data);
          } 

        }
      } catch (err) {
        console.log(err);
      }
    };


    export const addBookCover=async(Image)=>{
      const buffer = Buffer.from(Image, 'base64');
       
        const {data,error}=await supabase.storage.from('book-cover')
                                  .upload(`book_cover${Date.now()}.png`, buffer,{
                                    //contentType: 'image/png', 
                                    cacheControl: '3600',
                                    upsert: true,
                                  })

                                  if (error) {
                                    console.error('Upload error:', error);
                                  } else {
                                    console.log('Upload success:', data);
                                  }
    }
    


    
    

