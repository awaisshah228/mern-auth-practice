// importing packages
const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv').config()

//initialization
const app=express()
const PORT=process.env.PORT || 5000

// DB connection
mongoose.connect(process.env.MDB_CONNECT,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Database Connected")
})
//  middleware
app.use(express.json())
app.use('/auth',require('./router/userRouter'))
//End Points
app.get('/',(req,res)=>{
    res.send(`Hello world`)
})

// running server
app.listen(PORT,()=>{
    console.log(`Hi Server started on Port ${PORT}`)
})
//proj=0: mongodb+srv://awaisshah228:Daanish#2280@cluster0.icksj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//proj=1: 