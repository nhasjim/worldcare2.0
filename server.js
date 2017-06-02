var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var filePath = __dirname;
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));


app.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});



//
// app.get("/",function(req,res){
//   res.sendFile(filePath + 'cover.html');
// });
//
// app.get("/about",function(req,res){
//   res.sendFile(filePath + "about.html");
// });
//
// app.get("/json",function(req,res){
//   res.sendFile(filePath + "jsonTest.html");
// });


app.get("/",function(req,res){
  res.sendFile(filePath + "/index.html");
});


app.use("/",router);

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
//app.listen(PORT,function(){
//  console.log("Live at Port 3000");
//});
