const express = require('express');
const wikiRouter = express();

wikiRouter.get('/', function(req,res) {
    console.log('wiki pages');
    res.send();
})

wikiRouter.post('/', function(req,res) {
    //submit new page to db
    res.send();
})

wikiRouter.get('/add', function(req,res) {
    // retrieve add page form
    res.render('addpage.html');
})


module.exports = wikiRouter;