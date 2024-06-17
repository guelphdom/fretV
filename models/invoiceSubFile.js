const mongoose = require('mongoose');


var invoiceSubFileSchema = new mongoose.Schema({

studentName:{type:String},
studentId:{type:String},
studentAddress:{type:String},
studentEmail:{type:String},
studentMobile:{type:String},
invoiceId:{type:String},
invoCode:{type:String},
invoiceCode:{type:String},
class1:{type:String},
code:{type:String},
grade:{type:Number},
item:{type:String, required:true},
qty:{type:Number, required:true},
price:{type:Number, required:true},
total:{type:Number, required:true},
month:{type:String, required:true},
description:{type:String, required:true},
year:{type:Number, required:true},
date:{type:String, required:true},
term:{type:Number, required:true},
invoiceNumber:{type:Number, required:true},
subtotal:{type:String, required:true},





})

module.exports = mongoose.model('invoiceSubFile', invoiceSubFileSchema );