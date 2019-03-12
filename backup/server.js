var express = require("express");
var app = express();
var httpProxy = require('http-proxy');
var http = require("http");
const bodyParser = require("body-parser");
var join = require("path").join;
var path = require("path");
var port = 3300;
var cors = require("cors");

var Config = require(path.resolve("./config"));
var env = new Config();
var apiProxy = httpProxy.createProxyServer({changeOrigin: true,  xfwd: true, prependPath: false})

app.all('/api/*', (req, res ) => {
  apiProxy.web(req, res, {target: env.url})
})

apiProxy.on('error', (error, request, response) => {
  if (! response.headersSent) {
  }
  if (error.code === 'ECONNREFUSED') {
    console.log('Sorry, our API server is down. Please come back later')
  } else {
    console.log(error.message)
  }
});

app.use(express.static("./"));
app.use("*", function(req, res, next) {
  var indexFile = path.resolve(__dirname, "./index.html");
  res.sendFile(indexFile);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var httpsServer = http.createServer(app);
httpsServer.listen(port, function() {
  console.log(`Server start at port ${port}.`);
});
