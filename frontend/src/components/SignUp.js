import React, { useState } from 'react';
import { Box, Button, Link, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { green, grey } from '@material-ui/core/colors';
import { Redirect } from 'react-router-dom';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';


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

 function SignUp(props) {

    const classes = useStyles();
    
    // const [inputCheck, setInputCheck] = useState("undefined");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    // const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);

    async function sendSignUp() {
        const data = JSON.stringify({
            'firstname': firstname, 
            'lastname': lastname, 
            'email': email, 
            'password': password
        })
        const configs = {
            methods: "POST",
            body: data,
            headers: {"Content-Type": "application/json"}
        };
        const response = await fetch("http://localhost5000/api/sign_up", configs)
        const userData = await response.json();

        if (userData.session_id) {
          sessionStorage.setItem("session_id", userData.session_id)  
        } else {
            setIsError(true);
            console.log(isError)
        }
        // let inputUsername = document.getElementById("username");
        // let inputPassword = document.getElementById('password');
        // inputUsername.value = "";
        // inputPassword.value = "";
    }
    return (
        <React.Fragment className={classes.reactfragment}>
            <Box className={classes.box}>
            <Paper elevation={10} className={classes.paper}>           
                <h3 className={classes.signup} > Sign Up </h3>
                <Input id="firstname" onChange={e => setFirstName(e.target.value)} placeholder="First Name*"></Input>
                
                <Input id="lastname" onChange={e => setLastName(e.target.value)} placeholder="Last Name*"></Input>
                
                <Input id="emailaddress" onChange={e => setEmail(e.target.value)} placeholder="Email Address"></Input>
                
                <Input id="password" onChange={e => setPassword(e.target.value)} placeholder="Password"></Input>
               
                <Button  className={classes.button} onClick={e => sendSignUp()} color="primary">Sign Up</Button>
                <br></br>
                <p style={{color: grey[600]}}>Already registered? <Link component={RouterLink} to="login">Sign In</Link></p>
                { isError && <p>Sign Up Error.</p> }
            </Paper>           
            </Box>             
        </React.Fragment>
    );

}
export default SignUp;