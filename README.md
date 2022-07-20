# React-Tut-LoginPages

## Set up for Server side
**Set up NodeJS & Install libaries**
```
- Run "npm init"
- run "npm install nodemon"
- run "npm install express cors mysql mysql2"

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
- Under Server/config/config.json
- modify the username, password, database to the database in mysql
- host, set to the ip address of the database if hosted online

**Creating the table and columns**
- Under server/models/Post.js
- export out the columsn and datatype for each

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