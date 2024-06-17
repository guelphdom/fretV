const mongoose = require('mongoose');


var hostelFloatSchema = new mongoose.Schema({


hostel:{type:String, required:true},

float:{type:Number, required:true},
year:{type:Number,required:true},
head:{type:String,required:true},
proof:{type:String,required:true},

hostelId:{type:String,required:true},






})

module.exports = mongoose.model('Hostel Float', hostelFloatSchema);