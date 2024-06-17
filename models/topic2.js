const mongoose = require('mongoose');


var topicSubSchema2 = new mongoose.Schema({


name:{type:String, required:true},
subjectCode:{type:String, required:true},
subjectName:{type:String, required:true},
year:{type:Number, required:true},
teacherId:{type:String, required:true},
grade:{type:Number, required:true},
class1:{type:String, required:true},
status:{type:String, required:true},
teacherId:{type:String, required:true},
companyId:{type:String},





})

module.exports = mongoose.model('Topic2', topicSubSchema2);