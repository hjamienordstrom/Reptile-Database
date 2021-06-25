const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment:String, 
    breeder: {type: Schema.Types.ObjectId, ref:'Breeder'}
})

const reptileSchema = new Schema({
    species: String, 
    morph:String,
    sex: String, 
    age: Number, 
    layDate: String, 
    hatchDate: String, 
    breeder: {type: Schema.Types.ObjectId, ref:'Breeder'},
    comment:[commentSchema]
})

const Reptile = mongoose.model('Reptile', reptileSchema);
console.log(Reptile)
module.exports = Reptile;