import React,{useContext, useState} from 'react'
import axios from 'axios'
import AuthContext from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'

export default function Register() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [passverify, setpassverify] = useState("")
    const {getLoggedIn}=useContext(AuthContext)
    const history=useHistory()

    async function register(e){
        e.preventDefault()
        try{
            const registerData={
                email,
                password,
                passverify
            }
            await  axios.post('http://localhost:5000/auth/',registerData).then(response=>{
                console.log(response)
            }).catch((err)=>{
                console.log(err.response.data)
            })
            await getLoggedIn()
            await history.push('/')
            
        }
        catch(err){
         console.log(err)   
        }
    }
    return (
        <div>
            <h1>Register a New Componet</h1>

            <form onSubmit={register}> 
                
                <input type="email" placeholder="email" onChange={(e)=>{setemail(e.target.value)}} value={email}/> <br /><br />
                <input type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}} value={password} /><br /><br />
                <input type="password" placeholder="Confirm Password" onChange={(e)=>{setpassverify(e.target.value)}} value={passverify} /><br /><br />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
