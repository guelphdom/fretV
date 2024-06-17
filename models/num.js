const mongoose = require('mongoose');


var numSchema = new mongoose.Schema({


accountNumber:{type:Number, required:true},
idNumber:{type:Number, required:true},






})

module.exports = mongoose.model('Num', numSchema);