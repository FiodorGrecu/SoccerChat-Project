import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { MdSend } from "react-icons/md";
import Input from '@material-ui/core/Input';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'aliceblue',
    width: '100%',
  },

  button: {
    marginTop: '2px',
    width: '100%',
    backgroundColor : "#1A91DA",
    
  },

  signOutButton: {
    marginTop:'25px',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 4,
    backgroundColor:'#be13aa'
    
  },

  input: {
    backgroundColor: 'white',
    size: 50,
    width: '100%',
    height: 30,
    fontSize: 20,
    borderRadius: 4,
    border: 'none'
  },
  text: {
    borderRadius: 41,
    marginTop: '10px',
    color: 'grey',
    fontSize: 15,
    fontFamily: 'lucida granden, tahoma, verdana, arial, sansSerif',  
    fontWeight: "bold",
    alignItems:'center',
  },
  date: {
    color: '#3C185C',
    fontFamily: 'lucida granden, tahoma, verdana, arial, sansSerif',  
    fontWeight: "bold",
    fontSize: 10,
    marginLeft: 10,
  },
  card: {
    width: '100%',
    minHeight: 1000,
    margin: 1,
    marginTop: 20,
    backgroundColor: 'white',
  }
  


}));

export default function UserChat({ user, setUser, gameId }) {
  const classes = useStyles();

  const [chats, setChats] = useState([]);
  const [text, setText] = useState('');
  
  const [isError, setIsError] = useState(false);
  const [userData, setUserData] = useState({});

  async function getChats() {
    const response = await fetch(`http://localhost:5000/api/get_chat/${gameId}`)
    const chatData = await response.json();
    console.log(chatData);
    setChats(chatData.chat);
  }  

  useEffect( () => {
    getChats();
    const interval = setInterval(() => {
      getChats();
    }, 5000);
    return () => clearInterval(interval);
  }, []);



  async function saveMessage() {
    console.log(text, chats, isError, userData)
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
  }

  function logOut() {
    sessionStorage.clear();
    setUser({});
  }
  
  function getTime(data) {
    const time = new Date(data);
    return time.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit' });
  }

  function getDay(date) {
    return new Date(date).toLocaleDateString('en-US',
    {day:'2-digit', month:'2-digit', year:'numeric'})
  }

  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      saveMessage() 
    };

  }

    return (
      <div style={{ marginLeft:'1%' , marginRight:'1%'}}>
        <Button variant="contained" color="primary" 
                className={classes.signOutButton} 
                onClick={logOut}>
                  Log Out
        </Button>
      <div>
        <div className={classes.card}>
          
          <Input  className={classes.input} 
                value={text} 
                onChange={event => setText(event.target.value)} 
                onKeyDown={_handleKeyDown} 
                placeholder={"What are your thoughts...?"}
                /> 
        <Divider />
                {/* <Input fluid icon='search' placeholder='Search...' /> */}
        <Button
              className={classes.button}
              onClick={saveMessage} 
              edge="end"
              variant="contained"
              color="primary"           
              endIcon={<MdSend>send</MdSend>}>     
        </Button>
          <div>
          {chats.map(message => <span className={classes.text}>
            <div style={{fontFamily:'Roboto,sans-serif',color: 'grey[700]',
                          fontWeight: 'bold', paddingLeft:'20px',paddingTop:'20px',
                          }}>
                {message[5]} 
              <span style={{paddingLeft:'10px',fontFamily:'Roboto,sans-serif',
                          color: 'grey',fontWeight: '600', }}>
                <span style={{}}>{getDay(message[1])}</span>
                <span style={{paddingLeft:'10px'}}>{getTime(message[1])}</span>
              </span>
            </div>
            <div style={{fontFamily:'Roboto,sans-serif',color: 'grey[400]',
                          fontWeight: '400', paddingLeft:'30px', }}>
                            {message[4]}
            </div>    
            </span>)} 
           </div> 
        </div>
      </div>

    </div>
    );
  
}
