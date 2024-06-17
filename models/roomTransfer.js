const mongoose = require('mongoose');


var roomTransferSchema = new mongoose.Schema({


hostel:{type:String, required:true},
gender:{type:String, required:true},
to:{type:String, required:true},
from:{type:String,required:true},
studentId:{type:String,required:true},
studentName:{type:String,required:true},
hostelHead:{type:String,required:true},
date:{type:String,required:true},
month:{type:String,required:true},
reason:{type:String,required:true},
year:{type:Number,required:true},
term:{type:Number,required:true},
hostelId:{type:String}






})

module.exports = mongoose.model('Room Transfer', roomTransferSchema);