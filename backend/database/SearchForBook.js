 import { supabase } from "./connectDatabase.js";
/*
 export const searchBook=async(searchTerm)=>{
    const { data, error } = await supabase
    .from('Books')
    .select('id, title, authors, category,price, quantity')
    .or(`title.ilike.%${searchTerm}%,isbn.ilike.%${searchTerm}%`);

  if (error) {
    console.error('Error searching books:', error);
    return [];
  }

  return data;
 }*/

  export const searchBook = async (searchTerm) => {
    // Clean the input
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();
  
    // Early return if search term is empty after trimming
    if (!trimmedSearchTerm) {
      return [];
    }
  
    try {
      const { data, error } = await supabase
        .from('Books')
        .select('id, title, authors, category, price, quantity, imageUri') // include imageUri if needed
        .or(
          `title.ilike.%${trimmedSearchTerm}%,isbn.ilike.%${trimmedSearchTerm}%`
        );
  
      if (error) {
        console.error('Error searching books:', error);
        return [];
      }
  
      // Optional: Sort results (optional for better UX)
      const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
  
      return sortedData;
    } catch (error) {
      console.error('Unexpected error during search:', error);
      return [];
    }
  };
  