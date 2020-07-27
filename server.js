const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();
const mongoose = require('mongoose');
const index = require('./app/routes/index');
const post = require('./app/routes/post');
const user = require('./app/routes/user');
const category = require('./app/routes/category');
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
// define a simple route
app.use('/',index);
app.use('/post',post);
app.use('/user',user);
app.use('/category',category);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});