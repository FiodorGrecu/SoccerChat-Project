import React, { useState } from 'react';
import { MDBIcon } from "mdbreact";
import { Box, Button, Link, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { green } from '@material-ui/core/colors';


function LogIn(props) {

    const [inputCheck, setInputCheck] = useState("undefined");

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            flexDirection: "column"

        },
        paper: {
            padding: theme.spacing (5),
            margin: theme.spacing (5),
            alignItems:'center',
            justifyContent: "center",
            width: 400,
            height: 500,
        

        },
        box: {
            padding: theme.spacing (5),
            margin: theme.spacing (5),
            alignItems:'center',
            justifyContent: "center",
            textAlign: "center"
        },
        or: {
            fontSize: 10,
            color: 'blue'
        },
        button: {
            // fontSize: 10,
        },
        signin: {
           fontSize: 40, 
           fontFamily: 'Apple',          
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
            <Paper elevation={10} className={classes.paper}>           
            <Box className={classes.box}>
                <h3 className={classes.signin} > Sign In </h3>
                <Input id="username" onChange={e => props.setUsername(e.target.value)} placeholder="Username or Email">Hey</Input>
                <br/>
                <Input id="password" onChange={e => props.setPassword(e.target.value)} placeholder="Password"></Input>
                <br/>
                <Button  className={classes.button} onClick={e => checkOnLogin(props.username, props.password)} color="primary">Log In</Button>
                <br></br>
                <Link>Forgot Password?</Link>
                <p className={classes.or}>or</p>
               <Link>Sign Up Here?</Link>
            </Box>             
            </Paper>           
        </React.Fragment>
    );
}
export default LogIn;