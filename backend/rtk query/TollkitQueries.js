 import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 export const productsApi=createApi({
    reducerPath:"books",
    baseQuery:fetchBaseQuery({baseUrl: "http://10.31.182.0:5000/"}),

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
                url:'/books/search&delete',
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
            }),
            searchForBook:builder.mutation({
                query:(searchBook)=>({
                    url:'/books/search',
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:searchBook
                }),
                

            }),
            updateBook:builder.mutation({
                query:({id, updateBook})=>({
                    url:`/book/${id}`,
                    method:'PUT',
                    headers:{'Content-Type':"application/json"},
                    body:updateBook
                }),
                
            })
            



    }) 
})

 export const {useAddBooksMutation,
               useSearchBookMutation,
               useDeleteBookMutation,
               useSearchForBookMutation, useUpdateBookMutation}=productsApi