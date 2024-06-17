const mongoose = require('mongoose');


var studentDiscReportSchema = new mongoose.Schema({


studentName:{type:String, required:true},
uid:{type:String, required:true},
room:{type:String},
hostel:{type:String, required:true},
head:{type:String, required:true},
month:{type:String, required:true},
filename:{type:String, required:true},
year:{type:Number, required:true},
term:{type:Number},
date:{type:String, required:true},
type:{type:String, required:true},


})

module.exports = mongoose.model(' StudentDiscReport', studentDiscReportSchema);