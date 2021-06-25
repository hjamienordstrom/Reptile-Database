const Reptile = require('../models/reptile')
// const Notes = require('../reptiles/notes')

module.exports = {
    index, 
    new:newReptile, 
    create,
    delete:deleteReptile,
    edit,
    update:updateReptile,
    comment
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
    req.body.breeder = req.user 
    Reptile.create(req.body, function(err,reptileDocument){
        console.log(err)
        if(err)return res.render('reptiles/new');
        console.log(reptileDocument, 'our doc')
        res.redirect('/reptiles')
    })
}

function deleteReptile(req, res) {
    console.log(req.params.id, "this is req.params");
    Reptile.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/reptiles');
    });
}

function edit(req,res){
    Reptile.findById(req.params.id, function(err,reptile){
        console.log(reptile,'this is reptile')
        if(!reptile.breeder.equals(req.user._id))return res.redirect('/reptiles');
        res.render('reptiles/edit',{reptile});
    })
}

function updateReptile(req,res){
    Reptile.findByIdAndUpdate(req.params.id, req.body, function(err){
        res.redirect('/reptiles');
    })
}

function comment(req, res) {
    Reptile.findById(req.params.id, function(err, reptile) {
      reptile.comment.push(req.body);
      reptile.save(function(err) {
        res.redirect(`/reptiles`);
      });
    });
  }