import express from 'express'
import { addBook } from './database/Addbook.js'

const app=express()



app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("hello")
})

app.post('/books/add',(req,res)=>{
const{bookTitle,isbn,category,price}=req.body
console.log(req.body)
try {
    addBook(bookTitle,isbn,category,price)
    res.status(201).json({ message: 'Book added successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
})   

app.listen(5000,"0.0.0.0",()=>{console.log('server is listening on port...')})