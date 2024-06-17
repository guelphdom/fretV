const mongoose = require('mongoose');


var recNumSchema = new mongoose.Schema({


num:{type:Number, required:true},







})

module.exports = mongoose.model('ReceiptNum', recNumSchema);