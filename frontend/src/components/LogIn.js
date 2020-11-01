


import React, { useState } from 'react';
import { MDBIcon } from "mdbreact";
import { Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

 


function LogIn(props) {

    const [inputCheck, setInputCheck] = useState("undefined");

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing (4),
            margin: theme.spacing (15),
            alignItems:'center',
            justifyContent: "center"

        },
        box: {
            alignItems:'center',
            justifyContent: "center"
        }
    }));
    const classes = useStyles();

    function checkOnLogin(username, password) {
        
        

        if (username.length >= 2 && password.length >= 2){
          setInputCheck(true);
          console.log(inputCheck)   
        }
        else{
            setInputCheck(false);
            console.log(inputCheck)
        }
        let inputUsername = document.getElementById("username");
        let inputPassword = document.getElementById('password');
        inputUsername.value = "";
        inputPassword.value = "";
    }
    return (
        <React.Fragment justify="center">
            <Paper className={classes.paper}> 

           <Box>

                <h3 class="1"> Sign In </h3>
                <input id="username" onChange={e => props.setUsername(e.target.value)} placeholder="username"></input>
                <br/>
                <input id="password" onChange={e => props.setPassword(e.target.value)} placeholder="password"></input>
                <br/>
                <button onClick={e => checkOnLogin(props.username, props.password)} >Login</button>
           </Box>
            </Paper>
           
        </React.Fragment>
    );

}
export default LogIn;