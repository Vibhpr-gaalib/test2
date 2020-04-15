const express = require('express');
const app = express();
const parser = require('body-parser');

app.use(parser.urlencoded({extended:false}));
const port = process.env.PORT || 3000
app.set('view engine',"ejs");
const http = require('http').createServer(app);
var da  = require('./new');
var address = "Ghumarwin";


// da.apirequest(address) 

app.get("/",(req,res)=>{
res.render("home");
})

//converting data into to the object
const data = function(value ){
 const d = JSON.parse(value);
  return d;
}

app.listen(port,()=>{
  console.log("started");
})