const mongoose = require('mongoose');


var questionSchema = new mongoose.Schema({


question:{type:String, required:true},
questionStore:{type:String, required:true},
questionNo:{type:Number, required:true},
choice1:{type:String, required:true},
choice2:{type:String, required:true},
choice3:{type:String, required:true},
choice4:{type:String, required:true},
answer:{type:Number, required:true},
stdAns:{type:Number, required:true},
activeNum:{type:Number, required:true},
quizId:{type:String, required:true},
quizDuration:{type:Number, required:true},
studentId:{type:String, required:true},
finalAns:{type:String, required:true},
status:{type:String, required:true},
status2:{type:String, required:true},
year:{type:Number, required:true},
companyId:{type:String},
idX:{type:String, required:true},
chunkSize:{type:Number, required:true},
uploadDate:{type:Date, required:true},
filename:{type:String, required:true},
fileId:{type:String, required:true},
md5:{type:String, required:true},
contentType:{type:String, required:true},






})

module.exports = mongoose.model('Questions', questionSchema);