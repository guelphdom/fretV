const mongoose = require('mongoose');


var receiptSchema = new mongoose.Schema({


studentName:{type:String},
studentId:{type:String},
clerk:{type:String},
studentAddress:{type:String},
studentEmail:{type:String},
studentMobile:{type:String},
month:{type:String, required:true},
filename:{type:String, required:true},
year:{type:Number, required:true},
date:{type:String, required:true},
type:{type:String, required:true},
term:{type:Number, required:true},
receiptNumber:{type:Number, required:true},
status:{type:String, required:true},
amountPaid:{type:Number, required:true},
remainingBalance:{type:Number, required:true},
datePaid:{type:String, required:true}

})

module.exports = mongoose.model('Receipt', receiptSchema );