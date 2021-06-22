const mongoose = require('mongoose');

// Create your User Model

const breederSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    googleId : String
})

module.exports = mongoose.model('Breeder', breederSchema)