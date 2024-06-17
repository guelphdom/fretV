const mongoose = require('mongoose');


var studentSubSchema = new mongoose.Schema({


studentName:{type:String, required:true},
studentId:{type:String, required:true},
subjectCode:{type:String, required:true},
subjectName:{type:String, required:true},
year:{type:Number, required:true},
grade:{type:Number, required:true},
class1:{type:String, required:true},
icon:{type:String, required:true},
photo:{type:String, },
companyId:{type:String},





})

module.exports = mongoose.model('StudentSubject', studentSubSchema);