const mongoose = require('mongoose');


var alloSubSchema = new mongoose.Schema({


teacherName:{type:String, required:true},
teacherId:{type:String, required:true},
subjectCode:{type:String, required:true},
subjectName:{type:String, required:true},
grade:{type:Number, required:true},
dept:{type:String},
icon:{type:String, required:true},
class1:{type:String, required:true},
photo:{type:String},
code:{type:String, required:true},
status:{type:String, required:true},
companyId:{type:String},






})

module.exports = mongoose.model('AlloSubject', alloSubSchema);