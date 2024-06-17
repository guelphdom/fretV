const mongoose = require('mongoose');


var reportAttSchema = new mongoose.Schema({


subjectCode:{type:String, required:true},
month:{type:String, required:true},
filename:{type:String, required:true},
fileId:{type:String, required:true},
year:{type:Number, required:true},
date:{type:String, required:true},
type:{type:String, required:true}




})

module.exports = mongoose.model('ReportAtt', reportAttSchema);