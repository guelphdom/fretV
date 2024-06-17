const mongoose = require('mongoose');


var classSchema = new mongoose.Schema({


class1:{type:String, required:true},
className:{type:String, required:true},
numberOfStudents:{type:Number, required:true},
grade:{type:Number, required:true},
level:{type:Number, required:true},
pic1:{type:String, required:true},
pic2:{type:String, required:true},
pic3:{type:String, required:true},
avgMark:{type:Number, required:true},
paid:{type:Number, required:true},
unpaid:{type:Number, required:true},
companyId:{type:String, required:true},
male:{type:Number, required:true},
female:{type:Number, required:true},
companyId:{type:String},





})

module.exports = mongoose.model('Class', classSchema);