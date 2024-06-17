const mongoose = require('mongoose');


var hostelRoomsSchema = new mongoose.Schema({


hostel:{type:String, required:true},
roomNumber:{type:Number, required:true},
roomName:{type:String},
floor:{type:String, required:true},
gender:{type:String, required:true},
capacity:{type:Number, required:true},
beds:{type:Number,required:true},
head:{type:String,required:true},
state:{type:String,required:true},
occupants:{type:Number,required:true},
hostelId:{type:String,required:true},
pic1:{type:String},
pic2:{type:String},







})

module.exports = mongoose.model('HostelRooms', hostelRoomsSchema);