var express = require('express');
var router = express.Router();
// const wikiRouter = require('./wiki');
// const userRouter = require('./user');

router.use('wiki', wikiRouter);

router.get('/', function(request, response){
  console.log('we made it in here');
  response.send('../public/index.html');
})

