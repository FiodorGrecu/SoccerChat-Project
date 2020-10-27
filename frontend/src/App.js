import React from 'react';
// import HomePage from './HomePage';
import './App.css';
import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import HomePage from '.components/HomePage';
// import Game from 'components/Game';


function App() {
  return (
    <div >
      <BrowserRouter>
        <header >
          <div>

            <NavBar/>
            <NavBar2/>
      
         
          </div>
        </header>
          {/* <Game/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
