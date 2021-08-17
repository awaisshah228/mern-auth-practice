import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Navbars from './components/layout/Navbar'

export default function Router() {
    return (
        <BrowserRouter>
        <Navbars/>
        <Switch>
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
            <Route path='*'>
                <div>404</div>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}
