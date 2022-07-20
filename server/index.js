const express = require('express'); // an instance of the framework
const mysql = require('mysql2');
const cors = require('cors'); // import cors from library cors

const app = express(); // initialize the app
app.use(express.json());
app.use(cors()); // whitelist your localhost to prevent cors block policy

// Create a connection to mySQL database
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "P@ssword1",
    database: "react_tut_loginpage"
});

// Run the server on localhost port 3001
app.listen(3001, () => {
    console.log("server is running on port 3001");
});

/***
 * Call API to pass into mySQL database
 * ./route -> define the route for API calling
*/
// From register page, when user click register button
app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
    "INSERT INTO users (username, password) VALUES (?,?)", 
    [username, password],
    (err, result) => {
        if (err) {
            console.log(err);
        }
    });
});

// From Login Page, when user try to login
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
        if (err) {
            res.send({err: err});
        } 

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Wrong Username/Password"});
        }
    });
});