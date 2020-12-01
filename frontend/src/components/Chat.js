import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { MdSend } from "react-icons/md";
// import Divider from 'material-ui/core/Divider';
// import Typography from 'material-ui/core/Typography';
import LogIn from './LogIn';
import Timestamp from 'react-time';
import Chat from './Chat'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'aliceblue',
    width: '100%',
  },

  button: {
    margin: theme.spacing(2),
    marginLeft: 1050, 
  },
  signOutButton: {
    position: "flex-end",
  },

  textbox: {
    marginTop: 10,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    paddingTop: 10,
    marginLeft: 150,
    
    width: 1000,
    height: 50,
    // background: "transparent 90%"
  }

}));

export default function UserChat() {
  const classes = useStyles();

  const gameId = 436;
  
  const [time, setTime] = useState("");
  const [username, setUserName] = useState("");
  // const [account_id, setAccountId] = useState("");
  const [account_id, setAccountId] = useState("");
  const [game_id, setGameId] = useState("");
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const [userData, setUserData] = useState({});

  async function sendToOutput() {
    // const Timestamp = timestamp;
    // const output = await 
    const data = JSON.stringify({
      'time': time,
      'text': text,
      'username': username,
      "account_id" : account_id,
      "game_id" : game_id,
      // console.log(data)
    })
    const configs = {
      method:"POST",
      body: data,
      headers: {"Content-Type": "application/json"}
    };

    const response = await fetch("http://localhost:5000/api/save_chat", configs)
    const userData = await response.json();
    


  }

  function logOut() {
    sessionStorage.clear();
  }

  const session_id = sessionStorage.getItem("session_id");
//   const [textInput, setTextInput] = useState("");
//   const [inputs, setInputs] = useState([]); 
  if (userData.session_id) {     
    sessionStorage.setItem("session_id", userData.session_id)
    return (
      <div>
        <button className={classes.signOutButton} onClick={logOut} >Log Out</button>
        
        <br/>
        <input  className={classes.textbox}>         
        </input>
        <br></br>
      {/* <input onChange={event => setTextInput(event.target.value)}/> */}

      {/* <p>{textInput}</p> */}
      <div className={classes.button}>
        <Button
            onClick={sendToOutput()}
            edge="end"
            variant="contained"
            color="primary"           
            endIcon={<MdSend>send</MdSend>}
            >   
        </Button>
        
      </div>   
    </div>
    );
  } else {
    return <LogIn/>
  }

}
