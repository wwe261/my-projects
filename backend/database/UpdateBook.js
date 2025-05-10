 import { supabase } from "./connectDatabase.js";
 /*export const updateBook=async(image,authors,title,category,id,price,isbn,bucket_path)=>{
  
    try{ 
        console.log(id)
        //await updateBookCover(image, bucket_path)
        const { data, error } = await supabase
        .from('Books')
        .update({ title: title, isbn:isbn,authors:authors,category:category, price:parseFloat(price) })
        .eq('id', id);

         if (error) {
            console.error('Update error:', error);
          } else {
            console.log('Updated row:', data);
          }  

    }catch(error){
        console.log(error)
    }
 }

 const updateBookCover=async(image, path)=>{
  

  if(image){
   const cleanStr = image.replace(/\s/g, '');

    if(/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(cleanStr)){
      
      
      try{
        const file = Buffer.from(image, 'base64');
        const { data, error } = await supabase.storage
        .from('book-cover')
        .upload(path, file, {
          upsert: true, 
        });
      
      if (error) {
        console.error('Upload error:', error.message);
      } else {
        console.log('Image updated successfully:', data);
      }
      
       }catch(error){
        console.log(error)
       }
    }
  }
  

    

   
 } */
/*
 export const updateBook = async (id, title, isbn, authors, price, category, image, bucket_path) => {
  try {
    let imageUri = null;

    // Check if the image is base64 (new upload) or existing
    const isBase64 = /^data:image\/[a-z]+;base64,/.test(image);

    if (isBase64) {
      const base64Data = image.split(',')[1]; // remove data URI prefix
      const file = Buffer.from(base64Data, 'base64');
      
      const { data: imgData, error: imgError } = await supabase.storage
        .from('book-cover')
        .upload(bucket_path, file, {
          contentType: 'image/png',
          upsert: true,
        });

      if (imgError) {
        console.error('Image upload error:', imgError.message);
      } else {
        const { data: publicUrlData } = supabase.storage
          .from('book-cover')
          .getPublicUrl(bucket_path);

        imageUri = publicUrlData.publicUrl;
      }
    } else {
      imageUri = image; // it's already a URL
    }

    // Now update the book row
    const { data, error } = await supabase
      .from('Books') // Make sure 'Books' is correct
      .update({
        title,
        isbn,
        authors,
        category,
        price: parseFloat(price),
        imageUri: imageUri, // assuming your column is called `imageUri`
      })
      .eq('id', id);

    if (error) {
      console.error('DB update error:', error);
    } else {
      console.log('Book updated:', data);
    }
  } catch (error) {
    console.log('Server error:', error);
  }
}; */
/*
export const updateBook = async (id, title, isbn, authors, price, category, image, bucket_path) => {
  try {
    let imageUri = null;

    // Check if the image is a URL (already uploaded)
    const isUrl = /^https?:\/\//.test(image);

    if (!isUrl) {
      // assume it's raw base64 data (no prefix)
      const file = Buffer.from(image, 'base64');

      const { data: imgData, error: imgError } = await supabase.storage
        .from('book-cover')
        .upload(bucket_path, file, {
          contentType: 'image/png',
          upsert: true,
        });

      if (imgError) {
        console.error('Image upload error:', imgError.message);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from('book-cover')
        .getPublicUrl(bucket_path);

      imageUri = publicUrlData.publicUrl;
    } else {
      imageUri = image; // already a public URL
    }

    const { data, error } = await supabase
      .from('Books')
      .update({
        title,
        isbn,
        authors,
        category,
        price: parseFloat(price),
        imageUri,
      })
      .eq('id', id);

    if (error) {
      console.error('DB update error:', error);
    } else {
      console.log('Book updated:', data);
    }
  } catch (error) {
    console.log('Server error:', error);
  }
}; */

export const updateBook = async (id, title, isbn, authors, price, category,image, bucket_path) => { 
  try {
     let imageUrii=null

     if(image){

     let isUrl=/https:\/\//.test(image)
     if(!isUrl){
        
        const { data: storageData, error: storageError } = await supabase
            .storage
            .from('book-cover')
            .remove([bucket_path]);
      
          if (storageError) {
            console.log('Error deleting image:', storageError);
          
          }else{ 
              console.log('ImageData deleted', storageData)
          }


          const buffer=Buffer.from(image, 'base64')
          const fileName = `book_cover_${Date.now()}.png`;

            const { data, error } = await supabase.storage.from('book-cover')
              .upload(fileName, buffer, {
                contentType: 'image/png',  
                cacheControl: '3600',
                upsert: true,
              });
        
            if (error) {
              console.error('Upload error:', error);
              return null;
            } else {
              console.log('Upload success:', data);
        
              // Now generate the public URL
              const { data: publicUrlData } = supabase.storage.from('book-cover').getPublicUrl(fileName);

              imageUrii=publicUrlData.publicUrl
            }

     }else{
      imageUrii=image
     }
     
     } 
    
    
    
    // Step 4: Update the book record in the database
    const { data, error } = await supabase
      .from('Books')
      .update({
        title,
        isbn,
        authors,
        category,
        price: parseFloat(price),
        imageUri:imageUrii,
      })
      .eq('id', id);

    if (error) {
      console.error('DB update error:', error);
    } else {
      console.log('Book updated:', data);
    }

  } catch (error) {
    console.log('Server error:', error);
  }
};


