const mongoose = require('mongoose');


var hostelRegisterSchema = new mongoose.Schema({


hostel:{type:String, required:true},
gender:{type:String, required:true},
grade:{type:Number, required:true},
class1:{type:String,required:true},
studentId:{type:String,required:true},
studentName:{type:String,required:true},
head:{type:String,required:true},
date:{type:String,required:true},
status:{type:String,required:true},
comment:{type:String,required:true},
month:{type:String,required:true},
year:{type:Number,required:true},
hostelId:{type:String,required:true},






})

module.exports = mongoose.model('Hostel Register', hostelRegisterSchema);