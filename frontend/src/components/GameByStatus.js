import React, { useState, useEffect } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {games as fixtures} from "./teams";
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import ChatSection from './ChatSection';
import { icons } from 'react-icons/lib';
import { grey } from '@material-ui/core/colors';
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import LineUps from './LineUps';
import GameSectionScoreCheet from './GameSectionScoreCheet';
import GameSectionScoreCheetBottomStats from './GameSectionScoreCheetBottomStats';
import GameSectionScoreCheetBottomVenue from './GameSectionScoreCheetBottomVenue';
import Events from './Events';
import StatsBar from './StatsTopBar';
import StatsBody from './StatsBody';
import StatsHeader from './StatsHeader';
import GameHeader from './GameHeader';
import UpcomingGameHeader from './UpcomingGameHeader';
import LeagueNameBar from './LeagueNameBar';
import Game from './Game';
import Upcoming_OneGame from './Upcoming_OneGame';



export default function CenteredGrid(props) {

  const [fixture, setFixture] = useState({});
  const { gameNum } = useParams();

  useEffect(() => {
    async function gameDetails() {
      const response = await fetch(`http://localhost:5000/api/one_game/${gameNum}`);
      const data = await response.json();
      console.log(data);
      if (data.fixtures) {
        console.log(data.fixtures.response || null)
        setFixture(data.fixtures.response[0] || {})
      };
    }
  
    gameDetails();

  }, [] )


  const gameStatus = fixture.fixture && fixture.fixture.status.short;
  
  if (gameStatus === 'NS') {
    return <Upcoming_OneGame fixture={fixture}/>
  } else {
    return <Game fixture={fixture}/>
  }

}
