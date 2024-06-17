const mongoose = require('mongoose');


var invoNumSchema = new mongoose.Schema({


num:{type:Number, required:true},







})

module.exports = mongoose.model('InvoNum', invoNumSchema);