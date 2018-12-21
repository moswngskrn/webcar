var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'เข้าสู่ระบบ' });
});


router.post('/ok',function(req,res, next){
    req.session.user={name:'วงศกร มะโนเรือน',uid:'5c18114540584f757b3e76bf'}
    res.redirect('/profile');
})

router.get('/logout', function(req, res, next) {
    req.session.destroy(function(err) {
        res.redirect('/');
    })
});
module.exports = router;
