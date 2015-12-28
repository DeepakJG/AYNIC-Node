//var http = require("http");
// var url = require("url");
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.connect('mongodb://localhost/rest_test');

var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

//app.get("/", function(req, res){
//  res.send("Working Android Demo");
//});

app.listen(3000);




// function start(){
//   function onRequest(request, response){
//     var path = url.parse(request.url).pathname;
//     console.log("Requested for "+ path);
//     route(path);
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hey Android BackEnd DEep");
//     response.end();
//   }
//   http.createServer(onRequest).listen(2222);
//   console.log("Server Started!!");
//
// }
// exports.start = start;
