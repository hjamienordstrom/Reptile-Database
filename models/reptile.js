const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reptileSchema = new Schema({
    species: String, 
    morph:String,
    sex: String, 
    age: Number, 
    layDate: Date, 
    hatchDate: Date, 
    breeder: {type: Schema.Types.ObjectId, ref:'Breeder'}
})

const Reptile = mongoose.model('Reptile', reptileSchema);
console.log(Reptile)
module.exports = Reptile;