var routes = require('../routes/routes') ;
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')

var app = express();
var port = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://ravi:Tablet%401911@ds016718.mlab.com:16718/discovereworkflow");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// body bodyParser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


routes(app);

app.listen(port, function (){
  console.log("sever running on port", port);
}
