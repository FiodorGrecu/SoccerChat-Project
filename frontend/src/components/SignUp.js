import React, { useState } from 'react';
import { MDBIcon } from "mdbreact";
import { Box, Button, Link, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { green } from '@material-ui/core/colors';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


 function LogIn(props) {

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
            marginTop: 20,
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
            textAlign: "center"
        },
        or: {
            fontSize: 15,
            color: 'grey',

        },
        button: {
            // fontSize: 10,
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
        <React.Fragment className={classes.reactfragment}>
            <Box className={classes.box}>
            <Paper elevation={10} className={classes.paper}>           
                <h3 className={classes.signin} > Sign Up </h3>
                <Input id="firstname" onChange={e => props.setFirstname(e.target.value)} placeholder="First Name*"></Input>
                <br/>
                <Input id="lastname" onChange={e => props.setLastname(e.target.value)} placeholder="Last Name*"></Input>
                <br/>
                <Input id="emailaddress" onChange={e => props.setEmailaddres(e.target.value)} placeholder="Email Address"></Input>
                <br/>
                <Input id="password" onChange={e => props.setPassword(e.target.value)} placeholder="Password"></Input>
                <br/>
                <Button  className={classes.button} onClick={e => checkOnLogin(props.username, props.password)} color="primary">Sign Up</Button>
                <br></br>
                
                {/* <p className={classes.or}>or sign up using</p> */}
                {/* <FacebookIcon className={classes.facebookIcon}></FacebookIcon> */}
                {/* <TwitterIcon className={classes.twitterIcon}></TwitterIcon> */}
            </Paper>           
            </Box>             
        </React.Fragment>
    );

}
export default LogIn;