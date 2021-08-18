import axios from 'axios'
import React,{useState} from 'react'

export default function CustomerForm({getCustomer}) {
    const [name, setname] = useState("")
    async function AddCustomer(e)
    {   try{
        const custData={
            name
        }
        e.preventDefault()
        await axios.post('http://localhost:5000/customer',custData).then(response=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err.response.data)
        })
        getCustomer()

    }catch(err){
        console.log(err)
    }
        
       
    }
    return (
        <div>
           <form onSubmit={AddCustomer}>
             <input type="text" onChange={(e)=>{setname(e.target.value)}} value={name} />  
             <button type="submit">Add</button>
            </form> 
        </div>
    )
}
