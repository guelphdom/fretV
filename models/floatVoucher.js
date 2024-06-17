const mongoose = require('mongoose');


var floatVoucherSchema = new mongoose.Schema({


studentName:{type:String, required:true},
studentId:{type:String, required:true},
amount:{type:Number, required:true},
oldBalance:{type:Number, required:true},
newBalance:{type:Number,required:true},
hostel:{type:String},
floor:{type:String},
head:{type:String,required:true},
file:{type:String,required:true},
fileId:{type:String,required:true},
room:{type:String,required:true},
term:{type:Number,required:true},
type:{type:String,required:true},
type2:{type:String,required:true},
date:{type:String,required:true},
month:{type:String,required:true},
year:{type:Number,required:true},
aggFloat:{type:Number,required:true},
aggVouchers:{type:Number,required:true},
aggBalance:{type:Number,required:true},
iFloat:{type:Number},
iVouchers:{type:Number},
iBalance:{type:Number},






})

module.exports = mongoose.model('Float Voucher', floatVoucherSchema);