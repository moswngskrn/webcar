var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.user!=null){
    res.render('profile', { title: 'โปรไฟล์',logined:true });
  }else{
    res.redirect('/login');
    // res.render('profile', { title: 'โปรไฟล์',logined:true });
  }
  
});

module.exports = router;
