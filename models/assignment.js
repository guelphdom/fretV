const mongoose = require('mongoose');


var assgtSchema = new mongoose.Schema({


question:{type:String, required:true},
marks:{type:Number, required:true},
subjectCode:{type:String, required:true},
subject:{type:String, required:true},
class1:{type:String, required:true},
icon:{type:String, required:true},
mformatD:{type:String, required:true},
deadline:{type:String, required:true},
displayFormat:{type:String, required:true},
dateValue:{type:Number, required:true},
dateValueD:{type:Number, required:true},
status:{type:String,required:true},
teacherId:{type:String,required:true},
teacher:{type:String,required:true},
mformat:{type:String,required:true},
topic:{type:String, required:true},
grade:{type:Number, required:true},
assignmentId:{type:String, required:true},
year:{type:Number, required:true},
term:{type:Number, required:true},
month:{type:String, required:true},
filename:{type:String, required:true},
dateValueS:{type:Number, required:true},
mformatS:{type:String, required:true},
displayFormatS:{type:String, required:true},
uid:{type:String, required:true},
fullname:{type:String, required:true},
submissionStatus:{type:String, required:true},
color:{type:String, required:true},
style:{type:String, required:true},
size:{type:Number, required:true},
possibleMark:{type:Number, required:true},
symbol:{type:String, required:true},
result:{type:String, required:true},
quizId:{type:String, required:true},
percentage:{type:Number, required:true},
date:{type:String, required:true},
type2:{type:String,required:true},
companyId:{type:String},


})

module.exports = mongoose.model('Assignment', assgtSchema);