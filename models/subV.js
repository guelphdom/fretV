const mongoose = require('mongoose');


var subVSchema = new mongoose.Schema({


name:{type:String, required:true},
grade:{type:Number, required:true},
class1:{type:String, required:true},
code:{type:String, required:true},
code2:{type:String, required:true},
icon:{type:String,required:true},
status:{type:String,required:true},
companyId:{type:String},





})

module.exports = mongoose.model('SubV', subVSchema);