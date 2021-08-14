import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import AuthContext from './context/AuthContext';
import ViewProduct from './components/products/ViewProduct';
import home from './components/auth/home';

export default function Router() {

const {loggedIn} = useContext(AuthContext);

    return (
        <BrowserRouter>
          <Navbar />
            <Switch>
            

                {
                    loggedIn === false && (<>

                    <Route exact path="/">
                    <Login />
                    </Route>
                    <Route exact path="/register">
                    <Register />
                    </Route>
                
                    </>
                    )}

                {
                    loggedIn === true && (<>

                <Route exact path="/home">
                    <home />
                    </Route>
                <Route path="/product">
                    <ViewProduct />
                </Route> 
                <Route path="/user">
                    <div>User</div>
                </Route> 
                 
                  </>  
            )}

                
            </Switch>
        </BrowserRouter>
            
        
    )
}
