import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import Game from './components/Game';
import FixtureGames from './components/Fixtures_Games';
import Scores from './components/Scores';
import LogIn from './components/LogIn'


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

        <Route path='/home'>
          <HomePage/>
        </Route>

        <Route path='/game'>
          <Game/>
        </Route>

        <Route path='/fixtures'>
          {/* Matches COMPONENT */}
          <FixtureGames/>  
        </Route>

        <Route path='/scores'>
          <Scores/>
        </Route>

        <Route path='/login'>
          <LogIn/>
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
