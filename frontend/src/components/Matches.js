import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'aliceblue',
    alignItems: 'flex-end' 
  },
  thebox1: {
    alignItems: 'center',
    justifySelf: 'flex-end',
    padding: 10,
  }
}));

export default function ListDividers() {
  const classes = useStyles();

  const [fixtures, setFixtures] = useState([]);
  const numberGames = 5;

  useEffect(() => {

    async function getFixtures() {
      const response = await fetch(`http://localhost:5000/api/last/${numberGames}`);
      const data =  await response.json();
      console.log(data.fixtures.api.fixtures)
      setFixtures(data.fixtures.api.fixtures)
    }
    getFixtures();
  }, [] )

  return (
    <Box className={classes.thebox1}>
        <List component="nav" className={classes.root} aria-label="mailbox folders" >
        <ListItem button>
            <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem button divider>
            <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
            <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem button>
            <ListItemText primary="Spam" />
        </ListItem>
        </List>
    </Box>
  );
}
