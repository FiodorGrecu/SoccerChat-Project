import React, { useState } from 'react';
import { MDBIcon } from "mdbreact";
import { Box, Button, Link, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { green } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';




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
            width: 350,
            height: 450,
            backgroundColor: "#F0E4C8",
            // paddingLeft:
        

        },
        box: {
            padding: theme.spacing (5),
            margin: theme.spacing (5),
            alignItems:'center',
            justifyContent: "center",
            textAlign: "center", 
            paddingRight: 100,
            paddingLeft: 400,
        },
        or: {
            fontSize: 14,
            color: 'blue'
        },
        button: {
            // fontSize: 10,
            color: 'blue',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            padding: '6px 32px',
            // width: "40px",
            backgroundColor: "#1A91DA"
            

            
        },
        signin: {
           fontSize: 30, 
           fontFamily: 'Apple',          
        },
        avatar: {
            margin: theme.spacing(2),
            marginLeft: 59,
            backgroundColor: theme.palette.secondary.main,
            justifyContent: 'center',
            fontSize: 40,
          },
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
            <Box className={classes.box}>
            <Paper elevation={10} className={classes.paper}>           
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <h3 className={classes.signin} > Sign In </h3>
                <Input id="username" onChange={e => props.setUsername(e.target.value)} placeholder="Username or Email">Hey</Input>
                <br/>
                <Input id="password" onChange={e => props.setPassword(e.target.value)} placeholder="Password"></Input>
                <br/>
                <Button  className={classes.button} onClick={e => checkOnLogin(props.username, props.password)} color="#1A91DA" variant="contained">Log In</Button>
                <br></br>
                <Link>Forgot Password?</Link>
                <p className={classes.or}>or</p>
               <Link>Sign Up Here</Link>
            </Paper>           
            </Box>             
        </React.Fragment>
    );
}
export default LogIn;