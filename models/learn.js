const mongoose = require('mongoose');


var learnSchema = new mongoose.Schema({


    class1:{type:String, required:true},
    subjectCode:{type:String, required:true},
    subject:{type:String, required:true},
    icon:{type:String,required:true},
    grade:{type:Number, required:true},
    term:{type:Number, required:true},
    type:{type:String, required:true},
    mformat:{type:String, required:true},
    filename:{type:String, required:true},
    fileId:{type:String, required:true},
    year:{type:Number, required:true},
    teacherName:{type:String, required:true},
    teacherId:{type:String, required:true},
    companyId:{type:String},



})

module.exports = mongoose.model('Learn', learnSchema);