import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import LogOutBtn from '../auth/LogOutButton'


export default function Navbars() {
    const {loggedIn}=useContext(AuthContext)
    return (
        <>
        <Link to="/">Home</Link>    
        {
            loggedIn===false && (<>
                <Link to="/register">Register</Link>                
                 <Link to="/login">Login</Link>   
                </>)
        }  
        {
            loggedIn===true &&(<>
            <Link to="/customer">Customer</Link> 
            <br />
            <LogOutBtn />
            </>)
        }          
                     
                       
        </>
    )
}
