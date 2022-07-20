// using react extenion type "rfce" to auto create the config to export
import React from 'react';
import axios from "axios";
import {Formik, Form, Field, ErrorMessage} from 'formik'; // Library for form application template
import * as Yup from 'yup';
import '../styles/RegisterPage.css'

function RegisterPage() {

    // object for the form that will be send to database
    const initialValues= {
        username: "",
        password: "",
        // email: "",
    }

    // Validate the data being sent to database
    // uses Yup library to specify what exactly we need from those fields
    // required(): a must input value
    // min(), max(): min and maximum number of characters
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required("Username is required"),
        password: Yup.string().required("Password is required"),
        // email: Yup.string().required("Email is required"),
    })

    // Function for onSubmit, when button is clicked
    // Post API can be seen at server/index.js
    const onSubmit = (data) => {
        console.log("before submit check: ", data);
        console.log("before submit check: ", data.username);

        const setUsername = data.username;
        const setPassword = data.password;

        axios.post("http://localhost:3001/register", {username: setUsername, password: setPassword} ).then((response) => {
            console.log("Registration sucess", response.data);
        });
    }

    return (        
        <div className='createRegisterPage'>

            <h1 className="headerText">Register</h1>

            {/* initialValues: for starting value of the form
                onSubmit: when user submit the form through click
                validationSchema: Validate the data submitted */}
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>         
                <Form className="formContainer">
                    <label>Username: </label>
                    {/* ErrorMessage, when user submit invalid input
                        name: link to which field 
                        component: generate a html <span> */}
                    <ErrorMessage name='username' component="span" />
                    {/* name="" should be exactly like how the colums are label in the database 
                        autocomplete="off": prevent google autocomplete */}
                    <Field autocomplete="off" id='inputField' name="username" placeholder="Enter Username..." />

                    <label>Password: </label>
                    <ErrorMessage name='password' component="span" />
                    <Field autocomplete="off" type='password' id='inputField' name="password" placeholder="Enter Password..." />

                    <button type="submit">Register</button>
                </Form>
            </Formik>
        </div>
    )

    // <label>Email: </label>
    // <ErrorMessage name='email' component="span" />
    // <Field autocomplete="off" id='inputField' name="email" placeholder="Enter Email..." />

}

export default RegisterPage