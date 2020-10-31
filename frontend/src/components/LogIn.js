import React, { useState } from 'react';
import { MDBIcon } from "mdbreact";
 


function LogIn(props) {

    const [inputCheck, setInputCheck] = useState("undefined");

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
        <div>
            <p> Welcome User!</p>
            <h3 class="1"> Login Page </h3>
            <input id="username" onChange={e => props.setUsername(e.target.value)} placeholder="username"></input>
            <br/>
            <input id="password" onChange={e => props.setPassword(e.target.value)} placeholder="password"></input>
            <br/>
            <button onClick={e => checkOnLogin(props.username, props.password)} >Login</button>
            
            {inputCheck !== "undefined" &&<p>Your login result is: {inputCheck.toString()}
            {inputCheck && <MDBIcon icon="heart" size="2x" className="indigo-text pr-3" /> }
            {!inputCheck && <MDBIcon icon="heart-broken" size="2x" className="indigo-text pr-3" /> }</p>}
        </div>
    );

}
export default LogIn;