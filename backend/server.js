import express from 'express'
import { addBook, addBookCover } from './database/Addbook.js'
import { searchBook } from './database/SearchForBook.js'
const app=express()



app.use(express.urlencoded({extended:false}))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: false, limit: '10mb' }));
app.get('/', (req,res)=>{
    res.send("hello")
})  

app.post('/books/add',(req,res)=>{
    const{bookTitle,isbn,category,price, authors,image}=req.body
    console.log(req.body)
try {

    // addBook(bookTitle,isbn,category,price, authors)
     addBookCover(image)
    res.status(201).json({ message: 'Book added successfully!' });

  } catch (error) {

    res.status(500).json({ message: 'Internal Server Error' });

  }
})   

app.post('/books/search', async(req,res)=>{
  const{searchQuery}=req.body
  try{
   
    const data=await searchBook(searchQuery)
    console.log(data)
    res.status(201).json({data:data, message: 'search successfull' });
  }catch(err){
    res.status(500).json({ message: 'Internal Server Error' });
  }
})

app.listen(5000,"0.0.0.0",()=>{console.log('server is listening on port...')})