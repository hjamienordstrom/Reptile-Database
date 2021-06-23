const Reptile = require('../models/reptile')

module.exports = {
    index, 
    new:newReptile, 
    create

}

function newReptile(req,res){
    res.render('reptiles/new')
}

function index(req, res){
    Reptile.find({}, function(err, reptiles){
        res.render('reptiles/index', {reptiles})
    });
}

function create(req,res){
    Reptile.create(req.body, function(err,reptileDocument){
        console.log(err)
        if(err)return res.render('reptiles/new');
        console.log(reptileDocument, 'our doc')
        res.redirect('/reptiles')
    })
}