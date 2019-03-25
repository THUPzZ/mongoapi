var express = require("express");
var app = express();
var router = express.Router()
var httpProxy = require('http-proxy');
var http = require("http");
var join = require("path").join;
var path = require("path");
var port = 3000;
var cors = require("cors");
var express = require('express') 
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(express.static("./"));
app.use(cors())
var allowedOrigins = ['http://127.0.0.1:4200'];
app.use(cors({
origin: function(origin, callback){
  // allow requests with no origin 
  // (like mobile apps or curl requests)
  if(!origin) return callback(null, true);
  if(allowedOrigins.indexOf(origin) === -1){
  var msg = 'The CORS policy for this site does not ' +
  'allow access from the specified Origin.';
  return callback(new Error(msg), false);
  }
  return callback(null, true);
  }
  }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var MeterRouter = require('../routes/meter.routes');

var httpsServer = http.createServer(app);
httpsServer.listen(port, function() {
  console.log(`Server start at port ${port}.`);
});

app.use(`/`,MeterRouter)







