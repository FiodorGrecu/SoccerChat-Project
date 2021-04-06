import React, { useState, useEffect } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import Game from './Game';
import Upcoming_OneGame from './Upcoming_OneGame';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';

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
  
    setTimeout(gameDetails, 1000);

  }, [gameNum] )

  const gameStatus = fixture.fixture && fixture.fixture.status.short;
  
  if (gameStatus === 'NS') {
    return <Upcoming_OneGame fixture={fixture}/>
  } else if (gameStatus === undefined) {
    return (
      <div  style={{}}>
      <div style={{display:'flex'}}>
        <SportsSoccerIcon className={"Icon"} 
          style={{fontSize:'50px', marginLeft:'50%', height:'40px',
          marginTop:'60px', color:"#516290", marginTop:'300px'}}/> 
      </div>
      </div>)
  } else {
    return <Game fixture={fixture}/>
      }
}
