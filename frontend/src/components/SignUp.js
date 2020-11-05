import React, { useState } from 'react';
import { Box, Button, Link, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { green } from '@material-ui/core/colors';


 function SignUp(props) {

    const [inputCheck, setInputCheck] = useState("undefined");

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            flexDirection: "column"

        },
        reactfragment: {
            justifyContent: "center",
        },

        paper: {
            padding: theme.spacing (5),    
            margin: theme.spacing (5),
            marginTop: 30,
            paddingTop: 75,
            alignItems:'center',
            justifyContent: "center",
            width: 350,
            height: 450,
            backgroundColor: "#F0E4C8",
        },
        box: {
            padding: theme.spacing (5),
            margin: theme.spacing (5),
            alignItems:'center',
            justifyContent: "center",
            textAlign: "center",
            paddingRight: 100,
            paddingLeft: 400
        },
        or: {
            fontSize: 15,
            color: 'grey',

        },
        button: {
            color: 'blue',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            padding: '7px 32px',
            backgroundColor: "#1A91DA"
        },
        signin: {
           fontSize: 30, 
           fontFamily: 'Apple',
                     
        }, 
        facebookIcon: {
            color: "blue"
        }, 
        twitterIcon: {
            color: "#1A91DA"
        }
    }));
    const classes = useStyles();

    function checkOnSignUp(username, password) {
        
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
        <React.Fragment className={classes.reactfragment}>
            <Box className={classes.box}>
            <Paper elevation={10} className={classes.paper}>           
                <h3 className={classes.signin} > Sign Up </h3>
                <Input id="firstname" onChange={e => props.setFirstname(e.target.value)} placeholder="First Name*"></Input>
                
                <Input id="lastname" onChange={e => props.setLastname(e.target.value)} placeholder="Last Name*"></Input>
                
                <Input id="emailaddress" onChange={e => props.setEmailaddres(e.target.value)} placeholder="Email Address"></Input>
                
                <Input id="password" onChange={e => props.setPassword(e.target.value)} placeholder="Password"></Input>
               
                <Button  className={classes.button} onClick={e => checkOnSignUp(props.username, props.password)} color="primary">Sign Up</Button>
               
            </Paper>           
            </Box>             
        </React.Fragment>
    );

}
export default SignUp;