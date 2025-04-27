 import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 export const productsApi=createApi({
    reducerPath:"books",
    baseQuery:fetchBaseQuery({baseUrl: "http://10.31.189.231:5000/"}),

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
            
                                      }),
            deleteBook:builder.mutation({
                query:(id)=>({
                    url: `/book/${id}`,
                    method:"DELETE"
                })
            })
            



    }) 
})

 export const {useAddBooksMutation,useSearchBookMutation, useDeleteBookMutation}=productsApi