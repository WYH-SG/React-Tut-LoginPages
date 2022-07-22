# React-Tut-LoginPages
References: 
- https://www.youtube.com/watch?v=W-sZo6Gtx_E
- https://www.youtube.com/watch?v=sTHWNPVNvm8&t=0s
- https://www.youtube.com/watch?v=KgXT63wPMPc

## Set up for Server side
**Set up NodeJS & Install libaries**
```
- Run "npm init"
- run "npm install nodemon"
- run "npm install express cors mysql mysql2"

for encryption
- npm install bcrypt

For Cookies & Session
- npm install express-session body-parser cookie-parser

For JSON Web Token (JWT)
- npm install jsonwebtoken

Create file "index.js" inside server folder
- Create connection to mySQL database schema on localhost
```

**To run the server file**
```
- cd into server folder
- run "npm start"
```

**For nodemon**
```
- inside server/package.json
- under script {} add in: "start": "nodemon index.js"
```

**For Database Modification**
- Under Server/index.js
- modify the username, password, database to the database in mysql
- host, set to the ip address of the database if hosted online

**Creating the table and columns**
- If creating table using mySQL workbench
```
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
```

**To resolve CORS policy on localhost**
```
- navigate to server/index.js
- add the line "const cors = require('cors');"
- and "app.use(cors());"
```

## Set up for Client side

**Creation of React folder**
```
- run "npx create-react-app ."
- run "npm start"
```

**Libraries to install**
```
React Router
- run "npm install react-router-dom"

Form & Validation
- run "npm install formik"
- run "npm install yup"

Axios
- run "npm install axios"

React BootStrap
reference: https://react-bootstrap.github.io/forms/overview/
- run "npm install react-bootstrap bootstrap"
```
