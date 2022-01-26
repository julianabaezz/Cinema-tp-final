import React from 'react';
import './App.css';
import './pages/Home/home.css'
import './pages/Login/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, Login, Signup } from './pages';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return(
    <BrowserRouter> 
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/' component={Home}/>
      </Switch>
    </BrowserRouter> 

  )
}

export default App;
