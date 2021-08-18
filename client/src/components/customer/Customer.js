import axios from 'axios'
import React, { useState,useEffect } from 'react'
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'

export default function Customer() {
    const [customers, setcustomers] = useState([])

    async function getCustomer(){
        const cusRes=await axios.get("http://localhost:5000/customer")
        setcustomers(cusRes.data)
    }
    useEffect(() => {

        getCustomer()
        
    }, [])
    return (
        <div>
           <h1>Hello World</h1>
           <CustomerForm getCustomer={getCustomer}/>
           <CustomerList customers={customers}/>
        </div>
    )
}
