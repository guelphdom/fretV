const mongoose = require('mongoose');


var topUpSchema = new mongoose.Schema({


hostel:{type:String, required:true},

amount:{type:Number, required:true},
year:{type:Number,required:true},
head:{type:String,required:true},
proof:{type:String,required:true},
month:{type:String,required:true},
term:{type:Number,required:true},
hostelId:{type:String,required:true},






})

module.exports = mongoose.model('Top Up', topUpSchema);