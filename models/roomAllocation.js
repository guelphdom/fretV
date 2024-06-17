const mongoose = require('mongoose');


var roomAllocationSchema = new mongoose.Schema({


hostel:{type:String, required:true},
gender:{type:String, required:true},
room:{type:String, required:true},
class1:{type:String,required:true},
studentId:{type:String,required:true},
studentName:{type:String,required:true},
hostelHead:{type:String,required:true},
grade:{type:Number,required:true},
photo:{type:String,required:true},
floor:{type:String,required:true},
year:{type:Number,required:true},







})

module.exports = mongoose.model('Room Allocation', roomAllocationSchema);