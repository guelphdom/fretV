const mongoose = require('mongoose');


var reportSchema = new mongoose.Schema({


uid:{type:String, required:true},
month:{type:String, required:true},
filename:{type:String, required:true},
fileId:{type:String, required:true},
fullname:{type:String, required:true},
year:{type:Number, required:true},
term:{type:Number},
class1:{type:String, required:true},
date:{type:String, required:true},
type:{type:String, required:true},




})

module.exports = mongoose.model('Report', reportSchema);