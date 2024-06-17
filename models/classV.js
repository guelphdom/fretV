const mongoose = require('mongoose');


var classSubSchema2 = new mongoose.Schema({



grade:{type:Number, required:true},
class1:{type:String, required:true},
code:{type:String, required:true},
status:{type:String, required:true},







})

module.exports = mongoose.model('ClassV', classSubSchema2);