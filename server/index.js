const express = require('express'); // an instance of the framework
const mysql = require('mysql2');
const cors = require('cors'); // import cors from library cors

const bcrypt = require('bcrypt'); // for encrypting password
const saltRounds = 10;

const bodyParser = require('body-parser'); // parse all the reg.body
const cookieParser = require('cookie-parser'); // parse all the cookies
const session = require('express-session'); // create our session & maintain them

const app = express(); // initialize the app
app.use(express.json());

// whitelist your localhost to prevent cors block policy
// credentials: true [IMPORTANT]
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
})); 

app.use(cookieParser());
// For bodyParser:
// https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Cookie expires in 24 hours
app.use(session({
    key: "userId",
    secret: "password",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24 * 1000
    }
}));

// Create a connection to mySQL database
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "P@ssword1",
    database: "react_tut_loginpage"
});

/***
 * Call API to pass into mySQL database
 * ./route -> define the route for API calling
*/
// From register page, when user click register button
app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Hash the password
    // Then use the hash password and pass into DB
    bcrypt.hash(password, saltRounds, (err, hash) => {

        if (err) {
            console.log(err);
        }

        db.query(
            "INSERT INTO users (username, password) VALUES (?,?)", 
            [username, hash],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
            });
        
    });

});

// For Login Page, get session
app.get('/login', (req, res) => {
    if (req.session.user) {
        res.send({
            loggedIn: true,
            user: req.session.user
        });
    } else {
        res.send({ loggedIn: false });
    }
})

// From Login Page, when user try to login
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Get the username only, then compare to the hash password
    db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
        if (err) {
            res.send({err: err});
        } 

        if (result.length > 0) {
            // res.send(result);
            // Make a comparison of the user input password with database password
            // If matching hash, allow login
            bcrypt.compare(password, result[0].password, (err, response) => {
                if (response) { // if correct
                    // Create a session when user login is successful
                    req.session.user = result;
                    console.log("session: ", req.session.user);

                    res.send(result);
                } else {
                    res.send({message: "Wrong Username/Password"});
                }
            });
        } else {
            res.send({message: "User doesn't exist"});
        }
    });
});


// Run the server on localhost port 3001
app.listen(3001, () => {
    console.log("server is running on port 3001");
});