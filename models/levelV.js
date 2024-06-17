const mongoose = require('mongoose');


var levelSubSchema2 = new mongoose.Schema({



grade:{type:Number, required:true},
code:{type:String, required:true},
status:{type:String, required:true},







})

module.exports = mongoose.model('LEVELV', levelSubSchema2);