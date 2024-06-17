const mongoose = require('mongoose');


var receiptFileSchema = new mongoose.Schema({


studentName:{type:String},
studentId:{type:String},
code:{type:String, required:true},
month:{type:String, required:true},
filename:{type:String, required:true},
year:{type:Number, required:true},
date:{type:String, required:true},
type:{type:String, required:true},
term:{type:String, required:true},





})

module.exports = mongoose.model('receiptFile', receiptFileSchema );