const request = require("request");

var apirequest = function(address,error,callback){ // function which helps to the constain the all the request
 if(error){
     return callback('something went wrong');
 }
    var d1,d2;
    var  mapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiZ2FhbGliIiwiYSI6ImNrOGg2NjcybTAxaTQzbHRha21vZDEyajgifQ.0K7wUwaBDEvOARX0b_isvQ'


request({url:mapbox} , (err,response)=>{
if(err){
console.log('something went wrong ');
}
 var valuee = data( response.body);
   
  d1 = valuee.features[0].center[0];
  d2 = valuee.features[1].center[1];
  console.log(d1);
  console.log(d2);
  console.log(d1 +"" + d2);

//request to the darksky webapi with the co-ordinate 
var Url = "https://api.darksky.net/forecast/a1be0fddb3fa380b3e3a33ab2f4a46c1/"+d1+","+ d2;
request({url : Url  },(er,response)=>{
    if(er){
        console.log(er);
    }
        var da = data(response.body);
        
   console.log("Humidity in "+ address +" is about = " + da.currently.humidity + " there is 0% chance to rain");
});
});
}
 
const data = function(value ){
    const d = JSON.parse(value);
     return d ;
   }
   
const functionss = {
    apirequest : apirequest
}
   module.exports = functionss ;