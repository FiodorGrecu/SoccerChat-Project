import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Chart from "react-apexcharts";
import Divider from '@material-ui/core/Divider';
import ChatSection from './ChatSection';
import { icons } from 'react-icons/lib';
import StatsHeader from './StatsHeader';

const useStyles = makeStyles((theme) => ({

  scoreSheet:{
    width: '98%',
    height: '15%',
    backgroundColor: 'black',
    margin: '1%',
    position: 'relative',
  },


}));

export default function CenteredGrid(props) {
  const classes = useStyles();


  const [fixture, setFixture] = useState({});
  const { gameNum } = useParams();

  const unixTimestamp = 1604752200;

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

  const gameDate = fixture.fixture && fixture.fixture.date;
  
  const leagueName = fixture.league && fixture.league.name;
  const leagueLogo = fixture.league && fixture.league.logo;

  const venue = fixture.lineups && fixture.fixture.venue.name;

  const date = fixture.fixture && fixture.fixture.date;

console.log(fixture)
  return (
    <div style={{display:"flex",backgroundColor:'#EAF0F7' }} >
            <StatsHeader/>
        {/* <div style={{width:'30%', height:'1100px' }} >
                <ChatSection gameId={gameNum}/>
        </div> */}
    </div>
  );
}

