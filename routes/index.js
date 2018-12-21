var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.user!=null){
    res.render('index', { title: 'Express' ,logined:true});
  }else{
    res.render('index', { title: 'Express' ,logined:false});
  }
  
});

module.exports = router;
