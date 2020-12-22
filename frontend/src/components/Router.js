import React from 'react';
import { Route, useParams } from 'react-router-dom';
import HomePage from '.components/HomePage';
import FixturesGames from '.components/Fixtures_Games';
import Game from './Game';
import TopScorers from '.components/TopScorers';
import LogIn from '.components/LogIn';
import SignUp from '.components/SignUp';
import Table from '.components/Table';
import Chat from '.components/Chat';
import Matches from '.components/Matches';
import Statistics from '.components/Statistics';
import Events from '.components/Events';

export default function Router () {
    return (
        <div>
            <Route path="/home" component={HomePage}/>
            <Route path="/fixtures" component={FixturesGames}/>
            {/* <Route path="/game" component={Game}/> */}
            {/* Line 21 */}
            {/* <Route path="/matches" component={Matches}/> */}
            <Route path="/game/:id" component={Game}/>
            <Route path="/games" component={ExampleCompnents}/>
            <Route path="/topscorers" component={TopScorers}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/table" component={Table}/>
            <Route path="/chat" component={Chat}/>
            <Route path="/statistics" component={Statistics}/>
            <Route path="/events" component={Events}/>
        </div>
        )
        
};
