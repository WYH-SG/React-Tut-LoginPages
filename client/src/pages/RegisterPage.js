// using react extenion type "rfce" to auto create the config to export
import React, { useState } from 'react';
import axios from "axios";
// import '../styles/RegisterPage.css'

function RegisterPage() {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    // Function for onSubmit, when button is clicked
    // Post API can be seen at server/index.js
    const register = () => {
        axios.post(
            "http://localhost:3001/register", 
            {username: usernameReg, password: passwordReg} )
            .then((response) => {
                console.log("Registration sucess", response.data);
        });
    }

    return (        
        <div className='createRegisterPage'>
            <h1 className="headerText">Register</h1>

            <div className='form-container'>
                <div className="form-group">
                    <label>Username: </label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        onChange={(e) => {
                            setUsernameReg(e.target.value);
                        }}
                    />
                </div>
                
                <div className="form-group">
                    <label>Password: </label>
                    <input
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => {
                        setPasswordReg(e.target.value); }}
                    />
                </div>

                <button onClick={register}>Register</button>
            </div>

        </div>
    )

    // <label>Email: </label>
    // <ErrorMessage name='email' component="span" />
    // <Field autocomplete="off" id='inputField' name="email" placeholder="Enter Email..." />

}

export default RegisterPage