const express = require('express');
const app = express();
const parser = require('body-parser');

app.use(parser.urlencoded({extended:false}));
const port = process.env.PORT || 3000
app.set("view engine","ejs");







app.get("/",(req,res)=>{
res.render("Home");
});

//converting data into to the object
const data = function(value ){
 const d = JSON.parse(value);
  return d;
}

app.listen(port,()=>{
  console.log("started");
})