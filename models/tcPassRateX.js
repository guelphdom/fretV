const mongoose = require('mongoose');


var tcXSchema = new mongoose.Schema({


    firstTerm:{type:Number, required:true},
    firstAvgMark:{type:Number, required:true},
    secondTerm:{type:Number, required:true},
    secondAvgMark:{type:Number, required:true},
    thirdTerm:{type:Number, required:true},
    thirdAvgMark:{type:Number, required:true},
    teacherId:{type:String, required:true},
    teacherName:{type:String, required:true},
    nwCode:{type:String, rquired:true},
    subject:{type:String, required:true},
    subjectCode:{type:String, required:true},
    type:{type:String, required:true},
    term:{type:Number, required:true},
    icon:{type:String, required:true},
    photo:{type:String},
    year:{type:Number, required:true},
    companyId:{type:String},



})

module.exports = mongoose.model('tcXPass', tcXSchema);