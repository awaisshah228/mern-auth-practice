import React,{useContext, useState} from 'react'
import axios from 'axios'
import AuthContext from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'

export default function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const {getLoggedIn}=useContext(AuthContext)
    const history=useHistory()
    async function login(e){
        e.preventDefault()
        try{
            const loginData={
                email,
                password
            }
            await  axios.post('http://localhost:5000/auth/login',loginData).then(response=>{
                console.log(response)
            }).catch((err)=>{
                console.log(err.response.data)
            })
            await getLoggedIn()
            history.push('/')
            
        }
        catch(err){
         console.log(err)   
        }
    }
    return (
        <div>
            <h1>Login Componet</h1>

            <form onSubmit={login}> 
                
                <input type="email" placeholder="email" onChange={(e)=>{setemail(e.target.value)}} value={email}/> <br /><br />
                <input type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}} value={password} /><br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
