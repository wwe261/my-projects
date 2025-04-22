const express=require('express')
const app=express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("hello")
})

app.post('/books/add',(req,res)=>{
console.log(req.body)

})

app.listen(5000,"0.0.0.0",()=>{console.log('server is listening on port...')})