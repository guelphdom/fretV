const mongoose = require('mongoose');


var floatSchema = new mongoose.Schema({


studentName:{type:String, required:true},
studentId:{type:String, required:true},
amount:{type:Number, required:true},
oldBalance:{type:Number, required:true},
newBalance:{type:Number,required:true},
hostel:{type:String},
head:{type:String,required:true},
file:{type:String,required:true},
fileId:{type:String,required:true},
room:{type:String,required:true},
term:{type:Number,required:true},
date:{type:String,required:true},
month:{type:String,required:true},
year:{type:Number,required:true},
aggFloat:{type:Number,required:true},
aggVouchers:{type:Number,required:true},
aggBalance:{type:Number,required:true},






})

module.exports = mongoose.model('Float', floatSchema);