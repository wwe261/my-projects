 import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 export const productsApi=createApi({
    reducerPath:"books",
    baseQuery:fetchBaseQuery({baseUrl: "http://10.31.151.216:5000/"}),
    endpoints:(builder)=>({

        addBooks:builder.mutation({
            query:(addnewBook)=>({
                url:'/books/add',
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:addnewBook
            })
        })



    })
 })

 export const {useAddBooksMutation}=productsApi