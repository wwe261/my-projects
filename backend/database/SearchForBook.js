 import { supabase } from "./connectDatabase.js";

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
 }