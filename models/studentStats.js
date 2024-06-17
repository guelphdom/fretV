const mongoose = require('mongoose');


var studentSchema = new mongoose.Schema({


year1:{type:Number, required:true},
year2:{type:Number, required:true},
year3:{type:Number, required:true},
year4:{type:Number, required:true},
year5:{type:Number, required:true},
year6:{type:Number, required:true},
year7:{type:Number, required:true},
year8:{type:Number, required:true},
year9:{type:Number, required:true},
year10:{type:Number, required:true},
startYear:{type:Number, required:true},
count:{type:Number, required:true},
companyId:{type:String},





})

module.exports = mongoose.model('Student', studentSchema);