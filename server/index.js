// importing packages
const express=require('express')

//initialization
const app=express()
const PORT=process.env.PORT || 5000

//End Points
app.get('/',(req,res)=>{
    res.send(`Hello world`)
})
// running server
app.listen(PORT,()=>{
    console.log(`Hi Server started on Port ${PORT}`)
})