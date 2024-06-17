const mongoose = require('mongoose');


var hostelSchema = new mongoose.Schema({


name:{type:String, required:true},
gender:{type:String, required:true},
capacity:{type:Number, required:true},
rooms:{type:Number, required:true},
roomsAvailable:{type:Number,required:true},
location:{type:String},
head:{type:String,required:true},
studentMaxNo:{type:Number,required:true},
balance:{type:Number,required:true},
hostelId:{type:String,required:true},






})

module.exports = mongoose.model('Hostel', hostelSchema);