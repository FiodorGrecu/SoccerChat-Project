import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '.components/HomePage';
import FixturesGames from '.components/Fixtures_Games';
import Game from '.components/Game';
import Sores from '.components/Sores';
import LogIn from '.components/LogIn';
import SignUp from '.components/SignUp';
import Chat from '.components/Chat';
import Table from '.components/Table';


export default function Router () {
    return (
        <div>
            <Route path="/home" component={HomePage}/>
            <Route path="/fixtures" component={FixturesGames}/>
            <Route path="/game" component={Game}/>
            <Route path="/games" component={ExampleCompnents}/>
            <Route path="/scores" component={Scores}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/chat" component={Chat}/>
            <Route path="/table" component={Table}/>
        </div>
        )
        
};