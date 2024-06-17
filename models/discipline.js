const mongoose = require('mongoose');


var disciplineSchema = new mongoose.Schema({


name:{type:String, required:true},
mark:{type:Number, required:true},
level:{type:String, required:true},
type:{type:String, required:true},
code:{type:String,required:true},







})

module.exports = mongoose.model('Discipline', disciplineSchema);