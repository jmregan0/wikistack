var express = require('express');
var morgan = require('morgan');
var express = require('express');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
const models = require('./models/index.js');
const routes = require('./routes/index.js');

let app = express();

module.exports = app;

app.use(express.static('public'));
app.use(express.static('views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));



models.db.sync({force: true})
.then(function() {
    app.listen(3000,function() {
    console.log('Listening on port 3000!');
    });
})
.catch(console.error);


app.use('/', routes);


