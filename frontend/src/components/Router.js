import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '.components/HomePage';
import FixturesGames from '.components/Fixtures_Games';
import Game from '.components/Game';
import Scores from '.components/Scores';
import LogIn from '.components/LogIn';
import SignUp from '.components/SignUp';
import Table from '.components/Table';
import Chat from '.components/Chat';
import Matches from '.components/Matches';



export default function Router () {
    return (
        <div>
            <Route path="/home" component={HomePage}/>
            <Route path="/fixtures" component={FixturesGames}/>
            {/* <Route path="/game" component={Game}/> */}
            {/* Line 21 */}
            {/* <Route path="/matches" component={Matches}/> */}
            <Route path="/game/:gameNum" component={Game}/>
            <Route path="/games" component={ExampleCompnents}/>
            <Route path="/scores" component={Scores}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/table" component={Table}/>
            <Route path="/chat" component={Chat}/>
        </div>
        )
        
};