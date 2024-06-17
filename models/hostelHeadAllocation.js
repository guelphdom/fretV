const mongoose = require('mongoose');


var hostelHeadAllocationSchema = new mongoose.Schema({


hostelName:{type:String, required:true},
gender:{type:String, required:true},

headId:{type:String,required:true},

headName:{type:String,required:true},


year:{type:Number,required:true},
hostelId:{type:String,required:true},






})

module.exports = mongoose.model('HostelHeadAllocation', hostelHeadAllocationSchema);