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
    edge: "flex-end",
  },

  textbox: {
    marginTop: 10,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    paddingTop: 10,
    marginLeft: 150,
    size: 50,
    width: 1000,
    height: 50,
    
  },
  text: {
    // flex: 1,
    marginTop: 10,
    marginLeft: 350,
    color: 'grey',
    fontSize: 15,
    fontFamily: 'lucida granden, tahoma, verdana, arial, sansSerif',  
    fontWeight: "bold",
    alignItems:'center',
    justifyContent:'flex-start'
  },
  date: {
    // fontStyle: 'italic',
    color: 'blue',
    fontFamily: 'lucida granden, tahoma, verdana, arial, sansSerif',  
    // fontWeight: "bold",
    fontSize: 10,
  },
  card: {
    minWidth: 275,
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

  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      saveMessage() 
    }
  }

  // const session_id = sessionStorage.getItem("session_id");
//   const [textInput, setTextInput] = useState("");
//   const [inputs, setInputs] = useState([]); 
  // if (userData.session_id) {     
  //   sessionStorage.setItem("session_id", userData.session_id)
    return (
      <div>
        <button className={classes.signOutButton} onClick={logOut} >Log Out</button>
        
        <br/>
        {/* <input  className={classes.messages}>         
        </input> */}
      
        <input  className={classes.textbox} 
                value={text} 
                onChange={event => setText(event.target.value)} 
                onKeyDown={_handleKeyDown} /> 

        <br></br>
      {/* <input /> */}

      {/* <p>{textInput}</p> */}
      <div className={classes.button}>
        <Button
            // onKeyDown={_handleKeyDown(saveMessage)}
            onClick={saveMessage} 
            edge="end"
            variant="contained"
            color="primary"           
            endIcon={<MdSend>send</MdSend>}
            >   
        </Button>
      </div>
      <div>
        <Card className={classes.card}>
          {chats.map(message => <p className={classes.text}>{message[4]} 
                                <span className={classes.date}>  {getTime  (message[1])}
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
