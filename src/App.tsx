import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './components';
import {Link} from 'react-router-dom';

function App() {
  return (
    <Layout> 
      
        <Link className="text-muted" to="https://v5.reactrouter.com/web/api/Link">
          holas
        </Link>
      
    
    </Layout>
  )
}

export default App;
