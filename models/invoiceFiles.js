const mongoose = require('mongoose');


var invoiceFileSchema = new mongoose.Schema({


clientName:{type:String},
code:{type:String, required:true},
month:{type:String, required:true},
filename:{type:String, required:true},
year:{type:Number, required:true},
date:{type:String, required:true},
type:{type:String, required:true},





})

module.exports = mongoose.model('invoiceFile', invoiceFileSchema );