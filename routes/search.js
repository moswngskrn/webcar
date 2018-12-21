var express = require('express');
var request = require('request');
var http = require('http');
var router = express.Router();


function getdata(){

  var str = ''
  var options = {
    host: 'http://localhost:3003',
    path: '/api/mycar/cars/all?keyword=1'
  };

  callback = function(response) {

    response.on('data', function (chunk) {
      str += chunk;
    });
  
    response.on('end', function () {
      console.log(req.data);
      console.log(str);
    });
  }
  
  var req = http.request({
    host: 'http://localhost:3003',
    path: '/api/mycar/cars/all?keyword=1'
  }, function(response) {

    response.on('data', function (chunk) {
      str += chunk;
    });
  
    response.on('end', function () {
      console.log(req.data);
      console.log(str);
    
    });
  }).end();

  console.log(req.data);
  console.log(str);
}
/* GET home page. */
router.get('/', function(req, res, next) {

  if(req.session.user!=null){
    var key = req.query.key;
    res.render('search', { title:"m" ,key:key,logined:true});
  }else{
    var key = req.query.key;
    res.render('search', { title:"m" ,key:key,logined:false});
  }
});



module.exports = router;
