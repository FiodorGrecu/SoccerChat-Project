import React from 'react';
import { Route } from 'react-router-dom';
// import HomePage from '.components/HomePage';
import Fixtures_Games from '.components/Fixtures_Games';
import Game from '.components/Game';
// import App from './App';


export default function Router () {
    return (
        <div>
            {/* <Route path="/home" component={HomePage}/> */}
            <Route path="/fixtures" component={Fixtures_Games}/>
            <Route path="/game" component={Game}/>
        </div>
        )
        
};