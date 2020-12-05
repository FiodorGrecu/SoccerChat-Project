import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { MdSend } from "react-icons/md";
// import Divider from 'material-ui/core/Divider';
// import Typography from 'material-ui/core/Typography';
import LogIn from './LogIn';
import Chat from './Chat'
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'aliceblue',
    width: '100%',

  },

  button: {
    margin: theme.spacing(1),
    marginLeft: 170, 
    marginTop: 2,
    width: 500,
  },

  signOutButton: {
    justifyContent: 'center',
    width: '100%',
    // marginLeft: 170, 
    borderRadius: 4,
    
  },

  input: {
    marginTop: 5,
    backgroundColor: 'aliceblue',
    justifyContent: 'center',
    paddingTop: 10,
    marginLeft: 50,
    size: 50,
    width: 760,
    height: 30,
    fontSize: 20,
    borderRadius: 4,
    // placeholder: 'Your text here'
  },
  text: {
    // flex: 1,
    borderRadius: 41,
    marginTop: 10,
    marginLeft: 50,
    color: 'grey',
    fontSize: 15,
    fontFamily: 'lucida granden, tahoma, verdana, arial, sansSerif',  
    fontWeight: "bold",
    alignItems:'center',
    justifyContent:'flex-start'
  },
  date: {
    // fontStyle: 'italic',
    color: '#3C185C',
    fontFamily: 'lucida granden, tahoma, verdana, arial, sansSerif',  
    fontWeight: "bold",
    fontSize: 10,
    marginLeft: 10,
  },
  card: {
    minWidth: 275,
    minHeight: 500,
    margin: 220,
    marginTop: 20,
    backgroundColor: '#F0F8FF',
  }
  


}));

export default function UserChat({ user, setUser }) {
  const classes = useStyles();

  const gameId = 436;
  
  const [chats, setChats] = useState([]);
  // const [game_id, setGameId] = useState(1);
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  const [userData, setUserData] = useState({});
  

  


  useEffect( () => {
    async function getChats() {
      const response = await fetch(`http://localhost:5000/api/get_chat/${gameId}`)
      const chatData = await response.json();
      console.log(chatData);
      setChats(chatData.chat);
    }  
    getChats();
  }, []);

  async function saveMessage() {
    console.log(text, chats, isError, userData)
    // const Timestamp = timestamp;
    // const output = await 
    const data = JSON.stringify({
      'time': new Date().toString(),
      'text': text,
      'username': user.username,
      "account_id" : user.session_id,
      "game_id" : gameId,
    })
    console.log(data)
    const configs = {
      method:"POST",
      body: data,
      headers: {"Content-Type": "application/json"}
    };
    const response = await fetch("http://localhost:5000/api/save_chat", configs)
    const chatData = await response.json();
    console.log(chatData)
    setChats(chatData.chat);
    setText('');
    // setText(chatData.text);
    // console.log(chatData.text)
  }

  function logOut() {
    sessionStorage.clear();
    setUser({});
  }
  
  function getTime(date) {
    return new Date(date).toLocaleTimeString()
  }

  function getDay(date) {
    return new Date(date).getDay()
  }

  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      saveMessage() 
    };
    // const InputExampleFluid = () => (
    //   <Input fluid icon='search' placeholder='Search...' />
    // )

  }

    return (
      <div>
        <Button variant="contained" color="primary" className={classes.signOutButton} onClick={logOut}>Log Out</Button>
        
        {/* <br/> */}

      {/* <input /> */}

      <div className={classes.button}>
        
      </div>
      <div>
        <Card className={classes.card}>
          
          <input  className={classes.input} 
                value={text} 
                onChange={event => setText(event.target.value)} 
                onKeyDown={_handleKeyDown} 
                
                /> 
        <Divider />
                {/* <Input fluid icon='search' placeholder='Search...' /> */}
        <Button
              className={classes.button}
              onClick={saveMessage} 
              edge="end"
              variant="contained"
              color="primary"           
              endIcon={<MdSend>send</MdSend>} 
              >

          </Button>
          {/* <Divider /> */}

          {chats.map(message => <p className={classes.text}>{message[4]} 
                                <span className={classes.date}>  {getTime(message[1])} {getDay([3])}
                                </span></p>)} 
        </Card>
      </div>
      {/* {chats.map(message => )}  */}
         {/* <p className={classes.date}>{message[1]}</p> */}
    </div>
    );
  // } else {
  //   return <LogIn/>
  // }

}
