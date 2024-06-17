const mongoose = require('mongoose');


var disciplineSubSchema = new mongoose.Schema({


name:{type:String, required:true},
mark:{type:Number, required:true},
level:{type:String, required:true},
type:{type:String, required:true},
code:{type:String,required:true},
code2:{type:String,required:true},
status:{type:String,required:true},







})

module.exports = mongoose.model('Discipline Sub', disciplineSubSchema);