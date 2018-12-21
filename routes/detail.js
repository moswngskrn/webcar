var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
  if(req.session.user!=null){
    res.render('detail', { title: 'รายละเอียด',logined:true });
  }else{
    res.render('detail', { title: 'รายละเอียด',logined:false });
  }
  
});

module.exports = router;
