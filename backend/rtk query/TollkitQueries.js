 import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 export const productsApi=createApi({
    reducerPath:"books",
    baseQuery:fetchBaseQuery({baseUrl: "http://10.31.128.105:5000/"}),

    endpoints:(builder)=>({

        addBooks:builder.mutation({
            query:(addnewBook)=>({
                url:'/books/add',
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:addnewBook
            })
        
                               }),
            searchBook:builder.mutation({
            query:(searchBook)=>({
                url:'/books/search',
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:searchBook
            })
            
                                      })



    }) 
})

 export const {useAddBooksMutation,useSearchBookMutation}=productsApi