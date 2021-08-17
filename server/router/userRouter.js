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
        }).json({message :"Done"}).send()
        
        
        
        
        
    }
    catch(err){
        console.error(err)
        res.status(500).send()
    }
    
})
router.post('/login',async (req,res)=>{
    try{
        const {email,password}=req.body
        //validation
        if(!email|| !password ){
            return res.status(400).json({error:"Enter Missing Field"})

        }
        const existingUser=await user.findOne({email})
        if(!existingUser){
            return res.status(401).json({
                error: "Wrong email or pass"
            })


        }
        //  checking password
        const passwordCorrect=await bcrypt.compare(password,existingUser.passwordHash)

        if(!passwordCorrect){
            return res.status(401).json({
                error: " pass"
            })
        }
        
        //sign token
        const token=jwt.sign({
            user :existingUser._id
        },process.env.JWT_SECRET)
        console.log(email)
        console.log(token)

        // send token
        res.cookie("token",token,{
            httpOnly: true, 
        }).send()
        console.log("You  logged in")
        
    }catch(err){
        console.error(err)
       return res.status(500).send()

    }

})
router.get('/logout',(req,res)=>{
    res.cookie("token","",{
        httpOnly: true,
        expires : new Date(0)
    }).send()
})
router.get('/loggedIn',(req,res)=>{
    try{
        const token=req.cookie.token
        if(!token) return res.json(false)
        jwt.verify(token,process.env.JWT_SECRET)
        res.send(true)
    }catch(err){
        res.json(false)
    }
   
})
module.exports=router