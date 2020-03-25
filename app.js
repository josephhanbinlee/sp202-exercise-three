// node doesn't support import
// const express from 'express' --> 
const express = require('express');
const app = express();

const port = 4000;

// get is a function of the app object
// function receives two args (path, callback)

// creating the routes
const indexRoute = require('./routes/index.js');
const aboutRoute = require('./routes/about.js');

// req --> request / res --> response

/*-- Serve Static Files --*/
app.use("/static", express.static("public"));
/*-- Routing in Express --*/
app.use('/', indexRoute)
app.use('/about', aboutRoute)


// callback returns a console.log
app.listen(port, () => console.log('Hello World Running!'));