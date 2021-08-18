import React from 'react'

export default function CustomerList({customers}) {
    
    function renderCustomers() {
       return customers.map((customer,i)=>{
           return <li key={i}>{customer.name}</li>
       })
      }
    return (
        <div>
           <h1>Customer List</h1> 
           {renderCustomers()} 

        </div>
    )
}
