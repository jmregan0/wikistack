const express = require('express');
const wikiRouter = express.Router();
const path = require('path');
var models = require('../models');
var Page = models.Page;
var User = models.User;



wikiRouter.get('/', function(req, res, next) {
    res.redirect('/');
})

wikiRouter.post('/', function(req, res, next) {

    //.create = Sequelize method. builds and saves table data at same time

    var newPage = Page.create({
        title: req.body.title,
        content: 'stuff'
    })
    .then(function(){
        res.json(newPage);
    })

})

wikiRouter.get('/add', function(req, res, next) {
    // retrieve add page form
    res.render('addpage');
})

wikiRouter.get('/:customPath', function(req, res, next){
    Page.findOne({
        where: {
            urlTitle: req.params.customPath
        }
    })
    .then(function(found){
        res.render(//code here//)
    })
    .catch(next);
})



module.exports = wikiRouter;
