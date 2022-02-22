import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import Game from './components/Game';
import FixtureGames from './components/Fixtures_Games';
import TopScorers from './components/TopScorers';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Table from './components/Table';
import Matches from './components/Matches';
import Footer from './components/Footer';
import ChatSection from'./components/ChatSection';
import Statistics  from './components/Statistics';
import Events  from './components/Events';
import H2H from './components/H2H';
import AllUpcomingFixtures from './components/AllUpcomingFixtures';
import AllPastFixtures from './components/AllPastFixtures';
import TableView from './components/TableView';
import GameByStatus from  './components/GameByStatus';
import LiveGames from './components/LiveGames';


function App() {
  return (
    <div >
      <BrowserRouter>
        <header >
          <div>
            <NavBar/>
            {/* <NavBar2/> */}
          </div>
        </header>

        <Route path='/home'>
          <HomePage/>
        </Route>

        <Route path='/game/:gameNum'>
          {/* <Game/> */}
          <GameByStatus />
        </Route>

        <Route path='/fixtures'>
          {/* Matches COMPONENT */}
          <FixtureGames/>  
        </Route>

        <Route path='/topscorers'>
          <TopScorers/>            
        </Route>

        <Route path='/statistics'>
          <Statistics/>           
        </Route>

        <Route path='/events'>
          <Events/>           
        </Route>

        <Route path='/login'>
          <LogIn/>
        </Route>

        <Route path='/signup'>
          <SignUp/>
        </Route>

        <Route path='/table'>
          <Table/>
        </Route>

        <Route path='/chat'>
          <ChatSection />
        </Route>

        <Route path='/h2h'>
          <H2H/>
        </Route>
       
        <Route path='/upcoming_fixtures'>
          <AllUpcomingFixtures/>
        </Route>

        <Route path='/past_fixtures'>
          <AllPastFixtures/>
        </Route>

        <Route path='/table_view'>
          <TableView/>
        </Route>

        <Route path='/live_games'>
          <LiveGames/>
        </Route>

      <footer>
        <div>
          <Footer/>
        </div>
      </footer>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
