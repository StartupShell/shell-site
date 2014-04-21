var express = require('express');
var router = express.Router();
var fs = require('fs');
module.exports = router;



// Home page
router.get('/', function(req, res) {
  res.render('index',  {images: fs.readdirSync('./public/images/logos') });
});


// Apply
router.get('/apply', function(req, res) {
  res.render('apply');
})

router.post('/apply', function(req, res) {
  res.send('You applied. Good work');
})


router.get('/test', function(req, res){
  res.send('hh is a test')
})
