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
// import Chat from './components/Chat';
import Table from './components/Table';
import Matches from './components/Matches';
import Footer from './components/Footer';
import ChatSection from'./components/ChatSection';
import Statistics  from './components/Statistics';
import Events  from './components/Events';

// import { LoaderProvider, useLoading, BallTriangle } from '@agney/react-loading';




function App() {

  // const { containerProps, indicatorEl } = useLoading({
  //   loading: true,
  // });

  return (

    <div >
    {/* <section {...containerProps}>{indicatorEl}</section>; */}
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

        <Route path='/game/:gameNum'>
          <Game/>
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
          <ChatSection/>
        </Route>

        {/* <Route path='/matches'>
          <Matches/>
        </Route> */}
      <footer>
        <div>
          <Footer/>
        </div>
      </footer>
        
      </BrowserRouter>
      
    </div>
  );
}

// ReactDOM.render(
//   <LoaderProvider indicator={<BallTriangle width="50" />}>
//     <App />
//   </LoaderProvider>
// );

export default App;
