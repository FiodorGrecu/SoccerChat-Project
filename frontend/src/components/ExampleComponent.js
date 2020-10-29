import React, { useState } from 'react';
import games from "Teamgames";

export default function App() {
  const [fixtures, setFixtures] = useState(games);
  const [selection, setSelection] = useState(null);

  //TODO: function to update state
  function getFixtures() {
    // will perform a fetch() call to Flask
  }

  const output = fixtures.map(fixture => (
    <span>
      <div style={{"width": "50%"}}>
        <h3>{fixture.home.name}</h3>
        {/* <h4>{fixture.home.number}</h4> */}
      </div>
      <div style={{"width": "50%"}}>
        <h3>{fixture.away.name}</h3>
        {/* <h4>{fixture.away.number}</h4> */}
      </div>
    </span>
  ))

  return (
    <div>
      {output}
    </div>
  )
}
