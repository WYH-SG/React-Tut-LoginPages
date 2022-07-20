// using react extenion type "rfce" to auto create the config to export
import React from 'react';
import axios from "axios";
import {Formik, Form, Field, ErrorMessage} from 'formik'; // Library for form application template
import * as Yup from 'yup';
import '../styles/LoginPage.css'

function LoginPage() {

    // object for the form that will be send to database
    const initialValues= {
        username: "",
        password: "",
    }

    // Validate the data being sent to database
    // uses Yup library to specify what exactly we need from those fields
    // required(): a must input value
    // min(), max(): min and maximum number of characters
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required("Please enter your Username"),
        password: Yup.string().required("Please enter your Password"),
    })

    // Function for onSubmit, when button is clicked
    // Post API can be seen at server/routes/Posts.js
    const onSubmit = (data) => {
        console.log("before submit check: ", data);

        // axios.post("http://localhost:3001/posts", data).then((response) => {
        //     console.log("Form submitted", response.data);
        // });
    }

    return (
        <div className='createLoginPage'>

            <h1 className="headerText">Login</h1>

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

                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    )
  
}

export default LoginPage