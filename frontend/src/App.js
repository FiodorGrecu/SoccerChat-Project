import React from 'react';
// import HomePage from './HomePage';
import './App.css';
import NavBar from './components/NavBar';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import HomePage from '.components/HomePage';


function App() {
  return (
    <div >
      <BrowserRouter>
        <header >
          <NavBar/>
        
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
