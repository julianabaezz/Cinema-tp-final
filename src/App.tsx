import React from 'react';
import './App.css';
import './pages/Home/home.css'
import './pages/Login/login.css'
import './components/layout/Layout/layout.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, Login, Signup, Admin, Detail, Movies, Series, Usuario } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UsersProvider } from './contexts';


function App() {
  
  return(
    <UsersProvider>
    <Router> 
      <Switch>
        <Route path='/admin' component={Admin}/>
        <Route path='/detail/:id' component={Detail}/>
        <Route path='/movies' component={Movies}/>
        <Route path='/login' component={Login}/>
        <Route path='/series' component={Series}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/users' component={Usuario}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
    </UsersProvider> 

  )
}

export default App;
