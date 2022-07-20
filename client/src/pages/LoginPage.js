// using react extenion type "rfce" to auto create the config to export
import React, { useState } from 'react';
import axios from "axios";
// import '../styles/LoginPage.css'
// reference for redirect: https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    var [loginStatus, setLoginStatus] = useState("");

    // Function for onSubmit, when button is clicked
    // Post API can be seen at server/index.js
    const login = () => {
        axios.post(
            "http://localhost:3001/login", 
            {username: username, password: password} )
            .then((response) => {
                console.log(response.data)
                // if it's error message from mysql
                if (response.data.message) {
                    setLoginStatus(response.data.message);
                } else {
                    console.log("Login sucessful");
                    var temp = "welcome " + response.data[0].username + "!";
                    // setLoginStatus(response.data[0].username);
                    setLoginStatus(temp);
                    redirect(); // redirect to another page on successful login
                }
        });
    }

    // Function to redirect to dashboard page
    let navigate = useNavigate(); 
    const redirect = () => {
        navigate('/dashboard');
    }

    return (
        <div className='createLoginPage'>

            <h1 className="headerText">Login</h1>

            <div className='form-container'>
                <div className="form-group">
                    <label>Username: </label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                
                <div className="form-group">
                    <label>Password: </label>
                    <input
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => {
                        setPassword(e.target.value); }}
                    />
                </div>

                <button onClick={login}>Login</button>
            </div>
            <h1>{loginStatus}</h1>

        </div>
    )
  
}

export default LoginPage