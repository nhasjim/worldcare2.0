var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var filePath = __dirname;
const PORT = process.env.PORT || 3000;

app.use(express.static('css'));
app.use(express.static('js'));


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



app.listen(PORT,function(){
  console.log("Live at Port 3000");
});
