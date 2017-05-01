const express = require('express');
const wikiRouter = express.Router();
const path = require('path');



wikiRouter.get('/', function(req,res) {
    res.redirect('/');
})

wikiRouter.post('/', function(req,res) {
    //submit new page to db
    res.send();
})

wikiRouter.get('/add', function(req,res) {
    // retrieve add page form
    res.render('addpage');
})




module.exports = wikiRouter;