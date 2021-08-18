import React,{useContext} from 'react'
import AuthContext from './context/AuthContext'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Navbars from './components/layout/Navbar'
import Customer from './components/customer/Customer'

export default function Router() {
    const { loggedIn } = useContext(AuthContext)
    return (
        <BrowserRouter>
        <Navbars/>
        <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        {loggedIn === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
        {loggedIn === true && (
          <>
            <Route path="/customer">
              <Customer></Customer>
            </Route>
          </>
        )}
             <Route path='*'>
                <div>404</div>
             </Route>
      </Switch>
        {/* <Switch>
            <Route exact path='/'>
                <div>Home</div>
            </Route>
            <Route path='/register'>
                <div>Register</div>
                <Register/>
            </Route>
            <Route path='/login'>
                <div>Login </div>
                <Login/>
            </Route>
            <Route path='/customer'><div>customer</div></Route>
           
        </Switch> */}
        </BrowserRouter>
    )
}
