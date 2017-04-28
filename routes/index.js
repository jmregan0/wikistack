

var app = require('../app.js');

app.get('/', function(request, response){
  response.send('../public/index.html');
})

