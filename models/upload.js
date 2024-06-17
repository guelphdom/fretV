var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var uploadSchema= new mongoose.Schema({
    imagename:String,
    studentId:{type:String, required:true},
    studentName:{type:String, required:true},
    teacherId:{type:String, required:true},
    teacherName:{type:String, required:true},
    asignmentId:{type:String, required:true},
    mformat:{type:String, required:true},
    companyId:{type:String},
    date:{type:String, required:true}
})


var uploadModel = mongoose.model('uploadimage',uploadSchema);
module.exports = uploadModel;