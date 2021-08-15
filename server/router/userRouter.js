const router=require('express').Router()
const user=require('../model/userModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
// register
router.post('/',async (req,res)=>{
    try{
        const {email,password,passverify}=req.body
        //validation
        if(!email|| !password || !passverify){
            return res.status(400).json({error:"Enter Missing Field"})
        }
       
        if(password.length<6){
            
            return res.status(400).json({error :"Password lenght must be greater than 6 chracter"})
        }
        if(password!=passverify){
            return res.status(400).json({error :"Enter verify pass"})

        }
        const existingUser=await user.findOne({email})
        if(existingUser){
            return res.status(400).json({
                error: "Email Already register"
            })
        }
        // hash password
        const salt=await bcrypt.genSalt()
        const passwordHash=await bcrypt.hash(password,salt)
        
        //save in database
        const newUser=new user({
            email,passwordHash
        })
        const saveUser=await newUser.save()
        // login
        //sign token
        const token=jwt.sign({
            user :saveUser._id
        },process.env.JWT_SECRET)
        console.log(email)
        console.log(token)

        // send token
        res.cookie("token",token,{
            httpOnly: true, 
        }).send()
        
        
        
    }
    catch(err){
        console.error(err)
        res.status(500).send()
    }
    
})
module.exports=router