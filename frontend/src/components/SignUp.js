import React, { useState } from 'react';
import { Box, Button, Link, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { green, grey } from '@material-ui/core/colors';
import { Redirect } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';



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
            alignItems:'center',
            justifyContent: "center",
            width: 350,
            height: 450,
            backgroundColor: "#E8E8E8",
        },
        box: {
            padding: theme.spacing (5),
            textAlign: "center",
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
        signup: {
           fontSize: 30, 
           fontFamily: 'Roboto,sans-serif',    
            fontWeight:'bold'        
        }, 
        avatar: {
            margin: theme.spacing(2),
            marginLeft: 109,
            backgroundColor: theme.palette.secondary.main,
            justifyContent: 'center',
            fontSize: 40,
        },
        
    }));

 function SignUp({ setUser, setShowLogin }) {

    const classes = useStyles();

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);

    async function sendSignUp() {
        if (firstname && lastname && username && email && password) {

            const data = JSON.stringify({
                'firstname': firstname, 
                'lastname': lastname, 
                'username': username, 
                'email': email, 
                'password': password
            })
            const configs = {
                method: "POST",
                body: data,
                headers: {"Content-Type": "application/json"}
            };
            const response = await fetch("http://localhost:5000/api/sign_up", configs)
            const userData = await response.json();

            if (userData.session_id) {
            sessionStorage.setItem("session_id", JSON.stringify(userData)) 
            setUser(userData);
            } else {
                setIsError(true);
                console.log(isError)
            }
        
        }else {
            setIsError(true)
            console.log(isError)
        };
    }
    function _onSubmit(e) {
        e.preventDefault();
        sendSignUp();
        console.log("worked")
    }
    return (
        <React.Fragment className={classes.reactfragment}>
            <Box className={classes.box}>
            <Paper elevation={10} className={classes.paper}> 
                <Avatar className={classes.avatar}>
                </Avatar>          
                <h3 className={classes.signup}>Sign Up</h3>
                <form  onSubmit={_onSubmit}>
                    <Input required id="firstname" 
                        onChange={e => setFirstName(e.target.value)} 
                        placeholder="First Name*">
                    </Input>
                    <Input required id="lastname" 
                        onChange={e => setLastName(e.target.value)} 
                        placeholder="Last Name*">
                    </Input>
                    <Input required id="username" 
                        onChange={e => setUserName(e.target.value)} 
                        placeholder="Create User Name*">
                    </Input>
                    <Input required id="email" 
                        onChange={e => setEmail(e.target.value)} 
                        placeholder="Email Address*">
                    </Input>         
                    <Input required type="password" id="password" 
                        onChange={e => setPassword(e.target.value)} 
                        placeholder="Password*">
                    </Input>
                    <Button type={"submit"} className={classes.button} 
                        onClick={e => sendSignUp()} 
                        color="primary">
                        Sign Up
                    </Button>
                    {isError && <p >Please check all the fields and try again</p>}                                  
                </form>
                <br></br>
                <p style={{color: grey[600], paddingRight:"5px"}}>Already registered? 
                    <Link component={RouterLink} 
                            onClick={e => setShowLogin(true)}>
                            <span style={{paddingLeft:"5px"}}>Sign In</span>
                    </Link>
                </p>
            </Paper>           
            </Box>             
        </React.Fragment>
    );
}
export default SignUp;