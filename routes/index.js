var express = require('express');
var router = express.Router();


router.get('/', function(request, response){
  console.log('we made it in here');
  response.send('../public/index.html');
})


module.exports = router;
