import express from 'express'
import { addBook, addBookCover } from './database/Addbook.js'
import { searchBook } from './database/SearchForBook.js'
import { deleteBook } from './database/deleteBook.js'
import { updateBook } from './database/UpdateBook.js'

const app=express()


app.use(express.urlencoded({extended:false}))
app.use(express.json({ limit: '100mb' }))
app.use(express.urlencoded({ extended: false, limit: '100mb' }));

app.get('/', (req,res)=>{
    res.send("hello")
})  

app.post('/books/add',(req,res)=>{
    const{bookTitle,isbn,category,price, authors,image}=req.body
    console.log(req.body)
try {
    
    addBook(bookTitle,isbn,category,price, authors,image)
    res.status(201).json({ message: 'Book added successfully!' });

  } catch (error) {

    res.status(500).json({ message: 'Internal Server Error' });

  }
})   

app.post('/books/search&delete', async(req,res)=>{
  const{searchQuery}=req.body
  try{
   
    const data=await searchBook(searchQuery)
    res.status(201).json({data:data, message: 'search successfull' });
  }catch(err){
    res.status(500).json({ message: 'Internal Server Error' });
  }
})
 
app.post('/books/search',async(req,res)=>{

 const {searchQuery}=req.body
 console.log(req.body)
  try{
    const data=await searchBook(searchQuery)
    res.status(201).json({ data:data ,message: 'search successfull' });
  }catch(error){
    res.status(500).json({message: 'Internal Server Error'})
  }

})


app.delete('/book/:id', async(req,res)=>{
  const {id}=req.params
  console.log(id) 
  try{

     await deleteBook(id)
    res.status(201).json({ message: 'delete successfull' });
  }catch(error){
    console.log("network",error)
    res.status(500).json({ message: 'Internal Server Error' });
  }
})

app.put('/book/:id', async(req,res)=>{
    const {id}=req.params
    const {image,title,category,authors,price,bucket_path,isbn}=req.body
    console.log(req.body)
  
  try{
    
    await updateBook (id, title, isbn, authors, price, category, image, bucket_path)
    res.status(201).json({message: 'updateSuccessul'})
  }catch(error){
    console.log(error)
    res.status(500).json({message:"Internal Server Error"})
  }
})

app.listen(5000,"0.0.0.0",()=>{console.log('server is listening on port...')})