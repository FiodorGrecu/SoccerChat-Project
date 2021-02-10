import React, { useState, useEffect } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
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
  
    // gameDetails();

    setTimeout(gameDetails, 2000);


  }, [gameNum] )


  const gameStatus = fixture.fixture && fixture.fixture.status.short;
  
  if (gameStatus === 'NS') {
    return <Upcoming_OneGame fixture={fixture}/>
  } else {
    return <Game fixture={fixture}/>
  }

}
