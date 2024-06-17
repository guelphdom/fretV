const mongoose = require('mongoose');


var stdDashSchema = new mongoose.Schema({


avgMark:{type:Number, required:true},
subjects:{type:Number, required:true},
pendingAssignments:{type:Number, required:true},
pendingQuiz:{type:Number, required:true},
term:{type:Number, required:true},
year:{type:Number, required:true},
companyId:{type:String, required:true},
studentId:{type:String, required:true},
uid:{type:String, required:true},
companyId:{type:String},






})

module.exports = mongoose.model('Student Dashboard', stdDashSchema);