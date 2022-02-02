import React from 'react';
import './App.css';
import './pages/Home/home.css'
import './pages/Login/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, Login, Signup, Admin, Detail, Movies, Series, Users } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return(
    <Router> 
      <Switch>
        <Route path='/admin' component={Admin}/>
        <Route path='/detail' component={Detail}/>
        <Route path='/movies' component={Movies}/>
        <Route path='/login' component={Login}/>
        <Route path='/series' component={Series}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/users' component={Users}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Router> 

  )
}

export default App;
