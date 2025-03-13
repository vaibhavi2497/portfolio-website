const express = require("express");
const path = require('path');
// const fs = require('fs');
const app = express();
const port = 80;

// Express specific stuff
// app.use(('/static',express.static('static')));
app.use('/static',express.static('static'));
app.use(express.urlencoded());

// PUG specific stuff
app.set('view engine','pug'); //set bthe pug template
app.set('views',path.join(__dirname,'views')); //set the view directory

// Endpoints
app.get('/', (req , res) => {
    const param = {title:'This is a title'}
    // res.status(200).render('index.pug', param);
    res.status(200).render('index.pug',param);
});

// Start the server
app.listen(port,()=>{
    console.log(`This application started succesfully on port ${port}`);
});

